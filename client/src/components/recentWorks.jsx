import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllWork } from './api/api'
export default class recentWorks extends Component {
	constructor(){
		super();
		this.state = {
			token:false,
			project:[],
			image:'https://res.cloudinary.com/oluwapelumi/image/upload/v1567909672/iw3esqva4hltyzuxku6n.jpg'
		}
	}
	async componentDidMount(){
		const token = await window.localStorage.getItem('token')
		
		const project = await getAllWork()
		//console.log(project)
		this.setState({project:project.info})
		if(token){
			this.setState({token:true})
		}
	}
    render() {
        return (
            <div>
                <section class="colorlib-work" data-section="work">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">My Work</span>
							<h2 class="colorlib-heading animate-box">Recent Work</h2>
						</div>
					</div>
					<div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
						<div class="col-md-12">
							<p class="work-menu"><span><a href="#" class="active">Hair design</a></span> <span><a href="#">Make-up</a></span> <span><a href="#">Gele</a></span></p>
						</div>
					</div>
					<div class="row">
					<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
					{this.state.project ? this.state.project.map( (project, index) => {
								return ( 
								
									
								<div className="project" style={{backgroundImage: `url(${project.photo})`}} key={index}>
									<div className="desc">
										<div className="con">
											<h3 className="card-text"><a href="work.html">{project.text}</a></h3>
											{this.state.token ? <Link to={`/work/${project._id}`}> <button className="btn btn-primary">Edit</button></Link> : null}
										</div>
									</div>
								</div>
							// </div>
							)}) : (
								<h6>No post returned</h6>
					)}
					</div>
					</div>
					
					{/* <div class="row">
						<div class="col-md-12 animate-box">
							<p><a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i class="icon-reload"></i></a></p>
						</div>
					</div> */}
				</div>
			</section>
            </div>
        )
    }
}
