import React, { Component } from 'react'
import Header from 'elements/parts/Header'
import jsonIndex from 'json/landingPage'
import Hero from 'elements/parts/Hero'
import MostPick from 'elements/parts/MostPick'

export default class index extends Component {
  render() {
    return ( 
      <>
        <Header {...this.props}></Header>
        <Hero data={jsonIndex.hero}></Hero>
        <MostPick data={jsonIndex.mostPicked}></MostPick>
      </>
    )
  }
}
