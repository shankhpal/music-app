import React from 'react'
import sideImage from '../../../utils/images/sideImage.jpg'
import './SideImage.css';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function SideImage() {
    return (
        <div className='row m-0'>           
            <div className=' texts text-center m-0 p-0 text-light py-5 col-md-6'>
                <h3 className='my-3 p-2 '> LISTEN ANY SONG, ANYTIME</h3>
                <h3 className='my-2 '> ANYWHERE</h3>
                <h1  className='my-4 '><strong> Just enjoy</strong></h1>
                <Link  className='my-2 ' to='./register'>
                <Button variant="outline-success">Register Here</Button> 
                </Link>
                </div>
            <div className='sideimage m-0 p-0 col-md-6'>
                <img src={sideImage} alt="music" />
            </div>

        </div>

    )
}

export default SideImage
