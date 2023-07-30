import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import pokemonIcon from "../assets/pokemon_icon.png";

function Navigation() {
  const isActiveLink = ({ isActive }) => {
    const styleActive = "text-decoration-none me-3";
    return isActive
    ? `text-white fw-bold ${styleActive}` : `text-white ${styleActive}`;
  };

  return (
    <>
      <Navbar expand="lg" bg="danger">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="text-decoration-none me-7">
              <img src={pokemonIcon} alt="home" style={{ width: "36px", height: "36px" }} />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavLink to="/" className={isActiveLink}>
                Home
              </NavLink>
              <NavLink to="/pokedex" className={isActiveLink}>
                PokeDex
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;