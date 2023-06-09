import React from 'react';
import Header from '../pages/Share/Header/Header';
import Footer from '../pages/Share/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Share/LeftNav/LeftNav';
import RightNav from '../pages/Share/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
const NewsLayout = () => {
    return (
        <div>
             <Header></Header>
            <Container>
              
                <Row>
                   
                    <Col lg={9}>
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

export default NewsLayout;