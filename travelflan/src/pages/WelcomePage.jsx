import StyledTitle from "components/Title/Title.styled";
import StyledFooter from "containers/Footer/Footer.styled";
import StyledRenderAlbums from "containers/RenderAlbums/RenderAlbums.styled";
import { useState } from "react";
import Post from "containers/Post/Post";

const WelcomePage = ({ className }) => {
  const [state, setState] = useState([]);
  const [post, setPost] = useState("");

  return (
    <>
      <StyledTitle className={className} level={1}>
        TravelFlan Board
      </StyledTitle>
      <StyledRenderAlbums state={state} setState={setState} post={post} setPost={setPost} />
      <Post state={state} setState={setState} post={post} setPost={setPost} />
      <StyledFooter />
    </>
  );
};

export default WelcomePage;
