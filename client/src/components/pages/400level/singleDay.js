import React, { Component } from 'react'
import { getSingleDay } from '../../api/api'
export default class singleDay extends Component {
    constructor(props){
        super(props)
        this.state = {
            day:[]
        }
    }
    async componentDidMount(){
        const day = await getSingleDay(this.props.match.params.id)
        this.setState({day:day.other})
    }
  render() {
    return (
      <div>
        
                <div class="container" style={{marginTop:'120px'}}>
            <table className="table table-condensed table-bordered">
                            <thead >
                                <th style={{fontWeight:'bold'}}>
                                    SN
                                </th>
                                <th style={{fontWeight:'bold'}}>
                                    COURSE CODE
                                </th>
                                <th style={{fontWeight:'bold'}}>
                                    COURSE TITLE
                                </th>
                                <th style={{fontWeight:'bold'}}>
                                    LECTURER
                                </th>
                                <th style={{fontWeight:'bold'}}>
                                    TIME
                                </th>
                                <th style={{fontWeight:'bold'}}>
                                    LECTURE ROOM
                                </th>
                                <th style={{fontWeight:'bold'}}>
                                    UNIT
                                </th>
                                
                            </thead>
                            
                            <tbody>
                {this.state.day.map((day, index) => {
                    return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td><b>{day.course.toUpperCase()}</b></td>
                                    <td><b>{day.title}</b></td>
                                    <td><b>{day.lecturer.toUpperCase()}</b></td>
                                    <td><b>{day.time.toUpperCase()}</b></td>
                                    <td><b>{day.class.toUpperCase()}</b></td>
                                    <td><b>{day.unit}</b></td>
                                    
                                </tr>       
                })}
                </tbody>
                
            </table>
            </div>
      
      </div>
    )
  }
}
