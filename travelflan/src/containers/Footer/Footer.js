import Paragraph from "components/Paragraph/Paragraph";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <Paragraph>TravelFlan Board</Paragraph>
      <Paragraph>
        <a href="https://github.com/nayounho">@나윤호</a>
      </Paragraph>
    </div>
  );
};

export default Footer;
