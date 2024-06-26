import { Products, HeroSection, Aside } from "../components";
import styled from "styled-components";

const ProductsPage = () => {
  return (
    <Wrapper>
      <HeroSection title={"Products"} />
      <div className="products-section">
        <Aside />
        <Products />
      </div>
    </Wrapper>
  );
};

export default ProductsPage;

const Wrapper = styled.section`
  min-height: 100dvh;
  .products-section {
    display: flex;
  }
`;
