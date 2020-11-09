import React from 'react';
import PropTypes from 'prop-types';

import Aside from './aside/Aside';
import Content from './content/Content';

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Section = (props) => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Aside />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <Content />
                    </Col>
                </Row>

            </Container>
        </>
    )
}
export default Section;