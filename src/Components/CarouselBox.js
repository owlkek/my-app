import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import gfx3 from '../assets/gfx3.jpg'
import gfx7 from '../assets/gfx7.jpg'
import gfx6 from '../assets/gfx6.jpg'
import gfx5 from '../assets/gfx5.jpg'
export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gfx6} />
                    <Carousel.Caption>
                        <h3>Ghibli</h3>
                        <p>Maserati Ghibli</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gfx7} />
                    <Carousel.Caption>
                        <h3>Ghibli</h3>
                        <p>Maserati Ghibli</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gfx5} />
                    <Carousel.Caption>
                        <h3>Ghibli</h3>
                        <p>Maserati Ghibli</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}