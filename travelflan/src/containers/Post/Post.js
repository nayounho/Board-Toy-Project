import StyledTextArea from "components/TextArea/TextArea.styled";
import api from "utills/Api";

const placeHolder = "새로운 게시물을 등록해주세요";

const Post = ({ state, setState, post, setPost, isOpen, renewalPost, setRenewalPost }) => {
  const onChange = e => {
    setPost(e.target.value);
  };

  const textChange = e => {
    setRenewalPost({ ...renewalPost, title: e.target.value });
  };

  const generateId = () => {
    return state.length ? Math.max(...state.map(post => post.id)) + 1 : 1;
  };

  const createPost = async () => {
    const addPost = await api.post(generateId(), post);
    setState([...state, addPost]);
    setPost("");
  };

  const updatePost = async () => {
    const newPost = await api.update(renewalPost);
    setState(
      state.map(post => {
        return newPost.id === post.id ? { ...post, title: newPost.title } : post;
      })
    );
    setRenewalPost({ id: 0, title: "" });
  };
  return (
    <>
      {isOpen ? (
        <div>
          <StyledTextArea className="textAreaContainer" cols={50} rows={5} id={"updatePost"} onChange={textChange} value={renewalPost.title}></StyledTextArea>
          <button onClick={updatePost}>수정</button>
        </div>
      ) : (
        <>
          <StyledTextArea className="textAreaContainer" cols={50} rows={5} id={"addPost"} placeholder={placeHolder} onChange={onChange} value={post}></StyledTextArea>
          <button onClick={createPost}>등록</button>
        </>
      )}
    </>
  );
};

export default Post;
