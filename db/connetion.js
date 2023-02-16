const mongoose = require("mongoose");

const connectMongo = async () => {
  return await mongoose.connect(
    "mongodb+srv://dimsaw85:dimsaw85@cluster0.6wvtrcq.mongodb.net/db-contacts?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = { connectMongo };
