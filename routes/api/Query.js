const express = require("express");
const router = express.Router();
// const auth = require("../../middleware/auth");
// const { check, validationResult } = require("express-validator");
// const request = require("request");
const citadelClient = require("../../config/citadel");

// query citadel (Elastic Search Cluster)
router.get("/", async (req, res) => {
  try {
    console.log("🚀🚀🚀🚀 HERE ");
    const { body } = await citadelClient.search({
      index: "jobs",
      body: {
        query: {
          multi_match: {
            query: "split pipeline jymbii",
            fields: ["name", "text"],
          },
        },
        _source: ["name", "owners.displayName", "text"],
      },
    });
    
    res.json(body.hits.hits);

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

// Let's start by indexing some data
// await client.index({
//   index: 'game-of-thrones',
//   // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
//   body: {
//     character: 'Ned Stark',
//     quote: 'Winter is coming.'
//   }
// })
