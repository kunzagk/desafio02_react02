import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import MyContext from "../contexts/MyContext";
import { useNavigate } from "react-router-dom";

function Pokedex() {
  const { data } = useContext(MyContext);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPokemon) return;
    navigate(`/pokedex/${selectedPokemon}`);
  };

  return (
    <div className="text-center">
      <h1 className="m-3">Selecciona un Pokemon</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Select
            className="m-auto text-center"
            style={{ width: "30rem" }}
            aria-label="Default select example"
            value={selectedPokemon}
            onChange={(e) => setSelectedPokemon(e.target.value)}
          >
            <option disabled value="">
              PokeDex
            </option>
            {data.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="danger" type="submit" disabled={!selectedPokemon}>
          Consultar
        </Button>
      </Form>
    </div>
  );
}

export default Pokedex;



