import styled from "styled-components";
import RenderAlbums from "./RenderAlbums";

const StyledRenderAlbums = styled(RenderAlbums)`
  .pageNumber {
    display: flex;
    flex-flow: row;
    align-items: center;
    & > button {
      border: 0;
      outline: 0;
      background-color: #fff;
      font-size: 2rem;
      cursor: pointer;
    }
    & > li > button {
      border: 0;
      outline: 0;
      background-color: #fff;
      cursor: pointer;
      margin-left: 1rem;
    }
  }
`;

export default StyledRenderAlbums;
