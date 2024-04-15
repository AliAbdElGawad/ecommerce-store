import { Link } from "react-router-dom";
import { HeroSection, CheckoutItems, Button } from "../components";
import { useCart } from "../contexts/CartContext";
import styled from "styled-components";

const Checkout = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <EmptyWrapper>
        <h1>
          Your Your Cart is Empty! Please add some items to your cart before
          checking out.
        </h1>
        <div className="flex-center">
          <Link to="/products">
            <Button>
              Go Shopping &#8594;
            </Button>
          </Link>
        </div>
      </EmptyWrapper>
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
`;

const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-direction: column;
  text-align: center;
  min-height: 100dvh;
`;
export default Checkout;
