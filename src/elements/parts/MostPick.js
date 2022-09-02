import React from 'react'
import Button from 'elements/Button'

export default function MostPick(props) {
    return (
        <section className='container'>
        <h4 className='font-weight-bold mb-3'>Most Picked</h4>
            <div className='container-grid'>
                {
                    props.data.map((item, index) => {
                        return (
                            <div className={`item column-4${index === 0 ? ' row-2' : ' row-1'}`}>
                                <div className='card main-card card-featured'>
                                    <div className='tag'>
                                        Rp. {item.price}
                                        <span className='font-weight-bold'> /{item.unit}</span>
                                    </div>
                                    <figure className='img-wrapper'>
                                        <img src={item.imageUrl} alt={item.name} className='img-cover'></img>
                                    </figure>
                                    <div className='meta-wrapper'>
                                        <Button className='streched-link d-block text-white' type='link' href={`/properties/${item._id}`}>
                                            <h5>{item.name}</h5>
                                        </Button>
                                        <span>
                                            {item.city}, {item.country}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}