import React, { Component } from 'react'
import axios from 'axios'
import {  Redirect } from 'react-router-dom'
import Loader from '../../layouts/loader'
import { getSingleWork } from '../../api/api'

export default class works extends Component {
    constructor(){
        super();
        this.state ={
            photo:'',
            text:'',
            redirect: false,
            isLoading: false
        }
    }
    async componentDidMount() {
        const token =  await window.localStorage.getItem('token')
        const work = await getSingleWork(this.props.match.params.id)
        this.setState({text:work.info.text, photo:work.info.photo})
        if(token){
            this.setState({token: token, redirect: false})
        }
        else{
            this.setState({redirect: true})
        }
      
      }
      click(id){
        axios.put(`https://flawless-server.herokuapp.com/upload/work/img/${id}`, this.state)
        .then( res => {
            alert(res.data.message)
          //   this.setState({isLoading:false})
          //   document.getElementById('btn').style.visibility = 'visible'
        })
        .catch( err => console.log(err))
  }
  delete(id){
      axios.delete(`https://flawless-server.herokuapp.com/del/work/${id}`)
      .then(res => {
          if(res.data.success){
              alert(res.data.message)
              //this.props.history.push('/fashion/edit')
          }
          alert(res.data.message)
      })
      .catch(err => console.log(err))
  }
  async handleDelete(e){
      e.preventDefault()
      this.delete(this.props.match.params.id)
  }
  async handleSubmit(e){
      e.preventDefault()
      this.click(this.props.match.params.id)
     
  }
    handleImage(e){
        this.setState({photo:e.target.files[0]})
    }
    handleText(e){
        this.setState({title: e.target.value})
    }
    render() {
        if(!this.state.redirect){
            return (
                
                <div>
        <div class="container my-5">
        <div class="row justify-content-center">
          <h1 class="text-center my-5 header-color">Update work</h1>
        </div>
        <hr class="hr-class"/>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-10">
          <div class="card">
            <div class="card-body">
            <div class="form-group row">
              <div class="col-sm-12">
                <label>Short description:</label>
                <input type="text" class="form-control"  required value={this.state.text} onChange={this.handleText.bind(this)}/>
              </div>
            </div>
            <div class="upload-img" class="text-center">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <p  class="text-center"><label>
                            <span class="h2">
                                <i class="fa fa-camera" aria-hidden="true"></i>
                            </span>
                            <br/><input type="file" style={{display:'none'}} onChange={this.handleImage.bind(this)}/> Click to upload image <i class="fa fa-upload-o" aria-hidden="true"></i>
                            </label></p>
                    </div>
                </div>
            </div>
            {this.state.isLoading && <Loader/>}
            <div class="text-center">
                              <button 
                              id="btn"
                              class="btn btn-success"
                              //onSubmit={this.handleSubmit.bind(this)}
                              onClick={this.handleSubmit.bind(this)}
                               ><i class="fa fa-plus-circle" aria-hidden="true"></i> update</button>
                                <button
                                    onClick={this.handleDelete.bind(this)}
                                    className="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete
                                </button>
                               </div>  
          </div>
        </div>
        </div>
      </div>
    </div>

                </div>
              )
        }
        else{
            return <Redirect to='/'/>
        }
    }
}
