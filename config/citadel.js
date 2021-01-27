const { Client } = require("@elastic/elasticsearch");
const config = require("config");
const localCitadelNode = config.get("localCitadelNode");

const citadelClient = new Client({
  node: localCitadelNode,
  auth: {
    apiKey: {
      id: "foo",
      api_key: "bar",
    },
  },
});

module.exports = citadelClient;
