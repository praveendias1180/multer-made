const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload_files", uploadFiles);
function uploadFiles(req, res) {
    console.log(req.body);
    res.json({ message: "Successfully uploaded files" });
    res.send();
}
app.listen(5000, () => {
    console.log(`Server started...`);
});