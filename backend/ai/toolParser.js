exports.parseToolResponse = (text) => {
  try {
    let cleaned = text.trim();

    cleaned = cleaned.replace(/```json/g, "");
    cleaned = cleaned.replace(/```/g, "");
    cleaned = cleaned.trim();

    const parsed = JSON.parse(cleaned);

    if (!parsed.tool) return null;

    return parsed;
  } catch {
    return null;
  }
};