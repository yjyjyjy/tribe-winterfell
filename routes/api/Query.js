const express = require("express");
const router = express.Router();
// const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const request = require("request");
const citadelClient = require("../../config/citadel");
const axios = require("axios");

// query citadel (Elastic Search Cluster)
router.get("/", async (req, res) => {
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

    // const options = {
    //   uri: `http://localhost:5000/api/query`,
    //   method: "GET",
    //   // headers: { "user-agent": "node.js" },
    //   body: {
    //     "query": {
    //       "multi_match" : {
    //         "query":    "jobs",
    //         "fields": [ "text" ]
    //       }
    //     }
    //   }
    // };

    // const response = await axios.get("http://localhost:9200/_search", {
    //   query: {
    //     multi_match: {
    //       query: "jobs",
    //       fields: ["text"],
    //     },
    //   },
    // });

    // res.send(response);

    // axios.get("http://www.google.com").then((response) => {
    //   // handle success
    //   res.send(response);
    // });

    request(
      "http://localhost:9200/_search",
      {
        "query": {
          "multi_match" : {
            "query":    "jobs", 
            "fields": [ "text" ] 
          }
        }
      },
      (error, response, body) => {
        // res.json(response)

        if (error) {
          console.log("🚀🚀🚀🚀 error ");
          console.log(error);
        }
        if (response.statusCode !== 200) {
          console.log("🚀🚀🚀🚀 statusCode ");
          console.log(response);
          return res.status(404).json({ msg: "No Github profile found!" });
        }
        console.log("🚀🚀🚀🚀 pass ");
        res.json(JSON.parse(body));
      }
    );
  } catch (err) {
    console.log(err);
    // res.json(err);
  }
});

module.exports = router;
