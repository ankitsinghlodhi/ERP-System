const User = require("../models/User");

const geminiService = require("./geminiService");

const conversationManager = require("../ai/conversationManager");

const pendingActionManager = require("../ai/pendingActionManager");

const { getSystemPrompt } = require("../ai/systemPrompt");

const { parseToolResponse } = require("../ai/toolParser");

const toolRegistry = require("../ai/toolRegistry");

exports.chat = async ({ user, message }) => {
  const currentUser = await User.findById(user.userId);

  if (!currentUser) {
    throw new Error("User not found");
  }

  const systemPrompt = getSystemPrompt(currentUser);

  // Save user message
  conversationManager.addMessage(
    user.userId,
    "user",
    message
  );

  const history =
    conversationManager.getConversation(
      user.userId
    );

  // ====================================================
  // STEP 1 : Check if user is already completing an action
  // ====================================================

  const pendingAction =
    pendingActionManager.getPendingAction(
      user.userId
    );

  let reply;

  if (pendingAction) {
    const pendingPrompt = `
You are College Cube AI Assistant.

The user is currently completing an unfinished ERP action.

Below is the information already collected.

${JSON.stringify(pendingAction, null, 2)}

The user's latest reply is:

"${message}"

----------------------------------------------------

VERY IMPORTANT

The information already collected is CORRECT.

Do NOT ask for it again.

Do NOT remove it.

Merge the user's latest reply into the existing information.

Only ask for information that is still genuinely missing.

----------------------------------------------------

If enough information exists,

return a COMPLETE JSON object.

Always include ALL of these fields:

- tool
- receiverRole
- category
- subject
- message

Do NOT return only the newly collected fields.

Do NOT omit any previously collected information.

Return ONLY JSON.

Example

{
  "tool":"sendApplication",
  "receiverRole":"ADMIN",
  "category":"LEAVE",
  "subject":"Application for Four Days Leave",
  "message":"Respected Sir/Madam, I respectfully request four days leave because I am suffering from viral fever. Kindly grant my leave. Thank you."
}

----------------------------------------------------

If information is still missing,

keep every existing field,

add the newly understood information,

and ask ONLY the remaining question.

Example

{
  "tool":"collectApplication",
  "receiverRole":"ADMIN",
  "category":"LEAVE",
  "days":4,
  "reason":"viral fever",
  "question":"How many days leave do you need?"
}

Return ONLY JSON.
`;

    reply = await geminiService.generateResponse(
      pendingPrompt,
      history
    );
  } else {
    // Normal AI flow
    reply = await geminiService.generateResponse(
      systemPrompt,
      history
    );
  }

  // ====================================================
  // STEP 2 : Parse Tool
  // ====================================================

  const toolRequest =
    parseToolResponse(reply);

  if (toolRequest) {
    const toolHandler =
  toolRegistry.getTool(
    toolRequest.tool
  );

if (!toolHandler) {
  throw new Error(
    `Unknown tool: ${toolRequest.tool}`
  );
}

const { tool, ...args } = toolRequest;

const toolResult =
  await toolHandler.handler(
    currentUser,
    args
  );

    // continueApplication directly returns
    // the next question.
    if (toolRequest.tool === "collectApplication") {

    conversationManager.addMessage(
        user.userId,
        "model",
        toolResult
    );

    return toolResult;
}

    // Application successfully sent
    if (
      toolRequest.tool ===
      "sendApplication"
    ) {
      pendingActionManager.clearPendingAction(
        user.userId
      );
    }

    reply =
      await geminiService.generateFinalResponse(
        systemPrompt,
        history,
        message,
        toolResult
      );
  }

  conversationManager.addMessage(
    user.userId,
    "model",
    reply
  );

  return reply;
};