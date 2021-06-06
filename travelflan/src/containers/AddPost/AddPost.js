import StyledTextArea from "components/TextArea/TextArea.styled";

const placeHolder = "새로운 게시물을 등록해주세요";

const AddPost = () => {
  return <StyledTextArea className="textAreaContainer" cols={50} rows={5} id={"addPost"} placeholder={placeHolder}></StyledTextArea>;
};

export default AddPost;
