const axios = require('axios');
require("dotenv").config();

const apiKey = process.env.addressAPIkey;

module.exports = {
    Get_Footage: (req, res, next) => {
        const {address1, address2} = req.body;
        console.log('hitter', address1, address2);

        axios.get(`https://search.onboard-apis.com/propertyapi/v1.0.0/property/detail?address1=${address1}&address2=${address2}`, {headers: {Accept: 'application/json', apikey: `${apiKey}`}})
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => err);
    }
}