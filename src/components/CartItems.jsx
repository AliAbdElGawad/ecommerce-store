import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { useStore } from "../contexts/StoreContext";
import { Button } from "../components";

const CartItems = () => {
  const { cart, totalPrice, totalItems } = useCart();
  const { isCartOpen, closeCart } = useStore();

  if (totalItems === 0) {
    return (
      <Wrapper className={`${isCartOpen ? "open" : ""}`}>
        <div className="empty-message">
          Your shopping bag is empty.
          <br /> Add some items now!
          <Link to="/products">
            <Button onClick={() => closeCart()}>Shop Now</Button>
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className={`${isCartOpen ? "open" : ""}`}>
      <ul>
        {cart.map(({ quantity, image, price, title, itemTotalPrice, id }) => (
          <li className="cart-item" key={id}>
            <div className="item">
              <div className="item-info">
                <img src={image} alt={title} />
                <h4>{title}</h4>
              </div>
              <div className="item-amount">
                <p>${price}</p>
                <h4>X{quantity}</h4>
                <h5>${itemTotalPrice.toFixed(2)}</h5>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>$ {totalPrice.toFixed(2)}</p>
      <Link to="/checkout">
        <Button onClick={() => closeCart()}>Checkout</Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 60px;
  border-radius: 6px;
  z-index: 10;
  width: 300px;
  max-height: 400px;
  overflow: scroll;
  padding: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 8px 16px 0px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }
  &.open {
    display: block;
  }
  .cart-item {
    border-bottom: 1px solid black;
    padding: 8px 4px;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .item-info {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      img {
        width: 40px;
      }
      h4 {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: break-spaces;
      }
    }
    .item-amount {
      display: flex;
      flex-direction: column;
      align-items: end;
      color: var(--primary-color);
    }
  }
  p {
    text-align: end;
    padding: 10px 0;
    font-weight: bold;
    color: var(--primary-color);
  }
  a {
    display: block;
  }
`;

export default CartItems;
