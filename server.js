const express = require("express");
var exphbs = require("express-handlebars");
const apiRouter = require("./controllers.js/apiRouter");
const htmlRouter = require("./controllers.js/htmlRouter");

const PORT = process.env.PORT || 3000;
const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRouter);
app.use("/", htmlRouter);

app.use("*", (req, res) => {
  res.send("fallback response");
});

app.listen(PORT, () => {
  console.log(`your app is running on port: ${PORT}`);
});
