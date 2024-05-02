import { Button, Featured } from "../components";
import { useStore } from "../contexts/StoreContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FeaturedProducts = () => {
  const { products } = useStore();
  const items = products.slice(0, 3);

  return (
    <Wrapper>
      <h1>Featured Products</h1>
      <div className="flex-center">
        <div className="grid">
          {items.map((product) => (
            <Featured key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="centered-btn">
        <Link to="/products">
          <Button>View All</Button>
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 2rem 0;
  min-height: 100vh;
  background-color: rgb(241 245 248);
  h1 {
    text-align: center;
    font-size: 2.5em;
    padding-bottom: 1rem;
    cursor: pointer;
    @media (max-width: 767px) {
      font-size: 1.5em;
    }
    &::after {
      content: "";
      display: block;
      border-radius: var(--radius);
      height: 5px;
      background-color: var(--third-color);
      transition: var(--transition);
      width: 8%;
      margin: 0 auto;
    }
    &:hover::after {
      width: 20%;
    }
  }
  .grid {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
    gap: 2rem;
    padding: 2rem;
    width: 100%;
  }
  .centered-btn {
    display: flex;
    a {
      margin: 0 auto;
    }
  }
`;
export default FeaturedProducts;
