const app = require("./app");

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
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
