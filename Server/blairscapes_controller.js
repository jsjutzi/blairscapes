const apiKey = process.env.addressAPIkey;
module.exports = {
    Get_Footage: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {address1, address2} = req.body;
        console.log('hitter', address1, address2);

        axios.get(`https://search.onboard-apis.com/propertyapi/v1.0.0/property/detail?address1=${address1}address2=${address2}`, {headers: {Accept: 'application/json', ApplicationKey: `${apiKey}`}})
        .then(response => {
            return response.data;
        })
        .catch(err => err);
    }
}