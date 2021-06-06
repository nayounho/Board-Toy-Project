import StyledTitle from "components/Title/Title.styled";
import AddPost from "containers/AddPost/AddPost";
import StyledFooter from "containers/Footer/Footer.styled";
import StyledRenderAlbums from "containers/RenderAlbums/RenderAlbums.styled";

const WelcomePage = ({ className }) => {
  return (
    <>
      <StyledTitle className={className} level={1}>
        TravelFlan Board
      </StyledTitle>
      <StyledRenderAlbums />
      <AddPost />
      <StyledFooter />
    </>
  );
};

export default WelcomePage;
