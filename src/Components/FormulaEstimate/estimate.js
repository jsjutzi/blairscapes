import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {Link, withRouter} from 'react-router-dom';
import Header from '../Header/header.js';
require('./estimate.css');

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
                estimate: 0,
                name: '',
                email: '',
                phone: '',
                comments:'',
                address1: this.props.address.property[0].address.line1,
                address2: this.props.address.property[0].address.line2,
                addressFootage: this.props.squareFootage,
                irrigation: this.props.irrigation,
                mulch: this.props.mulch,
                seasonalColor: this.props.seasonalColor
        }
        this.getEstimate = this.getEstimate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log('lawncare', lawncare, 'seedingMultiplier', seedingMultiplier, 'bedMaintenence', bedMaintenance);
        estimate += ((lawncare * seedingMultiplier) + (bedMaintenance * 20));
        console.log(estimate);

            // if(this.props.irrigation){
            //     let count = 1;
            //     this.props.inspectionSchedule === 'bi-annually' ? count = 2 : false;
            //     this.props.inspectionSchedule === 'quarterly' ? count = 4 : false;
            //     inspectionTrips = count;
                
            //     footage > 0 && footage <= 10000 ? valves = Math.round(footage / 750) : valves = Math.round(footage / 2000);
            //     irrigation = (valves * 5.3);
            //     estimate +=(inspectionTrips * irrigation);
            //     console.log(estimate);
            // }
        let seeding;
            this.props.seeding ? seeding = (footage * 0.023) : seeding = 0;
        let fertilization = (footage * 0.02);
            let fertCount = 0;
            this.props.fertilizer.fallChecked ? fertCount++ : false;
            this.props.fertilizer.winterChecked ? fertCount++ : false;
            this.props.fertilizer.springChecked ? fertCount++ : false;
            this.props.fertilizer.summerChecked ? fertCount++ : false;
            fertCount > 0 ? fertilization *= fertCount : fertilization = 0;
            

        estimate += (seeding + fertilization);
        //     const seasonalColor = ((footage * 0.005) * 12.5);
        //     console.log(estimate);
        // estimate += (seasonalColor * 2);
            console.log(estimate);
            // this.props.mulch.mulchType === 'regular' ? mulch = (footage * 0.065) : mulch = (footage * 0.090);
            // let trips = seedingMultiplier + seasonalColorTrips + inspectionTrips + 1 + fertilization + 1;
            // mobilization = trips * 2.0;
        const dethatching = (footage * 0.06);
            estimate += dethatching;
        //estimate += (mulch + mobilization + dethatching);
        console.log(estimate);
        estimate /= 12;
        console.log(estimate.toFixed(2));
        this.setState({estimate: estimate.toFixed(2)});
}
    
componentDidMount(){
    this.getEstimate();
}
handleSubmit(){
    axios.post('/api/submitContact', this.state)
    .then(response => {
        response.status = 200 ? this.props.history.push('/thankYou') : alert('Please enter a valid address');
    })
    .catch(err => err);
}
    render(){
        return(
            <div>
                <Header/>
                <div className='estimate-container'>
                    <p className='blairscapes'>Your estimated monthly cost for service</p>
                    <h1 className='estimate-header'>${this.state.estimate} /mth</h1>
                </div>
                <div className='call-to-action'>
                    <p className='blairscapes'>If you would like to schedule an on-site visit with us, please enter your contact information below.  Keep in mind that while we do our best to provide accurate quotes here, there are factors we can't account for online.  An on-site visit will allow us to present you with a personalized service quote tailored to your needs.  We look forward to speaking with you!</p>
                    <input className='form' type='text' placeholder='Name' onChange={e => this.setState({name: e.target.value})}></input>
                    <input className='form' type='text' placeholder='email' onChange={e => this.setState({email: e.target.value})}></input>
                    <input className='form' type='text' placeholder='phone' onChange={e => this.setState({phone: e.target.value})}></input>
                    <input className='form' type='text' placeholder='comments' onChange={e => this.setState({comments: e.target.value})}></input>
                    <button className='submit-contact'type='submit' onClick={e => {this.handleSubmit()}}>Submit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps) (Estimate))
