import styled from "styled-components";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Wrapper>
      <h3>&copy; 2021 - {date} Built with Love &#x2764; All rights reserved</h3>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: var(--third-color);
`;

export default Footer;
