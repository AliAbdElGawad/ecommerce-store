import { HeroSection, CheckoutItems } from "../components";
import { useCart } from "../contexts/CartContext";
import styled from "styled-components";

const Checkout = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <Wrapper>
        <div className="empty-cart">
          <h1>
            Your Your Cart is Empty! Please add some items to your cart before
            checking out.
          </h1>
        </div>
      </Wrapper>
    );
  }

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
  .empty-cart {
    margin: 100px;
    h1 {
      font-size: 36px;
      text-align: center;
    }
  }
`;

export default Checkout;
