/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';

import Cart from './Cart';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Shoe shop</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/detail">
                    Detail
                  </Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="background">
            <h1>20% Seasn Off</h1>
          </div>
          <div className="container">
            <div className="row">
              {shoes.map((e, i) => {
                return <Card shoes={shoes[i]} i={i} />;
              })}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                // 로딩중 UI
                axios
                  .get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                    // 로딩중 UI hidden
                    shoes변경([...shoes, ...result.data]);
                  })
                  .catch(() => console.log('실패쓰'));
                // 로딩중 UI hidden
              }}
            >
              더보기
            </button>
          </div>
        </Route>

        <Route exact path="/detail/:id">
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>
      </Switch>
    </>
  );
}

function Card(props) {
  return (
    <>
      <div className="col-md-4">
        <img
          src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
          width="100%"
        />
        <h4>{props.shoes.title}</h4>
        <p>
          {props.shoes.content} & {props.shoes.price}
        </p>
      </div>
    </>
  );
}

export default App;
