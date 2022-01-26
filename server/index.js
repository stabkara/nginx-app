const express = require("express");
const app = express();
var cors = require("cors");
const router = express.Router();
const routes = require("./routes")(router, {});
app.use(cors());
app.use(routes);
app.get("/hello", (req, res) => {
  let response = {
    text: "Hello, world!",
  };
  res.send(JSON.stringify(response));
});

// Setting the server to listen at port 3000
app.listen(3000, function (req, res) {
  console.log("Server is running at port 3000");
});
