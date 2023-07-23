import { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../contexts/MyContext";

export default function Galeria() {
  const { data, setData } = useContext(MyContext);

  const changeLiked = (id) => {
    const newData = [...data];
    newData.forEach((image) => {
      if (image.id === id) {
        image.liked = !image.liked;
      }
    });
    setData(newData);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {data.map((image) => (
        <div
          key={image.id}
          className="foto"
          style={{ backgroundImage: `url(${image.src.original})` }}
          onClick={() => changeLiked(image.id)}
        >
          <Heart filled={image.liked} />
          <h4>{image.alt}</h4>
        </div>
      ))}
    </div>
  );
}