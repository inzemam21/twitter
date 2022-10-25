const express = require('express');
const app = express();
const PORT = 3000;



const server = app.listen(PORT, () => console.log("Server listening on Port " + PORT));


app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
    res.status(200).render("home");
})