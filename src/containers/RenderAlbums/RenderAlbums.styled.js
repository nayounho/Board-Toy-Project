import styled from "styled-components";
import RenderAlbums from "./RenderAlbums";

const StyledRenderAlbums = styled(RenderAlbums)`
  width: 850px;
  margin: 0 auto;
  & > ul {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  & > ul:first-child li {
    margin-bottom: 2rem;
  }
  & > ul + ul {
    display: flex;
    flex-flow: row;
    width: 100%;
    align-items: center;
    margin-top: 2rem;
  }
  & > ul + ul > button {
    border: 0;
    outline: 0;
    background-color: #fff;
    cursor: pointer;
  }
  & > ul + ul > li > button {
    border: 0;
    outline: 0;
    margin: 0.5rem;
    background-color: #fff;
    cursor: pointer;
  }
  & > ul > li {
    position: relative;
    display: flex;
    align-items: center;
  }
  & > ul > li > span {
    font-size: 2rem;
    margin-left: 2rem;
  }
  .delete {
    position: absolute;
    font-size: 2rem;
    top: 2rem;
    right: 2rem;
    border-radius: 50%;
    border: 0;
    outline: 0;
    background-color: #fff;
    cursor: pointer;
  }
  .update {
    position: absolute;
    right: 2rem;
    top: 6rem;
    font-size: 1.5rem;
    border-radius: 50%;
    border: 0;
    outline: 0;
    background-color: #fff;
    cursor: pointer;
  }
`;

export default StyledRenderAlbums;
