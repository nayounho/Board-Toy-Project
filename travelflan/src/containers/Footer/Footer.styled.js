import styled from "styled-components";
import Footer from "./Footer";

const StyledFooter = styled(Footer)`
  border-top: 1px solid lightgray;
  margin-top: 2rem;
  text-align: center;
  font-size: 1.4rem;
  height: 100px;
  background-color: lightyellow;
  & > p {
    margin-top: 2rem;
  }
`;

export default StyledFooter;
