const express = require("express");
let app = express();

app.use(express.static('frontend'));

let port = process.env.PORT || 8800;
let listening = () => {
    console.log("Serving at localhost:" + port);
}

app.listen(port, listening)
