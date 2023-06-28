const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

//To parse json body
app.use(express.json());

//Normal request Object
app.get("/", (req, res) => {
  console.log(req);
  res.status(200).json({
    message: "All about request Object",
  });
});

//Normal params
app.get("/:name", (req, res) => {
  console.log(req.params.name);
  res.status(200).json({
    message: "All about request Object",
  });
});

//Normal query when localhost:3000?name=cody
app.get("/", (req, res) => {
  console.log(req.query);
  res.status(200).json({
    message: "All about request Object",
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});
