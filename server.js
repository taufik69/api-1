require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { DBconnection } = require("./configuration/DbConnect.js");
const routes = require("./routes");

/* -------------------------------------------------------------------------- */
/*                               // todo all middleware//                               */
/* -------------------------------------------------------------------------- */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
DBconnection();
app.use(routes);

/* -------------------------------------------------------------------------- */
/*                               // todo all middleware//                               */
/* -------------------------------------------------------------------------- */
app.listen(process.env.PORT, () => {
  console.log(`Server Running is ${process.env.PORT}`);
});
