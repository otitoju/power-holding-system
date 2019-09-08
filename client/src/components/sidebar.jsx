import React, { Component } from 'react'

export default class Sidebar extends Component {
  constructor(){
		super();
		this.state = {
			token:false
		}
	}
	async componentDidMount(){
		const token = await window.localStorage.getItem('token')
		if(token){
			this.setState({token:true})
		}
  }
  async handleLogOut(){
    await window.localStorage.clear()
    await window.location.reload(true);
  }
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/seyi5.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Jimoh Oluwaseyifunmi</a></h1>
              <span className="email"><i className="icon-mail"></i> oluwaseyijimoh7@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/oluwaseyifunmi.jimoh.7" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/flawless empire1" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                {this.state.token ? <li><button onClick={this.handleLogOut.bind(this)} className="btn btn-danger">Logout</button></li> : null }
              </ul>
            </nav>
            
          </aside>
        </div>
      </div>
    )
  }
}
