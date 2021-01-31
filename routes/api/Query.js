const express = require("express");
const router = express.Router();
// const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
// const request = require("request");
const citadelClient = require("../../config/citadel");

// query citadel (Elastic Search Cluster)
router.post(
  "/",
  // [[check("queryString", "queryString is required").not().isEmpty()]],
  async (req, res) => {
    // check if queryString is empty
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      console.log("SERVER END BEING HITTT ⛑⛑⛑⛑⛑");
      console.log(req.body);

      const { queryString } = req.body;
      console.log("🔭🔭🔭 Searching: " + queryString);

      const { body } = await citadelClient.search({
        // index: "jobs",
        body: {
          query: {
            multi_match: {
              query: queryString,
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
  }
);

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
