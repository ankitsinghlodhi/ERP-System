// Stores pending AI actions in memory

const pendingActions = new Map();


exports.setPendingAction = (userId, action) => {
  pendingActions.set(userId, action);
};


exports.getPendingAction = (userId) => {
  return pendingActions.get(userId) || null;
};


exports.clearPendingAction = (userId) => {
  pendingActions.delete(userId);
};