
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import { Button, Form, Image } from "react-bootstrap";
import { Link ,useNavigate} from "react-router-dom";
import Loading from "../../utils/Loading";
import ErrorMessage from "../../utils/ErrorMessage";
import reg1 from "../../utils/images/register.jpg"
import './RegisterScreen.css'
import './../../bootstrap.min.css'

function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
 
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;


  useEffect(() => {
    if (userInfo) {
        navigate("/");
    }
  }, [ navigate,userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password));
  };
  return (

    <div className="registration container p-3 mx-auto" >
      <div className="row">
        
        <div className="col-md-6 firstcol align-items-center">
       
         {error && (<ErrorMessage variant="danger">{error}</ErrorMessage>)}
          {message && (<ErrorMessage variant="danger">{message}</ErrorMessage>)}
          {loading && <Loading />}
          <Form className="form-container " onSubmit={submitHandler}>
            <Form.Group className="reginp px-4 mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
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
            <Form.Group className="reginp px-4 mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={confirmpassword}
                placeholder="Confirm Your Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
        
           <p>
           <Button className="mx-4 px-4" variant="outline-success button-block" type="submit">
                SIGN UP
            </Button>
            <Link to='/'>
            <Button className="px-4"  variant="outline-secondary button-block rounded" >
              CANCEL
            </Button>
            </Link>
            <span className="font-weight-bold pl-3  text-light fw600">
              Already A USER?
              <a
                href="/login"
                className="text-decoration-none pl-1 pr-4  font-weight-bold fw600"
                variant='success'
              >
                SIGN IN
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

export default RegisterScreen;
