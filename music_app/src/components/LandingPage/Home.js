import React, { useEffect } from 'react'
import '../../bootstrap.min.css';
import ImageSlider from './home/ImageSlider';
import Card from '../../utils/Card'
import Heading from './home/Heading'
import slideImage from '../../utils/images/slideImage.jpg'
import './home.css'
import { useDispatch, useSelector } from 'react-redux';
import { listAlbums } from '../../actions/albumActions';

function Home() {
    const albumList = useSelector((state) => state.listAlbums);
    const { Albums } = albumList;
    const dispatch =useDispatch();

    useEffect(() => {
       
        dispatch(listAlbums());
      }, [dispatch]);
    
    return (
        <div >
        <div>
            <ImageSlider /> 
        </div>
        <div>
            <Heading /> 
        </div>

        <div className='cardrow'>
            <div className='row p-0 '>
            {Albums&&Albums.album &&
            Albums.album
              .reverse().slice(0, 4)
              .map((album) => (
                <div key={album._id} className=' col-md-3'>
                    <div className='m-2'>
                        <Card img={slideImage} title={album.name.toUpperCase()} id ={album._id} cardtext={album.createdBy} type={'album'}>
                        </ Card>
                    </div>
                </div>))}
            </div>
        </div>

       
    </div>
    )
}

export default Home
