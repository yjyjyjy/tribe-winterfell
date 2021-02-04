const express = require("express");
const router = express.Router();
// const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
// const request = require("request");
const citadelClient = require("../../config/citadel");

// query citadel (Elastic Search Cluster)
router.post(
  "/",
  // [[check("searchString", "searchString is required").not().isEmpty()]],
  async (req, res) => {
    // check if searchString is empty
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      console.log("SERVER END BEING HITTT ⛑⛑⛑⛑⛑");
      console.log(req.body);

      const { searchString } = req.body;
      console.log("🔭🔭🔭 Searching: " + searchString);

      const { body } = await citadelClient.search({
        // index: "jobs",
        body: {
          query: {
            multi_match: {
              query: searchString,
              fields: ["name", "text"],
            },
          },
          _source: ["name", "owners.displayName", "text"],
        },
      });
      let searchResult = [];
      if (body.hits.hits.length > 0) {
        console.log("🔥");
        searchResult = body.hits.hits.map((hit) => ({
          title: hit._source.name,
          text: hit._source.text,
          score: hit._score,
          source: hit._index,
          url: hit._id,
        }));
      }
      res.json(searchResult);
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
