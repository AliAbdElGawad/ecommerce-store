import { AddToCart } from "../components";
import styled from "styled-components";

const CheckoutItems = ({
  id,
  title,
  image,
  price,
  quantity,
  itemTotalPrice,
}) => {
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
`;

export default CheckoutItems;
