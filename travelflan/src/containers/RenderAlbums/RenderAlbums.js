import List from "components/List/List";
import RenderPageNumber from "containers/RenderPageNumber/RenderPageNumber";
import { useEffect, useState } from "react";
import api from "utills/Api";

const RenderAlbums = ({ className, state, setState, isOpen, setIsOpen, renewalPost, setRenewalPost }) => {
  const [renderList, setRenderList] = useState([]);

  const UpdateButton = e => {
    setIsOpen(!isOpen);
    setRenewalPost({ id: +e.target.parentNode.id, title: renderList.find(item => item.id === +e.target.parentNode.id).title });
  };

  useEffect(() => {
    const getAlbums = async () => {
      const albums = await api.get();
      setState(albums);
    };
    getAlbums();
  }, []);

  const deletePost = async e => {
    const targetId = +e.target.parentNode.id;
    const removePost = await api.delete(targetId, state);
    setState(removePost);
  };

  return (
    <section className={className}>
      <ul>
        {renderList.map(album => {
          return (
            <List id={album.id} key={album.id}>
              <img src="http://placehold.it/300x200" />
              <span>{album.title}</span>
              <button className="delete" onClick={deletePost}>
                X
              </button>
              <button className="update" onClick={UpdateButton}>
                수정
              </button>
            </List>
          );
        })}
      </ul>
      <RenderPageNumber state={state} setRenderList={setRenderList} />
    </section>
  );
};

export default RenderAlbums;
