import { Products, Filter, HeroSection } from "../components";
import styled from "styled-components";

const ProductsPage = () => {
  return (
    <Wrapper>
      <HeroSection />
      <div className="container">
        <Filter />
        <Products />
      </div>
    </Wrapper>
  );
};

export default ProductsPage;

const Wrapper = styled.section`
  .container {
    display: flex;
  }
`;
