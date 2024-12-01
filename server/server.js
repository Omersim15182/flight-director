const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

app.use(cors());
app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/flight-director");
}

const dataSchema = new Schema({
  altitude: String,
  compass: String,
  horizontalAngle: String,
});

const Data = mongoose.model("inputData", dataSchema, "inputData");

app.post("/sendData", async (req, res) => {
  const { altitude, compass, horizontalAngle } = req.body;
  console.log("Received Data:", { altitude, compass, horizontalAngle });

  const inputData = new Data({ altitude, compass, horizontalAngle });
  try {
    res.status(200).json({
      message: "Data received and inserted successfully",
      data: req.body,
    });

    await inputData.save();
  } catch (error) {
    console.error("Error processing data:", error);
    res.status(500).json({ message: "Error processing data" });
  }
});

app.listen(3000);
