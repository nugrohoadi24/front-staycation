import React from 'react'
import Button from 'elements/Button'
import IconText from './IconText'

export default function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <IconText/>
                    <p className='brand-tagline text-gray-500'>
                        We kaboom your beauty holiday instantly and memorable, let's to boook now!.
                    </p>
                </div>
                <div className='col-2 mr-5'>
                    <h6 className='mt-2'>
                        For Beginners
                    </h6>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <Button type='link' href='/register'>New Account</Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/properties'>Start Booking Room</Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/use-payments'>Use Payments</Button>
                        </li>
                    </ul>
                </div>
                <div className='col-2 mr-5'>
                    <h6 className='mt-2'>
                        Explore Us
                    </h6>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <Button type='link' href='/register'>Our Careers</Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/properties'>Privacy</Button>
                        </li>
                        <li className='list-group-item'>
                            <Button type='link' href='/use-payments'>Terms & Conditions</Button>
                        </li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h6 className='mt-2'>
                        Connect Us
                    </h6>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <Button isExternal type='link' href='mailto:nugrohoadi.pratomo24@gmail.com'>nugrohoadi.pratomo24@gmail.com</Button>
                        </li>
                        <li className='list-group-item'>
                            <Button isExternal type='link' href='tel:+6289513119849'>0895-1311-9849</Button>
                        </li>
                        <li className='list-group-item'>
                            <span>Bekasi, Jawa Barat, Indonesia</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col text-center copyrights'>
                    Copyright 2022 • All rights reserved • Nugroho Adi Pratomo
                </div>
            </div>
        </div>
    </footer>
  )
}
