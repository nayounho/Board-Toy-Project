import List from "components/List/List";
import { useEffect, useState } from "react";

const RenderPageNumber = ({ state, setRenderList }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumber = () => {
    let answer = [];
    const number = !state.length % 5 ? state.length / 5 + 1 : state.length / 5;
    for (let i = 0; i < number; i++) {
      answer.push(
        <List>
          <button>{i + 1}</button>
        </List>
      );
    }
    return answer;
  };

  useEffect(() => {
    setRenderList(() => state.slice(5 * (currentPage - 1), 5 * (currentPage - 1) + 5));
  }, [state, currentPage]);

  const onClick = e => {
    if (!e.target.matches("button")) return;
    if (e.target.textContent === "<") {
      setCurrentPage(currentPage - 1);
    } else if (e.target.textContent === ">") {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(+e.target.textContent);
    }
  };

  return (
    <ul className="pageNumber" onClick={onClick}>
      <button>{"<"}</button>
      {pageNumber()}
      <button>{">"}</button>
    </ul>
  );
};

export default RenderPageNumber;
