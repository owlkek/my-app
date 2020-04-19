import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import ghibli55 from '../assets/ghibli55.jpg'


export default class Review extends Component {
    render() {
        return (

            <div className="mt-3" >
                <Row padding="10px">
                    <Col xl={6} md={12} sm={12}>
                        <h1>
                            Дерзкие амбиции в элегантной форме
                    </h1>
                        <p>Первый Maserati Ghibli был создан и представлен публике на автосалоне в Турине в 1966 году. Это был классический GT, преемник легендарного A6 1500, с которого в 1947 году началась история гранд-туреров Maserati: роскошный и стильный, дарящий непревзойденный комфорт в путешествиях на любые расстояния и, разумеется, быстрый и мощный — ведь в нем была «кровь» гоночных автомобилей.</p>
                    </Col>
                    <Col xl={6} md={12} sm={12}>
                        <div background-image={ghibli55}>
                            <Image src={ghibli55} thumbnail />
                        </div>
                    </Col>
                    <Col xl={12} md={12} sm={12}>
                        <div background-image={ghibli55}>
                        <br />
                        <p>Все это можно сказать и о нынешнем потомке того, первого Ghibli — с той лишь разницей, что он вобрал в себя все достигнутое нами за эти годы, все плоды нашей страсти изобретать новое, бросать вызовы и побеждать. Ghibli 2018 — это эксклюзивная роскошь, дерзкий нрав в элегантной оболочке и самые современные технологии. И конечно, это мощь и скорость.</p>
                        </div>
                    </Col>
                </Row>
                <Row padding="10px">
                    <Col xl={12} md={12} sm={12}>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/SVDBt05KLhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>

            </div>
        )
    }
}
