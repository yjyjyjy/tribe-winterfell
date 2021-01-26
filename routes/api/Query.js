const express = require("express");
const router = express.Router();
// const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const request = require("request");
const citadelClient = require("../../config/citadel");

// query citadel (Elastic Search Cluster)
router.get("/", async (req, res) => {
  console.log("LIVE");
  try {
    // const result = await citadelClient.search({
    //   index: "jobs",
    //   body: {
    //     query: {
    //       multi_match: {
    //         query: "jobs",
    //         fields: ["text"],
    //       },
    //     },
    //   },
    // });
    // console.log(result);
    res.json('yes');
  } catch (err) {
    console.log(err)
    res.json(err);
  }
});

module.exports = router;
