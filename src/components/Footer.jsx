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
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 5dvh;
  background-color: var(--primary-color);
`;

export default Footer;
