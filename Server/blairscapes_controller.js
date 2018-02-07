const axios = require('axios');
require("dotenv").config();

const apiKey = process.env.addressAPIkey;
const pinCode = process.env.pin;

module.exports = {
    Get_Footage: (req, res, next) => {
        const {address1, address2} = req.body;
        console.log('hitter');

        axios.get(`https://search.onboard-apis.com/propertyapi/v1.0.0/property/detail?address1=${address1}&address2=${address2}`, {headers: {Accept: 'application/json', apikey: `${apiKey}`}})
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => err);
    },

    Submit_Contact: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const {name, email, phone, address1, address2, comments, estimate, addressFootage} = req.body;
        console.log('submitting info', name, email, phone, comments, estimate);

        dbInstance
            .Submit_Contact(name, email, phone, address1, address2, comments, estimate, addressFootage)
            .then(res.status(200).send('Contact Submitted'))
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            })
    },

    Get_Contact: (req, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance
            .getContacts()
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
        console.log('hit server', code);
        console.log(pinCode);
        if(code == pinCode){
            res.status(200).send('Valid');
        }
        else{
            res.status(200).send('Invalid');
        }
    }
}