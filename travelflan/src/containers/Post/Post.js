import StyledTextArea from "components/TextArea/TextArea.styled";

const placeHolder = "새로운 게시물을 등록해주세요";

const Post = ({ state, setState, post, setPost, isOpen, updatePost, setUpdatePost }) => {
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
    setPost("");
  };

  const textChange = e => {
    setUpdatePost({ ...updatePost, title: e.target.value });
  };

  const UpdatePost = async e => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/albums/${updatePost.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        title: updatePost.title
      })
    });
    const newPost = await data.json();
    setState(state.map(post => (newPost.id === post.id ? { ...post, title: newPost.title } : post)));
    setUpdatePost({ id: 0, title: "" });
  };

  return (
    <>
      <StyledTextArea className="textAreaContainer" cols={50} rows={5} id={"addPost"} placeholder={placeHolder} onChange={onChange} value={post}></StyledTextArea>
      <button onClick={CreatePost}>등록</button>
      {isOpen ? (
        <div>
          <StyledTextArea className="textAreaContainer" cols={50} rows={5} id={"updatePost"} onChange={textChange} value={updatePost.title}></StyledTextArea>
          <button onClick={UpdatePost}>Submit</button>
        </div>
      ) : null}
    </>
  );
};

export default Post;
