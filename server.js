const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const routes = require("./routes/routes");

const app = express();
app.set("port", process.env.PORT || 3000);
const PORT = app.get("port");
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
