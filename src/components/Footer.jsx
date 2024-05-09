import styled from "styled-components";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Wrapper>
      <div className="left">
        <h1>Owl's Store</h1>
      </div>
      <div className="mid">
        <h3>
          &copy; 2021 - {date} Built with Love &#x2764; All rights reserved
        </h3>
      </div>
      <div className="right">
        <FaFacebookSquare className="icons" />
        <FaTwitterSquare className="icons" />
        <FaInstagramSquare className="icons" />
        <FaPinterestSquare className="icons" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  min-height: 60px;
  background-color: var(--primary-color);
  padding: 20px;
  .right {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  @media (max-width: 767px) {
    gap: 20px;
    flex-direction: column;
    .mid,
    .left {
      font-size: 12px;
    }
    .right {
      width: 60%;
    }
  }
`;

export default Footer;
