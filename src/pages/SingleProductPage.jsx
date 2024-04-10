import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import { HeroSection, AddToCart, Loader } from "../components";
import styled from "styled-components";

const SingleProductPage = () => {
  const { fetchSingleProduct, singleProduct, singleProductState } = useStore();
  const { pathname } = useLocation();

  useEffect(() => {
    fetchSingleProduct(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (singleProductState.loading) return <Loader />;

  return (
    <Wrapper>
      <HeroSection product={singleProduct?.title} />
      <div className="container product_info">
        <div className="img">
          <img src={singleProduct?.image} alt={singleProduct?.title} />
        </div>
        <div className="info">
          <h1>{singleProduct?.title}</h1>
          <p>{singleProduct?.description}</p>
          <h3>Price: ${singleProduct?.price}</h3>
          <AddToCart item={singleProduct} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100dvh;
  .product_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 40px 30px;
    .img {
      width: 25%;
      img {
        width: 100%;
      }
    }
    .info {
      width: 70%;
      padding: 20px;
      border: var(--border);
      h1 {
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 20px;
      }
      h3 {
        color: var(--primary-color);
      }
    }
    @media (max-width: 767px) {
      flex-direction: column;
      .img {
        width: 50%;
      }
      .info {
        width: 100%;
      }
    }
  }
`;

export default SingleProductPage;
