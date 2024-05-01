import { AddToCart, Button } from "../components";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";

const CheckoutItems = ({
  id,
  title,
  image,
  price,
  quantity,
  itemTotalPrice,
}) => {
  const { removeFromCart } = useCart();

  return (
    <Wrapper>
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <h3>${price}</h3>
        <h3>X{quantity}</h3>
        <h4>${itemTotalPrice.toFixed(2)}</h4>
      </div>
      <div className="amount-control">
        <AddToCart item={{ id, title, image, price, quantity }} />
        <Button
          bgColor={"red"}
          onClick={() => {
            removeFromCart(id);
          }}
        >
          <FaTrashAlt />
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
      width: 65%;
    }
  }
  .info {
    text-align: end;
    width: 40%;
    h2 {
      text-align: start;
    }
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
  .amount-control {
    width: 33%;
    button {
      margin-top: 10px;
    }
  }
`;

export default CheckoutItems;
