const express = require("express");

const app = express();

// client.ping(
//   {
//     requestTimeout: 30000,
//   },
//   function (error) {
//     // at this point, eastic search is down, please check your Elasticsearch service
//     if (error) {
//       console.error("elasticsearch cluster is down!");
//       console.log(error);
//     } else {
//       console.log("Everything is ok");
//     }
//   }
// );

app.use("/api/query", require("./routes/api/query"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT} > Winter is coming!`)
);
