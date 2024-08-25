const express = require("express");

const cors=require("cors")
const routeHandler = require("./routes");

const app = express();

app.use(express.json());
app.use(cors())

app.use("/", routeHandler);

app.listen(4000, () => {
  console.log(`running on port 4000`);
});
