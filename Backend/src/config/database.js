<<<<<<< HEAD
<<<<<<< HEAD:interview-ai-yt1/Backend/src/config/database.js
const mongoose = require("mongoose")



async function connectToDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to Database")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB
=======
=======
>>>>>>> d4f8b9ef35f6d0ab732b450a2a0e4c4f4b3dec04
const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDB;
<<<<<<< HEAD
>>>>>>> 966552f (fixed pdf library for vercel):Backend/src/config/database.js
=======
>>>>>>> d4f8b9ef35f6d0ab732b450a2a0e4c4f4b3dec04
