import { HeroSection, AddToCart } from "../components";
import { useCart } from "../contexts/CartContext";
import styled from "styled-components";

const Checkout = () => {
  const { cart } = useCart();

  return (
    <Wrapper>
      <HeroSection title="Checkout" />
      {cart.map((item) => (
        <div className="item container" key={item.id}>
          <div className="img">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="info">
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
            <h3>X{item.quantity}</h3>
            <h4>${item.itemTotalPrice.toFixed(2)}</h4>
          </div>
          <div className="amount-control">
            <AddToCart item={item} />
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
        width: 70%;
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
