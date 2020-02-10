import React from "react";
import "./StarWarsCard.css";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
export default function StarWarsCard(props) {
    function format(value, value_name) {
        if(value==="n/a") return "None";
        value = value.slice(0, 1).toUpperCase() + value.slice(1);
        if(value_name==="mass" && value !== "Unknown") return Math.round(value*2.2)+" lbs";
        if(value_name==="height" && value !== "Unknown") return Math.floor(value/2.54/12)+"'"+Math.round(value/2.54 %12)+'"';
        if(value_name==="birth_year") return value==="Unknown" ? "Birthdate unknown" : "Born in "+value;
        return value;
    }
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld } = props.data;
    if (!name) return <Card />;
    return (
        <Card className="person-card mx-auto mb-4">
            <CardHeader><CardTitle tag="h2">{name}</CardTitle></CardHeader>
            <CardBody>
                <CardText>Gender: {format(gender, "gender")}</CardText>
                <CardText>Height: {format(height, "height")}</CardText>
                <CardText>Weight: {format(mass, "mass")}</CardText>
                <CardText>Hair Color: {format(hair_color, "hair_color")}</CardText>
                <CardText>Skin Color: {format(skin_color, "skin_color")}</CardText>
                <CardText>Eye Color: {format(eye_color, "eye_color")}</CardText>
                <CardText>{format(birth_year, "birth_year")}</CardText>
            </CardBody >
        </Card >);
}