import React, { useEffect, useState } from "react";
import MainScreen from "../../utils/MainScreen";
import { Button, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../utils/Loading";
import ErrorMessage from "../../utils/ErrorMessage";
import "../../bootstrap.min.css"
import {  Link, useNavigate } from "react-router-dom";
import './Album.css'
import { createAlbum } from "../../actions/albumActions";
import albumCover from '../../utils/images/albumCover.jpg'

function CreateAlbum() {
  const [name, setName] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const albumCreate = useSelector((state) => state.albumCreate);
  const { loading, error} = albumCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
        navigate("/");
  }
  }, [navigate, userInfo]);

  const resetHandler = () => {
    setName("");
    setCreatedBy("");
   
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !createdBy) return;
    dispatch(createAlbum(name,createdBy));
    resetHandler();
    navigate("/albums");
  };



  return (
    <div>
    
      <h2 className='createAlbumheader py-4 text-center text-light'><strong>EXPLORE MORE</strong></h2>
      <MainScreen>
      <div className='row'>
      <div className='col-md-6  m-0 p-0'>
      <Card className='createAlbumPage ' style={{height:'400px'}}>
        <Card.Header>CREATE A NEW ALBUM</Card.Header>
        <Card.Body className="pt-5">
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                value={name}
                placeholder="Enter the name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>


            <Form.Group controlId="content">
              <Form.Control
                type="text"
                value={createdBy}
                placeholder="Enter CreatedBy"
                onChange={(e) => setCreatedBy(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
          <div className='px-5 m-5'>
          <Button type="submit" className="btn-lg" variant="primary">
              CREATE
            </Button>
            <Button className="mx-2 btn-lg"  onClick={resetHandler} variant="warning">
              RESET
            </Button>
            <Link to="/admin">
            <Button variant='danger' className="me-2 ms-1 btn-lg" >
              CANCEL
            </Button>
           </Link>
      </div>
          </Form>
        </Card.Body>

       
      </Card>
      </div>
      <div className='col-md-6  m-0 p-0'>
          <Image src={albumCover} className='createAlbumimage'  alt='newim'></Image>
        </div>
      
      </div>
    </MainScreen>
    </div>
  );
}

export default CreateAlbum;
