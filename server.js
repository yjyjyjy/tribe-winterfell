const express = require("express");

const app = express();

app.use("/api/query", require("./routes/api/query"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT} > Winter is coming!`)
);
