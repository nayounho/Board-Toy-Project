import List from "components/List/List";
import { useEffect, useState } from "react";

const RenderAlbums = ({ className }) => {
  const [state, setState] = useState([]);
  const [renderList, setRenderList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const render = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await data.json();
    setState(albums);
  };

  document.addEventListener("DOMContentLoaded", render);

  const pageNumber = () => {
    let answer = [];
    const number = state.length % 5 ? state.length / 5 + 1 : state.length / 5;
    for (let i = 0; i < number; i++) {
      answer.push(
        <List>
          <button>{i + 1}</button>
        </List>
      );
    }
    return answer;
  };

  const onClick = e => {
    if (!e.target.matches("button")) return;
    console.log(e.target.textContent);
    if (e.target.textContent === "<") {
      setCurrentPage(currentPage - 1);
    } else if (e.target.textContent === ">") {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(+e.target.textContent);
    }
  };

  useEffect(() => {
    setRenderList(() => state.slice(5 * (currentPage - 1), 5 * (currentPage - 1) + 5));
  }, [state, currentPage]);

  return (
    <section className={className}>
      <ul>
        {renderList.map(album => {
          return (
            <>
              <List id={album.id} key={album.id}>
                <img src="http://placehold.it/300x200" />
                {album.title}
              </List>
            </>
          );
        })}
      </ul>
      <ul className="pageNumber" onClick={onClick}>
        <button>{"<"}</button>
        {pageNumber()}
        <button>{">"}</button>
      </ul>
    </section>
  );
};

export default RenderAlbums;