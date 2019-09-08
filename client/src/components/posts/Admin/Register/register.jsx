import React, { Component } from 'react'
import {  Link, Redirect } from 'react-router-dom'
import Loading from '../../../layouts/loading'

export default class login extends Component {
    constructor(){
        super()
        this.state = {
            email:"",
            password:"",
            name:'',
            redirect: false,
            isLoading: false
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.handleName = this.handleName.bind(this)
    }
    async componentDidMount(){
        const token = await window.localStorage.getItem('token')
        if(token){
            this.props.history.push('/')
        }
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState({isLoading: true})
        fetch('https://flawless-server.herokuapp.com/register',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                
            },
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password,
                name: this.state.name
            })
        })
        .then( res => res.json())
        .then( res =>{
            if(res.message === 'Admin created'){
                //window.localStorage.setItem('token', res.token)
                //window.localStorage.setItem('clientId', res.id)
                this.setState({redirect: true})
            }
            else{
                alert(res.message)
                this.setState({isLoading: false})
            }
        })
        .catch( err =>console.log(err))   
    }
    validateForm(e){
        this.setState({
            email:e.target.value
        })
    }
    handlePassword(e){
        this.setState({password:e.target.value})
    }
    handleName(e){
        this.setState({name: e.target.value})
    }
  render() {
    if(!this.state.redirect){
        return (
            <div>
            {!this.state.isLoading &&  <div class="container my-5">
            <div class="row justify-content-center">
            <h3 class="text-white text-center">Flawless Registration</h3>
             <h6 class="font-weight-light text-white text-center">Register with your credentials</h6>
            </div>
            <hr class="hr-class"/>
            <div class="row justify-content-center">
              <div class="col-lg-10 col-md-10">
              <div class="card">
                <div class="card-body">
                <div class="form-group row">
                  <div class="col-sm-12">
                  <label>Name:</label>
                    <input type="text" class="form-control" placeholder="your name" value={this.state.name} onChange={this.handleName}/>

                    <label>Email:</label>
                    <input type="email" class="form-control" placeholder="your email" value={this.state.email} onChange={this.validateForm}/>
    
                    <label>Password:</label>
                    <input type="password" class="form-control" placeholder="password" value={this.state.password} onChange={this.handlePassword}/>
                  </div>
                </div>
               
                
                <hr/>
                <div class="text-center mb-4">
                    <button type="button" class="btn btn-danger btn-block z-depth-2" onClick={this.handleSubmit}
                    id="butt">Sign up <i class="fa fa-sign-in ml-1"></i></button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>}
        {this.state.isLoading && <Loading/>}
             
            </div>
          )
    }
    else{
        return <Redirect to="/" />
    }
  }
}
