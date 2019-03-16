import React, { Component } from 'react'
import {Link } from 'react-router-dom'
export default class footer extends Component {
  render() {
    return (
      <div>
        <footer class="page-footer font-small  pt-4" >

            <div class="footer-copyright text-center py-3" style={{color:'black'}}>© 2019 Let's code it | All Right Reserved. | Powered by Let's code it, <a href="https://github.com/otitoju/" style={{color:'black'}}>otitoju oluwapelumi</a>.
            </div>
        </footer>
      </div>
    )
  }
}
