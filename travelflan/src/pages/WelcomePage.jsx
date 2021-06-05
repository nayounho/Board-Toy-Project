import StyledTitle from "components/Title/Title.styled";
import Footer from "containers/Footer/Footer";
import StyledFooter from "containers/Footer/Footer.styled";

const WelcomePage = ({ className, level }) => {
  return (
    <>
      <StyledTitle className={className} level={1}>
        TravelFlan Board
      </StyledTitle>
      <StyledFooter />
    </>
  );
};

export default WelcomePage;
