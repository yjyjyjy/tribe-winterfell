const express = require("express");
const router = express.Router();
// const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const request = require("request");
const citadelClient = require("../../config/citadel");
const axios = require("axios");

const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

// query citadel (Elastic Search Cluster)
router.get("/", async (req, res) => {
  try {
    console.log("🚀🚀🚀🚀 HERE ");
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

    // Let's start by indexing some data
    // await client.index({
    //   index: 'game-of-thrones',
    //   // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    //   body: {
    //     character: 'Ned Stark',
    //     quote: 'Winter is coming.'
    //   }
    // })

    const { body } = await client.search({
      // index: 'jobs_wiki',
      // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
      body: {
        query: {
          multi_match: {
            query: "boom",
            fields: ["text"],
          },
        },
      },
    });

    // console.log(body.hits.hits);
    console.log("GOGOGOGO")
    res.json(body.hits.hits);

    // request(
    //   "http://localhost:9200/_search",
    //   {
    //     query: {
    //       multi_match: {
    //         query: "jobs",
    //         fields: ["text"],
    //       },
    //     },
    //   },
    //   (error, response, body) => {
    //     // res.json(response)

    //     if (error) {
    //       console.log("🚀🚀🚀🚀 error ");
    //       console.log(error);
    //     }
    //     if (response.statusCode !== 200) {
    //       console.log("🚀🚀🚀🚀 statusCode ");
    //       console.log(response);
    //       return res.status(404).json({ msg: "No Github profile found!" });
    //     }
    //     console.log("🚀🚀🚀🚀 pass ");
    //     res.json(JSON.parse(body));
    //   }
    // );
  } catch (err) {
    console.log(err);
    // res.json(err);
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