import React, { Component } from 'react'
import axios from 'axios'
import {  Redirect } from 'react-router-dom'
import Loader from '../../layouts/loader'

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
        if(token){
            this.setState({token: token, redirect: false})
        }
        else{
            this.setState({redirect: true})
        }
      
      }
      async handleSubmit(e){
        e.preventDefault()
        
        let name = document.getElementById('textfield').value;
        if(document.getElementById('textfield').value === null || document.getElementById('textfield').value ===''){
            alert('Please fill all fields')
        }
        else if(document.getElementById('file').value === null || document.getElementById('file').value ===''){
            alert('No image selected')
        }
        else{
            this.setState({isLoading:true})
            document.getElementById('btn').style.visibility = 'hidden'
            const formdata = new FormData();
            formdata.append('photo', this.state.photo)
            formdata.append('text', document.getElementById('textfield').value)
            axios.post('https://flawless-server.herokuapp.com/upload/post/work', formdata)
            .then( res => {
                alert(res.data.message)
                this.setState({isLoading:false})
                document.getElementById('btn').style.visibility = 'visible'
            })
            .catch( err => console.log(err))
        }
        
       
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
          <h1 class="text-center my-5 header-color">Add Recent work</h1>
        </div>
        <hr class="hr-class"/>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-10">
          <div class="card">
            <div class="card-body">
            <div class="form-group row">
              <div class="col-sm-12">
                <label>Short description:</label>
                <input type="text" class="form-control"   onChange={this.handleText.bind(this)} id="textfield"/>
              </div>
            </div>
            
            <div class="upload-img" class="text-center">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <p  class="text-center"><label>
                            <span class="h2">
                                <i class="fa fa-camera" aria-hidden="true"></i>
                            </span>
                            <br/><input type="file" style={{display:'none'}} onChange={this.handleImage.bind(this)} id="file"/> Click to upload image <i class="fa fa-upload-o" aria-hidden="true"></i>
                            </label></p>
                    </div>
                </div>
            </div>
            {this.state.isLoading && <Loader/>}
            <div class="text-center">
                <button 
                    id="btn"
                    class="btn btn-success"
                    onClick={this.handleSubmit.bind(this)}
                ><i class="fa fa-plus-circle" aria-hidden="true"></i> Post</button> </div> 
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
