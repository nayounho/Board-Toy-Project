import StyledTitle from "components/Title/Title.styled";
import StyledFooter from "containers/Footer/Footer.styled";
import StyledRenderAlbums from "containers/RenderAlbums/RenderAlbums.styled";
import { useState } from "react";
import Post from "containers/Post/Post";

const WelcomePage = ({ className }) => {
  const [state, setState] = useState([]);

  return (
    <>
      <StyledTitle className={className} level={1}>
        TravelFlan Board
      </StyledTitle>
      <StyledRenderAlbums state={state} setState={setState} />
      <Post state={state} setState={setState} />
      <StyledFooter />
    </>
  );
};

export default WelcomePage;
