import StyledTextArea from "components/TextArea/TextArea.styled";
import { useState } from "react";

const placeHolder = "새로운 게시물을 등록해주세요";

const Post = ({ state, setState }) => {
  const [post, setPost] = useState("");

  const onChange = e => {
    setPost(e.target.value);
  };

  const CreatePost = async e => {
    const data = await fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        userId: 11,
        id: state.length ? Math.max(...state.map(post => post.id)) + 1 : 1,
        title: post
      })
    });
    const addPost = await data.json();
    setState([...state, addPost]);
  };

  return (
    <>
      <StyledTextArea className="textAreaContainer" cols={50} rows={5} id={"addPost"} placeholder={placeHolder} onChange={onChange}></StyledTextArea>
      <button onClick={CreatePost}>등록</button>
    </>
  );
};

export default Post;
