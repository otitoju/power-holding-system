import React, { Component } from 'react'

export default class quotes extends Component {
  render() {
    return (
      <div>
         <section class="container my-5">
            <h2 class="h3-responsive font-weight-bold text-center my-5">Great Programmer's Quote</h2>
            <p class="lead grey-text text-center w-responsive mx-auto mb-5">Bill gates, allison, steve jobs, dell etc. all dropped out of college, silicon valley is the cradle of innovation all because of drop outs, college has become cruel expensive joke on the poor in the middle class. So, trust yourself more than a system that turns out unemployed data and a dubious values - peter gregrey.</p>
            <div class="row">
            <div class="col-md-4 mb-md-0 mb-5">
                <div class="row">
                <div class="col-lg-2 col-md-3 col-2">
                    <i class="fa fa-bullhorn blue-text fa-2x"></i>
                </div>
                <div class="col-lg-10 col-md-9 col-10">
                    <p class="grey-text">Every great Programmer you know got there by solving problems they were unqualified to solve until they actuall did it. - patrick Mckenzie</p>
                </div>
                </div>
            </div>
            <div class="col-md-4 mb-md-0 mb-5">
                <div class="row">
                <div class="col-lg-2 col-md-3 col-2">
                    <i class="fa fa-cogs pink-text fa-2x"></i>
                </div>
                <div class="col-lg-10 col-md-9 col-10">
                    
                    <p class="grey-text">"Sometimes it pays to saty in bed on monday, rather than spending the rest of the week debugging monday's code. -Dan salomon"</p>
                    
                </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="row">
                <div class="col-lg-2 col-md-3 col-2">
                    <i class="fa fa-dashboard purple-text fa-2x"></i>
                </div>
                <div class="col-lg-10 col-md-9 col-10">
                    
                    <p class="grey-text">Always code as if the guy who ends up maintaining your code will be violent psychopath who knows where you live. "First, solve the problem. Then write the code - John johnson"</p>
                    
                </div>
                </div>
            </div>
            </div>
        </section>
      </div>
    )
  }
}
