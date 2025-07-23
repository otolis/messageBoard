const db = require("../db/queries");

// controller for getting messages from db and rendering(get) in my view/index
async function allMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { messages });
  } catch (error) {
    console.error("Error retrieving messages: ", error);
    res.status(500).send("Error retriving messages");
  }
}
// controller that gets info from front and saves it in the db
async function message(req, res) {
  const { messageText, messageUser } = req.body;
  try {
    await db.insertMessages(messageText, messageUser);
    res.redirect("/");
  } catch (error) {
    console.error("Error creating message: ", error);
    res.status(500).send("Error creating message");
  }
}

module.exports = {
  allMessages,
  message,
};
