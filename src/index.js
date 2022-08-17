const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

//setting the path
const staticpath = path.join(__dirname, '../public')
const templatepath = path.join(__dirname, '../templates/views')
const partialpath = path.join(__dirname, '../templates/partials')

//middlewares
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/jq', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);


//routing
app.get("/", (req, res) => {
    res.render("index");
})

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening at Port no ${port}`);
})

