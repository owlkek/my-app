import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import DTC from '../assets/Dettaglio-tessuto_crop.jpg'
import PC from '../assets/Plancia_crop.jpg'
import MMGS from '../assets/Maserati-MY19-Ghibli-GranLusso-Studio-182420M.jpg'
import MMGS3 from '../assets/Maserati-MY19-Ghibli-GranLusso-Studio-182430M.jpg'


export default class Design extends Component {
    render() {
        return (

            <div className="mt-5" >
                <Row padding="10px">
                    <Col xl={12} md={12} sm={12}>
                        <h1>
                            Дизайн и мастерство исполнения
                        </h1>
                        <p>Дерзкий, но элегантный. Утонченный, но решительный. Maserati Ghibli бросает вызов серому миру делового автомобильного дресс-кода</p>
                    </Col>
                    <Col xl={6} md={6} sm={12}>
                        <div>
                            <Image src={DTC} thumbnail />
                        </div>
                    </Col>
                    <Col xl={6} md={6} sm={12}>
                        <div>
                            <Image src={PC} thumbnail />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xl={12} md={12} sm={12}>
                        <div>
                            <Image src={MMGS} thumbnail />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xl={12} md={12} sm={12}>
                        <div>
                            <Image src={MMGS3} thumbnail />
                        </div>
                    </Col>
                </Row>
                <Row padding="10px">
                    <Col xl={12} md={12} sm={12}>
                    </Col>
                </Row>
            </div>
        )
    }
}
