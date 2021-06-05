import { useEffect, useState } from "react";

const RenderAlbums = () => {
  const [state, setState] = useState([]);
  const [renderList, setRenderList] = useState([]);

  const render = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await data.json();
    setState(albums);
  };
  document.addEventListener("DOMContentLoaded", render);

  useEffect(() => {
    setRenderList(state.slice(0, 5));
    console.log(state.length);
  }, [state]);

  return (
    <>
      <ul>
        {renderList.map(album => {
          return (
            <>
              <li key={album.id}>
                <img src="http://placehold.it/300x200" />
                {album.title}
              </li>
            </>
          );
        })}
      </ul>
      <button>1</button>
      <button>2</button>
    </>
  );
};

export default RenderAlbums;
