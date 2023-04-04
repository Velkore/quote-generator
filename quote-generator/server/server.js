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

app.delete("/api/quotes/:id", async (req, res) => {
  const id = Number.parseInt(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).send("Invalid ID");
  }

  try {
    const { rows } = await pool.query(
      "DELETE FROM quotes WHERE id = $1 RETURNING *",
      [id]
    );
    const deletedQuote = rows[0];
    console.log(deletedQuote);
    if (deletedQuote) {
      res.send(deletedQuote);
    } else {
      res.status(404).send("No quote found with that ID");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
