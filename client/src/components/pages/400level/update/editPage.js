import React, { Component } from 'react'
import axios from 'axios'
import {getSingleCourse } from '../../../api/api'
export default class editPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            course:'',
            unit:'',
            title:'',
            lecturer:'',
            time:'',
            class:''
        }
    }
    async componentDidMount(){
        const course = await getSingleCourse(this.props.match.params.id)
        console.log(course.info.course)
        this.setState({course:course.info.course, unit:course.info.unit, title: course.info.title, lecturer:course.info.lecturer, time:course.info.time, class:course.info.class})
    }
    handleTitle(e){
        this.setState({title:e.target.value})
    }
    handleLecturer(e){
        this.setState({lecturer:e.target.value})
    }
    handleUnit(e){
        this.setState({unit:e.target.value})
    }
    handleCourse(e){
        this.setState({course:e.target.value})
    }
    handleTime(e){
        this.setState({time:e.target.value})
    }
    handleClass(e){
        this.setState({class:e.target.value})
    }
    upDate(id){
        fetch(`/course/${id}`, {
                method:'PUT', 
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                   
                },
                body:JSON.stringify({
                    title:this.state.title,
                    unit:this.state.unit,
                    lecturer:this.state.lecturer,
                    class:this.state.class,
                    time:this.state.time,
                    course:this.state.course

                })
            })
            .then(res => res.json())
            .then(res =>{
                alert(res.message)
                
            })
            .catch(err => console.log(err))
    }
    async handleSubmit(e){
        e.preventDefault()
        this.upDate(this.props.match.params.id)
       
   }
   delete(id){
    axios.delete(`/delcourse/${id}`)
    .then(res => {
       
        alert(res.data.message)
    })
    .catch(err => console.log(err))
  }
  async handleDelete(e){
    e.preventDefault()
    this.delete(this.props.match.params.id)
  }

  render() {
    return (
      <div>
                      <div class="container my-5" id="diva" style={{marginTop:'100px'}}>
                <div class="row justify-content-center text-left">
                  <div class="col-md-9 col-lg-9 col-xs-9">
                        
                          {/* <form class="border border-light p-5" style={{marginTop:'40px', marginBottom:'20px'}} encType="multipart/form-data" onSubmit={this.handleSubmit.bind(this)}> */}
      
                  
      
                              <p class="text-center h4 mb-4">Course details</p>
                              <hr/>
      
                              <div class="form-group">
                                  <label>Course code</label>
                                  <input type="text" class="form-control" placeholder="" required value={this.state.course} onChange={this.handleCourse.bind(this)}/>
                              </div>

                              <div class="form-group">
                                  <label>Course title</label>
                                  <input type="text" class="form-control" placeholder="" required value={this.state.title} onChange={this.handleTitle.bind(this)}/>
                              </div>

                              <div class="form-group">
                                  <label>Unit</label>
                                  <input type="text" class="form-control" placeholder="" required value={this.state.unit} onChange={this.handleUnit.bind(this)}/>
                              </div>

                              <div class="form-group">
                                  <label>Lecturer</label>
                                  <input type="text" class="form-control" placeholder="" required value={this.state.lecturer} onChange={this.handleLecturer.bind(this)}/>
                              </div>

                              <div class="form-group">
                                  <label>Time</label>
                                  <input type="text" class="form-control" placeholder="" required value={this.state.time} onChange={this.handleTime.bind(this)}/>
                              </div>

                              <div class="form-group">
                                  <label>Lecture room</label>
                                  <input type="text" class="form-control" placeholder="" required value={this.state.class} onChange={this.handleClass.bind(this)}/>
                              </div>
      
                            
                                  <hr/>
                                 
                              <div class="text-center">
                              <button 
                              id="btn"
                              class="btn btn-success"
                                onClick={this.handleSubmit.bind(this)}
                               ><i class="fa fa-plus-circle" aria-hidden="true"></i> Update</button> 
                               <button
                                //data-toggle="modal" data-target="#delete"
                                onClick={this.handleDelete.bind(this)}
                                className="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                                  </div>  
                          {/* </form> */}
                          
                  </div>
                </div>
              </div>
              {/* <Footer/> */}
            
            
      </div>
    )
  }
}
