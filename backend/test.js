const dns = require("node:dns");

dns.resolveSrv("_mongodb._tcp.cluster0.ivwozpg.mongodb.net", (err, records) => {
  console.log("Error:", err);
  console.log("Records:", records);
});