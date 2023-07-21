// step1: create a folder
// step2: move into that folder
// step3: npm init -y
// step4: npm i express
// step6: create server.js file

// Server Instantiate
const express = require("express");
const app = express();

// used to parse req.body in express -> PUT or POST
const bodyParser = require("body-parser");
// specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

// Activate the server on port 3000
app.listen(3000, () => {
  console.log("Server Started at port no. 3000");
});

// Routes
app.get("/", (request, response) => {
  response.send("Hello jee, Kaise ho");
});

app.post("/api/cars", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car Submitted Successfully.");
});

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Recieved an error");
  });
