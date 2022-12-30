const mongoose = require("mongoose");

const db = () => {
  // Database connection using mongoose
  mongoose.connect(process.env.MONGO_DB, () => {
    console.log(`Database connected successfully`);
  });
};

module.exports = {
    db
}
