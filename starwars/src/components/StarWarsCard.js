import React from "react";
import "./StarWarsCard.css";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
export default function StarWarsCard(props) {
    function format(value){
        value = value.slice(0,1).toUpperCase()+value.slice(1);
        return value==='N/a' ? "None" : value;
    }
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld } = props.data;
    if(name==="Luke")return <Card />;
    return (
    <Card className="person-card mx-auto">
        <CardHeader><CardTitle>{name}</CardTitle></CardHeader>
        <CardBody>
            <CardText>
                <ul>
                    <li>Gender: {format(gender)}</li>
                    <li>Height: {format(height)}cm</li>
                    <li>Weight: {format(mass)}kg</li>
                    <li>Hair Color: {format(hair_color)}</li>
                    <li>Skin Color: {format(skin_color)}</li>
                    <li>Eye Color: {format(eye_color)}</li>
                    <li>Born in {format(birth_year)}</li>
                </ul>
            </CardText>
        </CardBody>
    </Card>);
}