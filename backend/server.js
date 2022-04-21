const express = require("express");
const fs = require('fs');

const app = express();
const multer = require("multer");

let username = 'praveen'
let dir = 'uploads/' + username;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, dir)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

var upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload_files", upload.array("files"), uploadFiles);
function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
    res.send();
}
app.listen(5000, () => {
    console.log(`Server started...`);
});