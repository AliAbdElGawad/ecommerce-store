import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <h1>Footer</h1>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: var(--primary-color);
`;

export default Footer;
