import React, { Component } from 'react'
import Header from 'elements/parts/Header'
import jsonIndex from 'json/landingPage'
import Hero from 'elements/parts/Hero'
import MostPick from 'elements/parts/MostPick'
import Categories from 'elements/parts/Categories'

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
      </>
    )
  }
}
