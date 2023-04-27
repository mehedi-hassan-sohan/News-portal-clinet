import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

import { FaBeer, FaGoogle, FaGithub, FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
 import Bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h4>Login with </h4>
            <Button className='mb-2' variant="primary"> <FaGoogle />Login With Google</Button>
            <Button variant="secondary"> < FaGithub /> Login With GitHub</Button>
            <div>
                <h4>Find us On</h4>
                <ListGroup>
                    <ListGroup.Item ><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
           
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={Bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;