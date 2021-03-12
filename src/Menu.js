import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Menu = (props) => {
  const { setRecipeIndex, recipes } = props;
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand
        href="#home"
        onClick={() => {
          setRecipeIndex(-1);
        }}
      >
        From Our Bunk to Your Table: Prison Recipes by Women
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Recipes" id="basic-nav-dropdown">
            {recipes.map(function (recipe, index) {
              return (
                <NavDropdown.Item
                  key={index}
                  onClick={function (e) {
                    setRecipeIndex(index);
                  }}
                >
                  {recipe.name}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Menu;
