import express from "express";
import cors from "cors";
import { tranlated_text } from "./models/api_server.js";

const app = express();
const PORT = 3000;

// middlewares
app.use(cors());
app.use(express.json()); // <-- this parses JSON bodies

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.post("/translate", async (req, res) => {
    // after express.json(), req.body will be an object
    const textENG = req.body.text;

    try {
        const textTranslated = await tranlated_text(textENG);
        res.send({ tranlated_text: textTranslated });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Translation failed" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
