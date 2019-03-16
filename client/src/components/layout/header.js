import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class header extends Component {
  render() {
    return (
      <div>
                 <nav class="navbar navbar-expand-lg navbar-light white fixed-top scrolling-navbarfixed-top scrolling-navbar" >


<Link to="/" class="navbar-brand" style={{fontStyle:'italic',fontFamily:'Times New Roman, Times, serif', fontSize:'30px', color:'#39a0e4'}}><img src={require('../images/ful.jpeg')} height="30" alt="fullogo"/></Link>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2"
  aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent2" style={{ fontFamily:'New Times Roman'}}>
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link to="/100level" class="nav-link" >100 level
          
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/100level" class="nav-link" >200 level
          
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/100level" class="nav-link" >300 level
          
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/400level" class="nav-link" >400 level
          
        </Link>
      </li>

    </ul>

  <ul class="navbar-nav nav-flex-icons ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#!">
          <i class="fa fa-facebook" aria-hidden="true"></i>Login
        </a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#!">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
    </ul>

</div>


</nav>
      </div>
    )
  }
}
