const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./dbcon");

app.use(express.json());
app.use(cors());

app.get("/api/quotes", (req, res, next) => {
  pool.query("SELECT * FROM quotes", (err, data) => {
    if (err) {
      return next(err);
    }

    const rows = data.rows;
    console.log(rows);
    return res.send(rows);
  });
});

app.post("/api/quotes", async (req, res) => {
  try {
    const { author, content } = req.body;
    console.log("Author: " + author);
    console.log("Content: " + content);

    const response = await pool.query(
      "INSERT INTO quotes (author, content) VALUES ($1, $2)",
      [author, content]
    );
    console.log("Data saved: " + author + " -- " + content);
    console.log(response);

    res.send("Record saved");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving record");
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
