import Paragraph from "components/Paragraph/Paragraph";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <Paragraph>Board Toy-Project</Paragraph>
      <Paragraph>
        <a href="https://github.com/nayounho">@나윤호</a>
      </Paragraph>
    </div>
  );
};

export default Footer;
