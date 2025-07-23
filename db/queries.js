const pool = require("./pool");
async function getAllMessages() {
  try {
    const result = await pool.query(
      "SELECT * FROM messages ORDER BY added DESC"
    );
    console.log("results: ", result);
    return result.rows;
  } catch (error) {
    console.error("Error fetching messages: ", error);
    throw error;
  }
}

async function insertMessages() {
  try {
    await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [
      text,
      username,
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
