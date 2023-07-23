import { useContext } from "react";
import MyContext from "../contexts/MyContext";
import Heart from "../components/Heart";

export default function Favoritos() {
  const { data,setData} = useContext(MyContext);

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
    <>
      <h1>Fotos favoritas</h1>
      <div className="galeria grid-columns-5 p-3">
        {data
          .filter(({ liked }) => liked)
          .map((image) => (
            <div
              key={image.id}
              className="foto"
              style={{ backgroundImage: `url(${image.src.original})` }}
              onClick={() => changeLiked(image.id)}
            >
              <Heart filled={true}/>
            </div>
          ))}
      </div>
    </>
  );
}
