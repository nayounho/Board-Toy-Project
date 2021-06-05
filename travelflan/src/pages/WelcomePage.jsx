import StyledTitle from "components/Title/Title.styled";
import StyledFooter from "containers/Footer/Footer.styled";
import RenderAlbums from "containers/RenderAlbums/RenderAlbums";
import StyledRenderAlbums from "containers/RenderAlbums/RenderAlbums.styled";

const WelcomePage = ({ className }) => {
  return (
    <>
      <StyledTitle className={className} level={1}>
        TravelFlan Board
      </StyledTitle>
      <StyledRenderAlbums />
      <StyledFooter />
    </>
  );
};

export default WelcomePage;
