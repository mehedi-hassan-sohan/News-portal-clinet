import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';


const NavigationBar = () => {
    const {user,logOut } = useContext(AuthContext)
    const handleLogout = ()=>{
      logOut() 
      .then()
      .catch(error=>console.error(error))
    }
    return (
        <Container>

<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to='/'>Home</Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
           { user && <FaUserCircle className='me-3'style={{fontSize:'2rem'}}> </FaUserCircle>}
         { user ?
            <Button  onClick={handleLogout}
            variant="secondary">Logout</Button> :
            <Link to='/login'>
               <Button variant="secondary">Login</Button> 
            </Link>
          }
      </Container>
    </Navbar>

        </Container>
    );
};

export default NavigationBar;