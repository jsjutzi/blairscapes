const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const blairscapes_controller = require('./blairscapes_controller');

require('dotenv').config();
const port = 3000;
const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTIONSTRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
    })
    .catch(console.log);

app.post('api/getFootage', blairscapes_controller.Get_Footage);

app.listen(port, () =>{
    console.log(`Listening at port: ${port}`);
})