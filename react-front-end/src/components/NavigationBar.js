import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCocktail } from "react-icons/fa";

function NavigationBar() {
  const { user, setUser } = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaCocktail size="1.3em" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink eventKey="1" as={Link} to="/">
              Waxwing
            </NavLink>

            <NavDropdown
              title="Categories"
              bg="dark"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to={"/drink/c=Ordinary_Drink"}>
                Ordinary Drink
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/drink/a=Non_Alcoholic"}>
                Non Alcoholic
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/drink/a=Alcoholic"}>
                Alcoholic
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/drink/c=shake"}>
                Milk / Float /shake
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/drink/c=shot"}>
                shot
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/drink/c=Soft_Drink"}>
                Soft Drink
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/drink/c=Beer"}>
                Beer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/drink/c=Cocktail"}>
                Cocktail
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/drink/c=Homemade_Liqueur"}>
                Homemade Liqueur
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            {user ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <NavLink
                  style={{ cursor: "default" }}
                >{`Welcome ${user.name}!`}</NavLink>
                <NavDropdown
                  title="Search Cocktail by"
                  bg="dark"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to={"/search"}>
                    Name
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/SearchByFirst"}>
                    First letter
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/SearchByIngred"}>
                    By Ingredients
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink eventKey="2" as={Link} to="/NewCocktail">
                  Add New Cocktail
                </NavLink>
                <NavLink eventKey="2" as={Link} to="/myDrinks">
                  My Drinks
                </NavLink>
                <NavLink eventKey="4" as={Link} to="/Favourites">
                  Favourites
                </NavLink>
                <NavLink as={Link} to="/" onClick={() => setUser(null)}>
                  Logout
                </NavLink>
              </div>
            ) : (
              <>
                <NavLink eventKey="2" as={Link} to="/Register">
                  Register
                </NavLink>
                <NavLink
                  eventKey="3"
                  as={Link}
                  to="/Login"
                  state={{ from: "text" }}
                >
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
