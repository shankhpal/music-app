import React, { useState } from 'react'
import './card.css';
import { Button, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import { useSelector } from 'react-redux';

function Card(props) {
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState('Play')
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const handlePlay =() => {   
    if(!open){
       setPlay('Stop')
      } 
    else{
      setPlay('Play')
    } 
    setOpen(!open); 
  }
  return (
    <div className='homecard'>

      <div className="card my-5" >
        <img className="card-img-top fluid" src={props.img} alt="Card cap" />
        <div className="card-body text-center px-0">
          <h5 className="card-title font-weight-bold">{props.title}</h5>
          <p className="card-text">{props.cardtext}</p>
          {props && props.type === 'album' && userInfo ? <Link to={`/songs/${props.id}`}>
            <Button variant='outline-success'>
              View songs
            </Button></Link> : (props && props.type === 'album' && <Link to={`/login`}>
              <Button variant='outline-success'>
                View songs
              </Button></Link>)}
          {props && props.type !== 'album' &&
            <Button variant='outline-success'
              onClick={handlePlay}
              aria-controls="example-collapse-text"
              aria-expanded={open}>{play}</Button>}
          {open && <Collapse in={open}>
            <div id="example-collapse-text">
              <ReactAudioPlayer
                src={`/api/album/song/${props.name}`}
                controls
                style={{
                  width: '100%',
                  paddingTop: '20px'
                }}
              />
            </div>
          </Collapse>}
        </div>
      </div>
    </div>
  )
}

export default Card
