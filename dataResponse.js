const http = require("http");
const port = process.env.PORT || 3000;

const data = [
  {
    id: 1,
    name: "Roy",
  },
  {
    id: 2,
    name: "Yin",
  },
  {
    id: 3,
    name: "Chin",
  },
];

const server = http.createServer((req, res) => {
  // set the headers
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Content-Lanaguage", "en-US");
  res.setHeader("Date", new Date(Date.now()));
  res.setHeader("X-Powered-By", "Node-js");
  res.end(JSON.stringify({ success: true, results: data.length, data }));
});

server.listen(port, () => {
  console.log("Server is started");
});
