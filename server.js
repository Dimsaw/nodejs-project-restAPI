const app = require("./app");
require("dotenv").config();
const { connectMongo } = require("./db/connetion");

const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectMongo();
    console.log("Database connection successful");
    app.listen(PORT, (error) => {
      if (error) console.error("Error at server launch", error);
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to lauch apllication with error ${error.message}`);
    process.exit(1);
  }
};

start();
