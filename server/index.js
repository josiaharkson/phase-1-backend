const express = require("express");
const config = require("./config");
const PORT = parseInt(process.env.PORT, 10) || 5000;

let app = express();
app = config(app);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
