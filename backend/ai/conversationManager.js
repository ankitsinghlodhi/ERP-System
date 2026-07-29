// Stores conversations in server memory
const conversations = new Map();

// Maximum messages to keep per user
const MAX_HISTORY = 10;

// Get conversation history
exports.getConversation = (userId) => {
  return conversations.get(userId) || [];
};

// Add a new message
exports.addMessage = (userId, role, text) => {
  const history = conversations.get(userId) || [];

  history.push({
    role,
    text,
    timestamp: new Date(),
  });

  // Keep only last 10 messages
  if (history.length > MAX_HISTORY) {
    history.shift();
  }

  conversations.set(userId, history);
};

// Clear conversation
exports.clearConversation = (userId) => {
  conversations.delete(userId);
};