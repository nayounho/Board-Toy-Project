import StyledTextArea from "components/TextArea/TextArea.styled";
import api from "utills/Api";

const Post = ({ className, state, setState, post, setPost, isOpen, setIsOpen, renewalPost, setRenewalPost }) => {
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
    console.log(addPost);
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
    setIsOpen(false);
  };
  return (
    <div className={className}>
      <StyledTextArea
        className="textAreaContainer"
        cols={50}
        rows={5}
        onChange={e => (isOpen ? textChange(e) : onChange(e))}
        placeholder={isOpen ? "" : "새로운 게시물을 등록해주세요"}
        value={isOpen ? renewalPost.title : post}
      ></StyledTextArea>
      <button onClick={() => (isOpen ? updatePost() : createPost())}>{isOpen ? "수정" : "등록"}</button>
    </div>
  );
};

export default Post;
