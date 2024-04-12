import { Link } from "react-router-dom";
import { styled } from "styled-components";
const HeroSection = ({ title, product }) => {
  return (
    <Wrapper>
      <h1>
        {title ? `${title} ` : <Link to="/products">Products </Link>}
        {product && `/ ${product}`}
      </h1>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.div`
  display: none;
  height: 150px;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: start;
  background-color: var(--secondary-color);
  color: var(--third-color);
  @media (min-width: 767px) {
    display: flex;
  }
`;
