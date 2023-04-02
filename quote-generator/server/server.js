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

app.post("/api/quotes", (req, res) => {
  const { author, content } = req.body;
  console.log("Author : " + author);
  console.log("Content : " + content);

  pool
    .query(
      `INSERT INTO quotes (author, content) VALUES ('${author}', '${content}');`
    )
    .then((response) => {
      console.log("Data Saved : " + author + " -- " + content);
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  res.send("Record Saved");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
