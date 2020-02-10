import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import StarWarsCard from "./components/StarWarsCard";
import { Container, Row, Col } from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([{ "name": "Luke" }]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/?format=json")
      .then(r => {
        console.log(r.data);
        setCharacters(r.data.results);
      })
      .catch(console.error)
  }

    , []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        <Row>
          <Col xs="auto"></Col>
          {characters.map((person, idx) => <StarWarsCard key={idx} data={person} />)}
        </Row>
      </Container>
    </div>
  );
}

export default App;
