import React, { useState, useEffect } from "react";
import "./StarWarsCard.css";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import axios from "axios";

function format(value, value_name) {
    if (value === "n/a") return "None";
    value = value.slice(0, 1).toUpperCase() + value.slice(1);
    if (value_name === "mass" && value !== "Unknown") return `${Math.round(parseInt(value.replace(',', '')) * 2.2)} lbs`;
    if (value_name === "height" && value !== "Unknown") return `${Math.floor(value / 2.54 / 12)}' ${Math.round(value / 2.54 % 12)}"`;
    if (value_name === "birth_year") return value === "Unknown" ? "Birthdate unknown" : `Born in ${value}`;
    return value;
}

export default function StarWarsCard(props) {
    const [homeworldName, setHomeworldName] = useState("Unknown");
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld } = props.data;
    useEffect(() => {
        homeworld &&
            axios
                .get(homeworld)
                .then(r => setHomeworldName(r.data.name))
                .catch(console.error)
    }, [homeworld]);
    return !name
        ? <Card />
        : (
            <Card className="person-card mx-auto mb-4">
                <CardHeader>
                    <CardTitle tag="h2">{name}</CardTitle>
                    </CardHeader>
                <CardBody>
                    <CardText>Homeworld: {format(homeworldName)}</CardText>
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