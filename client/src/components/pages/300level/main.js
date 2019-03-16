import React, { Component } from 'react'

export default class main extends Component {
  render() {
    return (
      <div>
        <section class="container text-center" style={{marginTop:'120px'}}>
          <h3>Computer Science 300L TimeTable</h3>
          <hr class="hr-class"/>
        </section>
          {/* {this.state.isLoading && <Spinner/>} */}
        <section class="container home_details">
          <div class="row card-deck">
            {this.state.days ? this.state.days.map( (day, index) =>(
              <div class="col-md-4" style={{marginBottom:'20px'}} key={index}>
               <Link to={`/day/${day._id}`} style={{color:'black', listStyle:'none',fontFamily:'New Times Roman'}}> <div class="card">
                <div class="view overlay hm-white-slight">
                  <img class="card-img-top img-zoom" src={require('../images/programming.jpg')} class="img-fluid" alt="DayImage"/>
                </div>
                <div class="card-body text-center">
                  
                    <h4 class="card-title">{day.day.toUpperCase()}</h4>
                  
                </div>
                </div></Link>
            </div>
            )) : (
              <h2>Wheew! No time table yet, keep anticipating</h2>
            )}

          </div>
        </section>
      </div>
    )
  }
}
