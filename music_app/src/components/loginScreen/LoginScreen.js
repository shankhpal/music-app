import React, { useState, useEffect } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import Loading from "../../utils/Loading";
import ErrorMessage from "../../utils/ErrorMessage";
import { login } from "../../actions/userActions";
import "../RegisterScreen/RegisterScreen.css";
import reg1 from "../../utils/images/register.jpg"
import './../../bootstrap.min.css'


function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
        navigate("/");
    }
  }, [ navigate,userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
   
    <div className="registration container p-3 mx-auto" >
    <div className="row">
      
      <div className="col-md-6 firstcol align-items-center">
        <Form className="form-container " onSubmit={submitHandler}>
        {error && (<ErrorMessage variant="danger">{error}</ErrorMessage>)}
        {loading && <Loading />}
          <Form.Group className="reginp px-4 mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="reginp px-4 mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        
      
         <p>
         <Button className="mx-4 px-4" variant="outline-success button-block" type="submit">
              SIGN IN
          </Button>
          <Link to='/'>
          <Button className="px-4"  variant="outline-secondary button-block rounded" >
            CANCEL
          </Button>
          </Link>
          <span className="font-weight-bold pl-3  text-light fw600">
            NEW USER?
            <a
              href="/register"
              className="text-decoration-none pl-1 pr-4  font-weight-bold fw600"
              variant='success'
            >
              REGISTER HERE
            </a>
          </span> 
         </p>

        </Form>
      </div>
      <div className='col-md-6 secondcol p-0 m-0'>
          <Image src={reg1} alt='registration'></Image>
      </div>
    </div>
  </div>
  );
}

export default LoginScreen;