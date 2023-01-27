import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import MainScreen from "../../utils/MainScreen";
import './Album.css'
import { useDispatch, useSelector } from "react-redux";
import "../../bootstrap.min.css"
import { useNavigate, useParams } from "react-router-dom";
import { addSong } from "../../actions/albumActions";
import albumCover from '../../utils/images/albumCover.jpg'
import ErrorMessage from "../../utils/ErrorMessage";
import Loading from "../../utils/Loading";

const AddSongs = () => {
  const [name, setName] = useState("");

  const [song, setSong] = useState();

  const { id } = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const added = useSelector((state) => state.addSong);
  const { loading,error, success } = added;
  const [msg, setMsg] =useState('')

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo,loading,success]);



  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("track", song);
    console.log(song)
    formData.append("name", name)
    console.log(formData)
    if(song && name)
     { 
       dispatch(addSong(id, formData));
      setMsg('Song added successfully!!!')
    }
    else{
      setMsg('please fill valid data')
    }
    
    setName('');
    setSong('')
    navigate(`/songs/${id}`);
  };

  return (
    <div>
      <h2 className='createAlbumheader py-4 text-center text-light'><strong>Upload songs you want. Make your own list!!!</strong></h2>
      <MainScreen>
      {error && (<ErrorMessage variant="danger">{error}</ErrorMessage>)}
      {success && msg && (<ErrorMessage variant="success">{msg}</ErrorMessage>)}
      {!success && msg && !error && !loading &&(<ErrorMessage variant="danger">{msg}</ErrorMessage>)}
        {loading && <Loading />}
        <Row className="SongContainer">

          <Col md={6} className=" m-0 p-0">
            <Card className='createAlbumPage' style={{height:'400px'}}>
              <Card.Header>ADD A NEW SONG</Card.Header>
              <Card.Body className="pt-5">
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => {setName(e.target.value);
                                        setMsg('');}}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="Song">
                    <Form.Label>upload Song</Form.Label>
                    <Form.Control
                      onChange={(e) => setSong(e.target.files[0])}
                      type="file"
                      placeholder="Upload Song"
                      custom
                    />

                  </Form.Group>
                  <div className="text-center">
                  <Button type="submit" className=' text-center' variant="outline-success">
                    ADD
                  </Button>
                  <Button type='button' onClick={()=>{navigate(-1)}} className=' text-center mx-3' variant="outline-danger">
                    Back
                  </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding:0,
            }}
          >
            <img src={albumCover} alt={name} className="createAlbumimage" />
          </Col>
        </Row>

      </MainScreen>
    </div>
  );
};

export default AddSongs;
