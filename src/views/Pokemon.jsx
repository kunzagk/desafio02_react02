import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }, [name]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "25rem" }}>
        <Card.Title className="text-center mt-3">{pokemon?.name.toUpperCase()}</Card.Title>
        <Card.Img
          variant="top"
          src={pokemon?.sprites.other.dream_world.front_default}
          alt={`${pokemon?.name}`}
        />
        <Card.Body>
          <Card.Text className="text-center">Pokedex Number: {pokemon?.id}</Card.Text>
          <h5 className="text-center">Tipos:</h5>
          <ul className="list-unstyled text-center">
            {pokemon?.types?.map(({ type }) => (
              <li key={type.name}>
                {type.name}
              </li>
            ))}
          </ul>
          <h5 className="text-center">Stats:</h5>
          <ul className="list-unstyled text-center">
            {pokemon?.stats?.map(({ base_stat: value, stat: { name } }) => (
              <li key={name}>
                {name}: <span>{value}</span>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Pokemon;
