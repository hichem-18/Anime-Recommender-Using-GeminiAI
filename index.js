const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const API_KEY = process.env.GOOGLE_API_KEY;

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
const genAI = new GoogleGenerativeAI(API_KEY);

// ...

async function run(capitalizedInput) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Suggest three anime that are similar to the input but is NOT the same anime to the input: ${capitalizedInput}, only their names no description`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", async (req, res) => {
  try {
    const suggestions = await run(req.body.animeName);
    res.render("index.ejs", { result: suggestions });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
