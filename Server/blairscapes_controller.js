const axios = require('axios');
require("dotenv").config();

const apiKey = process.env.addressAPIkey;
const pinCode = process.env.pin;

module.exports = {
    Get_Footage: (req, res, next) => {
        const {address1, address2} = req.body;

        axios.get(`https://search.onboard-apis.com/propertyapi/v1.0.0/property/detail?address1=${address1}&address2=${address2}`, {headers: {Accept: 'application/json', apikey: `${apiKey}`}})
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => err);
    },

    Submit_Contact: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const {name, email, phone, address1, address2, comments, estimate, addressFootage, irrigation, mulch, seasonalColor} = req.body;

        dbInstance
            .Submit_Contact(name, email, phone, address1, address2, comments, estimate, addressFootage, irrigation, mulch, seasonalColor)
            .then(res.status(200).send('Contact Submitted'))
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            })
    },

    Get_Contacts: (req, res, next) => {
        const dbInstance = req.app.get("db");
        console.log('getting customers');

        dbInstance
            .Get_Contacts()
            .then(estimate => {
                res.status(200).send(estimate);
            })
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            })
    },
    Login: (req, res, next) => {
        const {code} = req.body;
        if(code == pinCode){
            res.status(200).send('Valid');
        }
        else{
            res.status(200).send('Invalid');
        }
    },
    Get_Selected_Customer: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.body;
        console.log('getting selected customer', id);

        dbInstance
            .Get_Selected_Customer(id)
            .then(customer => {
                console.log(customer);
                res.status(200).send(customer);
            })
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            })

    }
}