import React from "react";
import PropTypes from "prop-types";
import Ingredient from "./Ingredient";
import { Container, Row, Col } from "react-bootstrap";

const Recipe = (props) => {
  const { name, ingredients, preparation, images } = props;

  console.log("name", name);
  const { url } = images[0].thumbnails.large;
  console.log(url);

  return (
    <Container>
      <Row>
        <Col>
          <h2>{name}</h2>
        </Col>
      </Row>
      {images.map((image) => (
        <Row>
          <Col>
            <img src={image.thumbnails.large.url}></img>
          </Col>
        </Row>
      ))}

      <Row>
        <Col>
          <h3>Ingredients:</h3>
          {ingredients.map((ingredient, index) => {
            return <Ingredient name={ingredient} />;
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Preparation:</h3>

          {preparation.map((step) => {
            return <p>{step}</p>;
          })}
        </Col>
      </Row>
    </Container>
  );
};

Recipe.propTypes = {
  name: PropTypes.string,
  ingredients: PropTypes.array,
  images: PropTypes.array,
};

Recipe.defaultProps = {
  ingredients: ["no ingredients for recipe"],
};

export default Recipe;

/*
name
ingredients
steps

*/
