import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
export default class Footer extends Component {
    render() {
        return (
            <div className="m-5">
                <footer variant="dark">
                    <Row className="justify-content-md-center">
                        <Col sm={2} >
                        <p >&copy;2020 Sychev</p>
                        </Col>
                    </Row>
                  
                </footer>
            </div>
        )
    }
}
