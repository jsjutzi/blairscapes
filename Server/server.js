const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const blairscapes_controller = require('./blairscapes_controller.js');

require("dotenv").config();
const port = 3001;
const app = express();

app.use(json());
app.use(cors());


massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance);
    })
    .catch(console.log);

app.post("/api/getFootage", blairscapes_controller.Get_Footage);
app.post("/api/submitContact", blairscapes_controller.Submit_Contact);
app.post("/api/login", blairscapes_controller.Login);
app.get("/api/getContacts", blairscapes_controller.Get_Contacts);
app.post("/api/getSelectedCustomer", blairscapes_controller.Get_Selected_Customer);

app.listen(port, () =>{
    console.log(`Listening at port: ${port}`);
})