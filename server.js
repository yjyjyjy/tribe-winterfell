const express = require("express");

// const { Client } = require("@elastic/elasticsearch");

const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

client.ping({}, { requestTimeout: 20000 }, (err, response) => {
  if (!!err) {
    console.error("elasticsearch cluster is down!");
    console.log(err);
  } else {
    console.log("Everything is ok");
  }
});


async function run () {
  // Let's start by indexing some data
  await client.index({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      character: 'Ned Stark',
      quote: 'Winter is coming.'
    }
  })

  await client.index({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      character: 'Daenerys Targaryen',
      quote: 'I am the blood of the dragon.'
    }
  })

  await client.index({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      character: 'Tyrion Lannister',
      quote: 'A mind needs books like a sword needs a whetstone.'
    }
  })

  // here we are forcing an index refresh, otherwise we will not
  // get any result in the consequent search
  await client.indices.refresh({ index: 'game-of-thrones' })

  // Let's search!
  // const { body } = await client.search({
  //   index: 'game-of-thrones',
  //   // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
  //   body: {
  //     query: {
  //       match: { quote: 'winter' }
  //     }
  //   }
  // })

  const { body } = await client.search({
    index: 'jobs',
    // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      "query": {
        "multi_match" : {
          "query":    "split pipeline jymbii", 
          "fields": [ "name", "text" ] 
        }
      }
        , "_source": [
        "name"
        ,"owners.displayName"
        ]
    
    }
  })


  console.log(body.hits.hits)
}

run().catch(console.log)

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
