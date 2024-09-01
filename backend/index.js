const express = require('express');
// const multer = require('multer');
const path = require('path');
const app = express();
const cors = require("cors");
// const { Configuration, OpenAIApi } = require("openai");
// const nodemailer = require("nodemailer");
const port = 8000;
app.use(cors());
const { mongoDB } = require('./db');
app.use(express.json());
const mongo =  mongoDB();



// //OpenAI api config
// const config = new Configuration({
//     apiKey: "",
// });

// const openai = new OpenAIApi(config);

// //Chatbot endpoint
// app.post("/gpt", async (req, res) => {
//     //const prompt="Write a c code for armstrong number"
//     const { prompt } = req.body;

//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: prompt,
//         max_tokens: 2048,
//         temperature: 1,
//     });
//     res.send(response.data.choices[0].text);
//     //console.log(response.data);

// })

//DB usable
app.use("/api", require("./Routes/createUser"));

// app.use("/api", require("./Routes/getAlternates"));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

