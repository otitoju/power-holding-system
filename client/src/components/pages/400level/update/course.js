import React, { Component } from 'react'
import {getSingleDay } from '../../../api/api'
import {Link } from 'react-router-dom'
export default class course extends Component {
    constructor(props){
        super(props)
        this.state ={
            day:[]
        }
    }
    async componentDidMount(){
        const day = await getSingleDay(this.props.match.params.id)
        this.setState({day:day.other})
    }
  render() {
    return (
      <div style={{marginTop:'100px'}}>
      
        {this.state.day.map((day, index) => (
            <div class="accordion md-accordion accordion-1 container" id="accordionEx23" role="tablist" style={{marginBottom:'10px'}}>

            <div class="card">
                <div class="card-header red  z-depth-1" role="tab" id="heading96">
                    <h5 class="text-uppercase mb-0 py-1">

                       {index+1}. {day.course}
                    </h5>
                </div>
                <div id="collapse96" class="collapse show" role="tabpanel" aria-labelledby="heading96" data-parent="#accordionEx23">
                    <div class="card-body">
                        <div class="text-right" style={{marginRight:'70px'}}>
                        
                        <Link to={`/course/${day._id}`}><button class="btn btn-primary">Edit</button> </Link>
                            <button class="btn btn-danger">Delete day</button>              
                        </div>
                    </div>
                </div>
                </div>
            
            
            </div>

        ))}
      </div>
    )
  }
}
