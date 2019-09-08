import React, { Component } from 'react'

export default class Projects extends Component {
	constructor(){
		super();
		this.state = {
			token:false,
			project:[]
		}
	}
	componentDidMount(){
		const token = await window.localStorage.getItem('token')
		const project = await getAllWorks()
		this.setState({project:project.info})
		if(token){
			this.setState({token:true})
		}
	}
  render() {
    return (
      <div>
		  <div className="card bg-dark text-white">
			<img className="card-img" src={} alt="Projectimage" />
			<div className="card-img-overlay">
				<h5 className="card-title"> title</h5>
				<p className="card-text">last 3 mins</p>
			</div>
		  </div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							{this.state.project ? this.state.project.map( (project, index) => {
								<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft" key={index}>
									<div className="card bg-dark text-white">
										<img className="card-img" src={project.photo} alt="Projectimage" />
										<div className="card-img-overlay">
											<p className="card-text">{project.text}</p>
											<p className="card-text">last 3 mins</p>
										</div>
									</div>
								{/* <div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 01</a></h3>
											<span>Website</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div> */}
							</div>
							}) : (
								<h6>No post returned</h6>
							)}
							<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div class="project" style={{backgroundImage: `url(${this.state.image})`}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 01</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div class="project" style={{backgroundImage: 'url(images/makeup2.jpg)'}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 02</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInTop">
							<div class="project" style={{backgroundImage: 'url(images/1.jpg)'}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 03</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInBottom">
							<div class="project" style={{backgroundImage: 'url(images/2.jpg)'}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 04</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
							<div class="project" style={{backgroundImage: 'url(images/3.jpg)'}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 05</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div class="project" style={{backgroundImage: 'url(images/4.jpg)'}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 06</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div class="project" style={{backgroundImage: 'url(images/5.jpg)'}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 07</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div class="project" style={{backgroundImage: 'url(images/6.jpg)'}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 08</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div class="project" style={{backgroundImage: 'url(images/7.jpg)'}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 09</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div class="project" style={{backgroundImage: 'url(images/8.jpg)'}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 10</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div class="project" style={{backgroundImage: 'url(images/9.jpg)'}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 11</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
							<div class="project" style={{backgroundImage: 'url(images/10.jpg)'}}>
								<div class="desc">
									<div class="con">
										<h3><a href="work.html">Work 12</a></h3>
										
										{/* <p class="icon">
											<span><a href="#"><i class="icon-share3"></i></a></span>
											<span><a href="#"><i class="icon-eye"></i> 100</a></span>
											<span><a href="#"><i class="icon-heart"></i> 49</a></span>
										</p> */}
									</div>
								</div>
							</div>
						</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
