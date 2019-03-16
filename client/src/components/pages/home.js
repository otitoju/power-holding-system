import React, { Component } from 'react'
import Quotes from './quotes'
import Footer from '../layout/footer'

export default class home extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="containers">
              <marquee><h2 id="inside">N.A.C.O.S.S Online Timetable. NOTE: 1 Tab Saves You 8 Spaces.</h2></marquee>
          </div>
            <Quotes/>
            <Footer/>
        </div>
      </div>
    )
  }
}
