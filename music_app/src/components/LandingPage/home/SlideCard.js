import React from 'react'
import './SlideCard.css'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import card from '../../../utils/images/card.jpg'
function MentorCard() {
    return (
        <div className='row m-0 '>
            <div className='col-md-6 px-0 im'>
                <img src={card} alt='empty' />
            </div>
            <div className='col-md-6 mentor py-5 px-0 text-light text-center'>
                <h1 className='py-4'>Make your Own album</h1>
                <h3>Upload songs for free </h3>
                <p>Get yourself resgister today,</p>
                <p>Register below</p>
                <Link to='./register'>
                <Button className='my-3' variant="outline-success"><strong>Register here</strong></Button>
                </Link>
                
            </div>
            
        </div>
    )
}

export default MentorCard
