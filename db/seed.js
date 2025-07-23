const pool = require("../db/pool");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  username VARCHAR(255) NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username) VALUES
  ('Hi there!', 'Amando'),
  ('Hello World!', 'Charles');
`;
async function main() {
  console.log("Seeding...");
  try {
    const client = await pool.connect();
    try {
      await client.query(SQL);
      console.log("Database seeded successfully");
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

main();
