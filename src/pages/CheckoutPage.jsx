import { HeroSection } from "../components";
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
            <h2>{item.title}</h2>
          </div>
          <div className="info">
            <p>${item.price}</p>
            <h4>X{item.quantity}</h4>
            <h5>${item.itemTotalPrice.toFixed(2)}</h5>
          </div>
          <div className="amount-control"></div>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
      img {
        width: 100px;
      }
    }
    .info {
      text-align: end;
      margin-left: auto;
    }
    .amount-control {
      width: 33%;
      height: 100%;
      background-color: red;
    }
  }
`;

export default Checkout;
