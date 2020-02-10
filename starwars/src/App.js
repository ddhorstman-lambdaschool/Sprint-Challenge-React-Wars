import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import StarWarsCard from "./components/StarWarsCard";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([{}]);
  const [url, setUrl] = useState({
    next: null,
    current: "https://swapi.co/api/people/",
    previous: null
  });
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(url.current)
      .then(r => {
        //console.log(r.data);
        setUrl({
          next: r.data.next,
          current: url.current,
          previous: r.data.previous
        });
        setCharacters(r.data.results);
      })
      .catch(console.error)
  }

    , [url.current]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <ButtonGroup className="mb-4">
        <Button
          disabled={url.previous === null}
          onClick={() => setUrl({
            next: null,
            current: url.previous,
            previous: null
          })}>
          Previous
      </Button>
        <Button
          disabled={url.next === null}
          onClick={() => setUrl({
            next: null,
            current: url.next,
            previous: null
          })}>
          Next
      </Button>
      </ButtonGroup>
      <Container>
        <Row>
          <Col xs="auto" style={{ padding: "0px" }}></Col>
          {characters.map((person, idx) => <StarWarsCard key={idx} data={person} />)}
        </Row>
      </Container>
    </div>
  );
}

export default App;
