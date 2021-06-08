import styled from "styled-components";
import Post from "./Post";

const StyledPost = styled(Post)`
  display: flex;
  flex-flow: column;
  align-items: center;
  & > button {
    width: 416px;
    cursor: pointer;
    margin-top: 2rem;
    border: none;
    padding: 0.5rem;
    background-color: lightgreen;
    border-radius: 0.3rem;
  }
`;

export default StyledPost;
