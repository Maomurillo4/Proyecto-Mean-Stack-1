import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB : ON");
  } catch (e) {
    console.log("Error connecting to MongoDB: \n " + e);
  }
};

//exportamos por defecto el archivo db como un módulo para que el index.js
export default { dbConnection };