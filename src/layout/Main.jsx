import React from 'react';
import Header from '../pages/Share/Header/Header';
import Footer from '../pages/Share/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Share/LeftNav/LeftNav';
import RightNav from '../pages/Share/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Share/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
              
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                        
                    </Col>
                    <Col lg={6}>
                      <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                     <RightNav> </RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;