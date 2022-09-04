import React from 'react'
import Star from 'elements/Star'
import frameTestimony from '../assets/images/testimonial-frame.jpg'
import Button from 'elements/Button'

export default function Testimony({data}) {
  return (
    <section className='container'>
        <div className='row align-items-center'>
            <div className='col-4'>
                <div className='img-testimoni' style={{ margin: '30px 0 0 30px'}}>
                    <img src={data.imageUrl} alt='Testimonial' className='position-absolute' style={{ zIndex:1, borderRadius:'12px' }}/>
                    <img src={frameTestimony} alt='Testimonial' className='position-absolute' style={{ margin: '-30px 0 0 -30px'}}/>
                </div>
            </div>
            <div className='col-8'>
                <div style={{ marginLeft:80 }}>
                    <h4 className='mb-4'>
                        {data.name}
                    </h4>
                    <Star value={data.rate} width={35} height={35} spacing={4}/>
                    <h5 className='h2 font-weight-light my-3'>
                        {data.content}
                    </h5>
                    <span className='text-gray-500'>
                        {data.familyName}, {data.familyOccupation}
                    </span>
                    <div className='mt-3'>
                        <Button 
                            className='btn px-5' 
                            type='link' 
                            href={`/testimonial/${data._id}`} 
                            isShadow 
                            isPrimary
                        >
                            Read Their Story
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
