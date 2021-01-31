const { Client } = require("@elastic/elasticsearch");
const config = require("config");

const citadelNode = config.get("citadelNode");
const citadelClient = new Client({ node: citadelNode });

module.exports = citadelClient;
