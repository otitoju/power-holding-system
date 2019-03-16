import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import {getAllDays } from '../../../api/api'
export default class days extends Component {
    constructor(props){
        super(props)
        this.state = {
            days:[]
        }
    }
    async componentDidMount(){
        const days = await getAllDays()
        this.setState({days:days.info})
       // console.log(days.info)
    }
  render() {
    return (
      <div style={{marginTop:'100px'}}>
        
        
        {this.state.days.map((days, index) => (
            <div class="accordion md-accordion accordion-1 container" id="accordionEx23" role="tablist" style={{marginBottom:'10px'}}>

            <div class="card">
                <div class="card-header red lighten-3 z-depth-1" role="tab" id="heading96">
                    <h5 class="text-uppercase mb-0 py-1">
                        
                        <Link to={`/400l-editboard/${days._id}`} class="white-text font-weight-bold"><h1>{days.day}</h1></Link> 
                    </h5>
                </div>
                
                </div>
            
            
        </div>
            
        ))}
      </div>
    )
  }
}
