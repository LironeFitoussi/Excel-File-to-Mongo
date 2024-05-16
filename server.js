const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./.env" });

const db = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB Connected");

    // Start the Express server
    const port = process.env.PORT || 3000;
    const server = app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });

    // Emit event when server is ready
    server.on("listening", () => {
      app.emit("appStarted");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
