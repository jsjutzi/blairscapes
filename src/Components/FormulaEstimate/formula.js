const footage = this.props.footage;
const valves = this.props.valves;

let squarePricing = 0;
let mulch = 0;

const irrigation = (valves * 5.3);;
const bedMaintenance = (footage * 1.76).toFixed(2);
const seeding = (footage * 0.023).toFixed(2);
const fertilization = (footage * 0.02).toFixed(2);
const seasonalColor = (footage * 12.5).toFixed(2);
const dethatching = (footage * 0.06).toFixed(2);



function getPrice(footage) {
    if (footage <= 10000){
        squarePricing = (footage * 0.005).toFixed(2);
    } else if (footage > 10000 && footage <= 30000){
        squarePricing = (50 + ((footage - 10000) * 0.0005)).toFixed(2);
    } else if (footage > 30000){
        squarePricing = (footage * 0.001606).toFixed(2);
    }
}
function getMulch(type){
    if(type === 'regular'){
        mulch = footage * 0.65;
    }
    else{
        mulch = footage * 0.90;
    }
}






