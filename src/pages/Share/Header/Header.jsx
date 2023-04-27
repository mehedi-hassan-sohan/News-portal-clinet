import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';


const Header = () => {
    const {user } = useContext(AuthContext)
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p><small>{moment().format("dddd, MMMM D, YYYY ")}</small></p>
                <div className='d-flex'>
                    <Button variant="danger">Let's News</Button>
                    <Marquee className='text-danger' speed={20}>
                     <p>hello here is my news ..... </p>
                    </Marquee>
                </div>
            </div>
        
        </Container>
        
    );
};

export default Header;