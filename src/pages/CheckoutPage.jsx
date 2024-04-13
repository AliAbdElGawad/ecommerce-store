import { HeroSection, CheckoutItems } from "../components";
import { useCart } from "../contexts/CartContext";
import styled from "styled-components";

const Checkout = () => {
  const { cart } = useCart();

  return (
    <Wrapper>
      <HeroSection title="Checkout" />
      {cart.map((item) => (
        <CheckoutItems key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100dvh;
  @media (max-width: 767px) {
    font-size: 12px;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 200px;
    padding: 20px;
    gap: 20px;
    border: var(--border);
    .img {
      display: flex;
      justify-content: center;
      width: 15%;
      img {
        width: 60%;
      }
    }
    .info {
      text-align: end;
      width: 40%;
      h2 {
        text-align: start;
      }
    }
    .amount-control {
      width: 33%;
    }
  }
`;

export default Checkout;
