import React from "react";
import "./StarWarsCard.css";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
export default function StarWarsCard(props) {
    function format(value) {
        value = value.slice(0, 1).toUpperCase() + value.slice(1);
        return value === 'N/a' ? "None" : value;
    }
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld } = props.data;
    if (!name) return <Card />;
    return (
        <Card className="person-card mx-auto mb-4">
            <CardHeader><CardTitle tag="h2">{name}</CardTitle></CardHeader>
            <CardBody>
                <CardText>Gender: {format(gender)}</CardText>
                <CardText>Height: {format(height)}cm</CardText>
                <CardText>Weight: {format(mass)}kg</CardText>
                <CardText>Hair Color: {format(hair_color)}</CardText>
                <CardText>Skin Color: {format(skin_color)}</CardText>
                <CardText>Eye Color: {format(eye_color)}</CardText>
                <CardText>Born in {format(birth_year)}</CardText>
            </CardBody >
        </Card >);
}