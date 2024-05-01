import styled from "styled-components";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Wrapper>
      <div className="left"></div>
      <div className="mid">
        <h3>
          &copy; 2021 - {date} Built with Love &#x2764; All rights reserved
        </h3>
      </div>
      <div className="right"></div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  background-color: var(--third-color);
  div {
    flex: 1;
  }
`;

export default Footer;
