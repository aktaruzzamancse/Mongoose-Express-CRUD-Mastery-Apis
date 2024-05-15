import config from "./app/config";
import mongoose from "mongoose";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`App listening from port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
