import { Container, Row, Col } from "react-bootstrap";
import Pokedex from "../assets/pokedex.png";

function Home() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="12" className="text-center m-4">
          <h1>Bienvenido a la Pokedex versión Fruna</h1>
        </Col>
        <Col xs="auto">
         <img src={Pokedex} alt="pokedex" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
