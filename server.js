const express = require("express");

const app = express();

// a new way to do bodyParser
app.use(express.json({ extended: false }));

app.use("/api/search", require("./routes/api/search"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT} > Winter is coming!`)
);
