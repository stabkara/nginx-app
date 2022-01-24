const express = require("express");
const app = express();
var cors = require("cors");
const router = express.Router();
const routes = require("./routes")(router, {});
app.use("/api", routes);

app.use(cors());
// Defining get request at '/' route

// Setting the server to listen at port 3000
app.listen(3000, function (req, res) {
  console.log("Server is running at port 3000");
});
