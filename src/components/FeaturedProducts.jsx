import { Featured } from "../components";
import styled from "styled-components";
import { useStore } from "../contexts/StoreContext";

const FeaturedProducts = () => {
  const { products } = useStore();
  return (
    <Wrapper>
      <h1>Featured Products</h1>
      <div className="grid">
        {products.slice(0, 4).map((product) => (
          <Featured key={product.id} product={product} />
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 2rem 0;
  h1 {
    text-align: center;
    font-size: 36px;
    padding-bottom: 2rem;
    &::after {
      content: "";
      display: block;
      border-radius: var(--radius);
      height: 5px;
      background-color: var(--third-color);
      width: 25%;
      margin: 0 auto;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    padding: 2rem;
  }
`;
export default FeaturedProducts;
