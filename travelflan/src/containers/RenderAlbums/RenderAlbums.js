import List from "components/List/List";
import RenderPageNumber from "containers/RenderPageNumber/RenderPageNumber";
import { useEffect, useState } from "react";
import api from "utills/Api";

const RenderAlbums = ({ className, state, setState, isOpen, setIsOpen, setUpdatePost }) => {
  const [renderList, setRenderList] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      const albums = await api.get();
      setState(albums);
    };
    getAlbums();
  }, []);

  const DeletePost = async e => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${e.target.parentNode.id}`, {
      method: "DELETE"
    });
    setState(state.filter(post => +e.target.parentNode.id !== post.id));
  };

  const UpdateButton = e => {
    setIsOpen(!isOpen);
    setUpdatePost({ id: +e.target.parentNode.id, title: renderList.find(item => item.id === +e.target.parentNode.id).title });
  };

  return (
    <section className={className}>
      <ul>
        {renderList.map(album => {
          return (
            <List id={album.id} key={album.id}>
              <img src="http://placehold.it/300x200" />
              {album.title}
              <button onClick={DeletePost}>X</button>
              <button onClick={UpdateButton}>수정</button>
            </List>
          );
        })}
      </ul>
      <RenderPageNumber state={state} setRenderList={setRenderList} />
    </section>
  );
};

export default RenderAlbums;
