const pool = require("./pool");
// function to get the messages from the db and bubbles error
async function getAllMessages() {
  try {
    const result = await pool.query(
      "SELECT * FROM messages ORDER BY added DESC"
    );

    return result.rows;
  } catch (error) {
    console.error("Error fetching messages: ", error);
    throw error;
  }
}
// function to insert messages from user to db bubbles error
async function insertMessages(messageText, messageUser) {
  try {
    await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [
      messageText,
      messageUser,
    ]);
  } catch (error) {
    console.error("Error inserting message: ", error);
    throw error;
  }
}

module.exports = {
  getAllMessages,
  insertMessages,
};
