import { Loader, Product } from "../components";
import { useStore } from "../contexts/StoreContext";
import styled from "styled-components";

const Products = () => {
  const { filteredProducts: products, productsState } = useStore();

  if (productsState.loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <div className="products">
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    padding: 20px 10px;
  }
`;
