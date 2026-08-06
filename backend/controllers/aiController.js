const aiService = require("../services/aiService");

exports.chatWithAI = async (req, res) => {

  try {

    const {
      message,
    } = req.body;
    // console.log("Request body:", req.body);
    // console.log("Authenticated user:", req.user);

    const reply =
      await aiService.chat({
        user: req.user,
        message,
      });

    res.status(200).json({
      success: true,
      reply,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: "AI failed.",
    });

  }

};