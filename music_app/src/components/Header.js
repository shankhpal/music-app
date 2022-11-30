import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

function Header({ setSearch }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => { }, [userInfo]);

  return (
  
      <Navbar className='border-0 bg-light px-0' fixed="top" expand="lg">
      
        <Navbar.Brand className='text-dark mx-4' href="/"><strong>Music App</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            {userInfo && (
              <Form>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            )}
          </Nav>
          <Nav>
            <Link className='text-uppercase text-dark font-weight-bold m-3' to="/"><strong>HOME</strong></Link>

            {userInfo &&  (
              <>
                <Link className='text-uppercase text-dark font-weight-bold m-3' to='/albums'>albums</Link>
                <Link className='text-uppercase text-dark font-weight-bold m-3' to="/create">Create Album</Link>
              </>

            )}
            {userInfo ? (
              <NavDropdown
                className='m-2 text-uppercase text-dark font-weight-bold'
                title={`${userInfo.name}`}
                id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={logoutHandler} href='/login'>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (<>
              <Link className='text-uppercase text-dark font-weight-bold m-3' to="/register" type="button"><strong>REGISTER</strong></Link>
              <Link className='text-uppercase text-dark font-weight-bold m-3' to="/login" type="button"><strong>LOGIN</strong></Link>
            </>
            )}
          </Nav>
        </Navbar.Collapse>
    
      </Navbar>
  );
}

export default Header;
