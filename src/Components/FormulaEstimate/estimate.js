import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link, withRouter} from 'react-router-dom';
import Header from '../Header/header.js';
require('./formula.js');

let footage = 0;

let lawncare = 0;
let mulch = 0;
let valves = 0;
let seedingMultiplier = 0;
let inspectionTrips = 0;
let seasonalColorTrips = 2;
let bedMaintenance = 0;
let fertilization = (footage * 0.02).toFixed(2);
let irrigation = (valves * 5.3);
let mobilization = 0;
let totalEstimate = 0;
let estimate = 0;



class Estimate extends Component{
    constructor(props){
        super(props)
        this.state={
                estimate: 0
        }
        this.getEstimate = this.getEstimate.bind(this);
    }
getEstimate(){
    //Get lawncare pricing based on square footage returned from API
        footage = this.props.squareFootage;
            if (footage <= 10000){
                lawncare = (footage * 0.005);
                bedMaintenance = (lawncare * 0.33 * 1.76);
            } else if (footage > 10000 && footage <= 30000){
                lawncare = (50 + ((footage - 10000) * 0.0005));
                bedMaintenance = (lawncare * 0.33 * 1.76);
            } else if (footage > 30000){
                lawncare = (footage * 0.001606);
                bedMaintenance = (lawncare * 0.33 * 1.76);
            }
    //Determine seedingMultiplier based on whether user initially selected yes or no for year-round lawncare
        this.props.seeding === true ? seedingMultiplier = 46 : seedingMultiplier = 40;
        console.log(estimate);
        estimate += ((lawncare * seedingMultiplier) + bedMaintenance);
        console.log(estimate);

            if(this.props.irrigation){
                let count = 1;
                this.props.inspectionSchedule === 'bi-annually' ? count = 2 : false;
                this.props.inspectionSchedule === 'quarterly' ? count = 4 : false;
                inspectionTrips = count;
                
                footage > 0 && footage <= 10000 ? valves = Math.round(footage / 750) : valves = Math.round(footage / 2000);
                irrigation = (valves * 5.3);
                estimate +=(inspectionTrips * irrigation);
                console.log(estimate);
            }
        const seeding = (footage * 0.023);
        let fertilization = (footage * 0.02);
            let fertCount = 0;
            this.props.fertilizer.fallChecked ? fertCount++ : false;
            this.props.fertilizer.winterChecked ? fertCount++ : false;
            this.props.fertilizer.springChecked ? fertCount++ : false;
            this.props.fertilizer.summerChecked ? fertCount++ : false;
            fertCount > 0 ? fertilization *= fertCount : false;

        estimate += (seeding + fertilization);
            const seasonalColor = ((footage * 0.01) * 12.5);
            console.log(estimate);
        estimate += (seasonalColor * 2);
            console.log(estimate);
            this.props.mulch.mulchType === 'regular' ? mulch = (footage * 0.065) : mulch = (footage * 0.090);
            let trips = seedingMultiplier + seasonalColorTrips + inspectionTrips + 1 + fertilization + 1;
            mobilization = trips * 2.0;
            const dethatching = (footage * 0.06);
        estimate += (mulch + mobilization + dethatching);
        console.log(estimate);
        estimate /= 12;
        console.log(estimate.toFixed(2));
        this.setState({estimate: estimate.toFixed(2)});
    }
    
componentDidMount(){
    this.getEstimate();
    }
    render(){
        return(
            <div>
                <Header/>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps) (Estimate))
