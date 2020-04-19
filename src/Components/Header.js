import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from './logo192.png';
import {BrowserRouter as Router, Switch,  Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';


export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            ></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav">

                        </Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Главная</Nav.Link>
                                <Nav.Link href="/about">О модели</Nav.Link>
                                <Nav.Link href="/contacts">Contats</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav>
                            <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="light">Search</Button>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                    
                </Navbar>
                <Router>
                        <Switch>
                            <Route exact path ="/" component={Home}/>
                            <Route exact path ="/about" component={About}/>
                            <Route exact path ="/contacts" component={Contacts}/>
                            <Route exact path ="/blog" component={Blog}/>
                        </Switch>
                    </Router>
            </div>
        )
    }
}