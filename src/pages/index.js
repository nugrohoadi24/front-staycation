import React, { Component } from 'react'
import Header from 'parts/Header'
import jsonIndex from 'json/landingPage'
import Hero from 'parts/Hero'
import MostPick from 'parts/MostPick'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.refMostPick = React.createRef()
    
  }
  render() {
    return ( 
      <>
        <Header {...this.props}></Header>
        <Hero refMostPick={this.refMostPick} data={jsonIndex.hero}></Hero>
        <MostPick refMostPick={this.refMostPick} data={jsonIndex.mostPicked}></MostPick>
        <Categories data={jsonIndex.categories}></Categories>
        <Testimony data={jsonIndex.testimonial}/>
        <Footer/>
      </>
    )
  }
}
