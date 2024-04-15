import { Featured } from "../components";
import { useStore } from "../contexts/StoreContext";
import styled from "styled-components";

const FeaturedProducts = () => {
  const { products } = useStore();
  const items = products.slice(0, 4);

  return (
    <Wrapper>
      <h1>Featured Products</h1>
      <div className="grid">
        {items.map((product) => (
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
    font-size: 2.5em;
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
    gap: 2rem;
    padding: 2rem;
  }
`;
export default FeaturedProducts;
