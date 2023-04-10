const mongoose = require("mongoose");

exports.DBconnection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log(`Database sucessfully connected`);
    })
    .catch((err) => {
      console.log(`Database connection Error : ${err}`);
    });
};
