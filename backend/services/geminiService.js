
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function askGemini(contents) {
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents,
      });

      return response.text;
    } catch (err) {
      lastError = err;

      // Retry only if the service is temporarily unavailable
      if (err.status === 503 && attempt < 3) {
        console.log(
          `Gemini busy. Retrying (${attempt}/3)...`
        );

        await new Promise((resolve) =>
          setTimeout(resolve, attempt * 1000)
        );

        continue;
      }

      throw err;
    }
  }

  throw lastError;
}

exports.generateResponse = async (systemPrompt, history) => {
  const contents = [];

  contents.push({
    role: "user",
    parts: [{ text: systemPrompt }],
  });

  history.forEach((msg) => {
    contents.push({
      role: msg.role,
      parts: [{ text: msg.text }],
    });
  });

  return askGemini(contents);
};

exports.generateFinalResponse = async (
  systemPrompt,
  history,
  userMessage,
  toolResult
) => {
  const contents = [];

  contents.push({
    role: "user",
    parts: [{ text: systemPrompt }],
  });

  history.forEach((msg) => {
    contents.push({
      role: msg.role,
      parts: [{ text: msg.text }],
    });
  });

  contents.push({
    role: "user",
    parts: [
      {
        text: `
The user asked:

${userMessage}

Tool Result:

${JSON.stringify(toolResult, null, 2)}

Answer the user's question naturally using the tool result.
Do not mention internal tools or JSON.
`,
      },
    ],
  });

  return askGemini(contents);
};