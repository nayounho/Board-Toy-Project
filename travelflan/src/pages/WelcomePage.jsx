import StyledTitle from "components/Title/Title.styled";
import StyledFooter from "containers/Footer/Footer.styled";
import RenderAlbums from "containers/RenderAlbums/RenderAlbums";

const WelcomePage = ({ className }) => {
  return (
    <>
      <StyledTitle className={className} level={1}>
        TravelFlan Board
      </StyledTitle>
      <RenderAlbums />
      <StyledFooter />
    </>
  );
};

export default WelcomePage;
