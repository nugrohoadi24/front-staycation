import React from 'react'
import ImageHero from 'assets/images/image-hero.jpg'
import imageHeroFrame from 'assets/images/image-hero-frame.png'
import IconCities from 'assets/images/ic_cities.png'
import IconTraveler from 'assets/images/ic_traveler.png'
import IconTreasure from 'assets/images/ic_treasure.png'
import Button from 'elements/Button'
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
    function showMostPick() {
        window.scrollTo({
            top: props.refMostPick.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <section className='container px-4'>
            <div className='row align-items-center'>
                <div className='col-12 col-sm-5'>
                    <h1 className='font-weight-bold mb-3'>
                        Forget Busy Work, Start Next Vacation
                    </h1>
                    <p className='text-gray-600 font-weight-light mb-5'>
                        We provide what you need to enjoy your holiday with family. Time to make another memorable moments, travelers, and staycation, lets to booking now.
                    </p>
                    <Button className='btn btn-shadow px-5 mb-3' isShadow isPrimary onClick={showMostPick}>Show Me Now</Button>

                    <div className='row mt-5'>
                        <div className='col-auto'>
                            <img width="36px" height="36px" src={IconTraveler} alt={`${props.data.travelers} Travelers`}></img>
                            <h6 className='mt-3'>
                                {formatNumber(props.data.travelers)} <span className='text-gray-500 font-weight-light'>Travelers</span>
                            </h6>
                        </div>
                        <div className='col-auto'>
                            <img width="36px" height="36px" src={IconTreasure} alt={`${props.data.treasures} Treasure`}></img>
                            <h6 className='mt-3'>
                                {formatNumber(props.data.treasures)} <span className='text-gray-500 font-weight-light'>Treasure</span>
                            </h6>
                        </div>
                        <div className='col-auto'>
                            <img width="36px" height="36px" src={IconCities} alt={`${props.data.cities} Cities`}></img>
                            <h6 className='mt-3'>
                                {formatNumber(props.data.cities)} <span className='text-gray-500 font-weight-light'>ities</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-sm-7'>
                    <div className='w-50 m-auto fix-hero-top'>
                        <img src={ImageHero} className='img-fluid position-absolute w-75' style={{ margin: '-30px 0 0 -30px', zIndex:1, borderRadius:'12px' }}></img>
                        <img src={imageHeroFrame} className='img-fluid position-absolute w-75' style={{ margin: '0 -15px -15px 0' }}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
