import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddToCart } from "../components";

const Product = ({ product }) => {
  const { category, image, title, description, price, rating, id } = product;
  return (
    <Wrapper>
      <span>{category}</span>
      <div className="img">
        <img src={image} alt="product" />
      </div>
      <div className="details">
        <Link to={`/products/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{description}</p>
        <span>
          Rate: {rating.rate} of {rating.count} reviews
        </span>
        <p>${price}</p>
      </div>
      <AddToCart item={{ id, price, title, image }} />
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  text-transform: capitalize;
  font-weight: bold;
  color: var(--third-color);
  border-radius: var(--radius);
  transition: var(--transition);
  border: var(--border);
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: translateY(-5px);
  }
  span {
    padding-bottom: 10px;
    display: inline-block;
  }
  .img {
    img {
      width: 100%;
      padding-bottom: 10px;
      height: 30vh;
      border-radius: 30px;
      object-fit: contain;
    }
  }
  .details {
    margin-bottom: auto;
    h2 {
      color: var(--text-dark);
      cursor: pointer;
    }
    p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .price {
    padding-bottom: 10px;
    button {
      width: 100%;
      border: none;
      padding: 10px;
      background-color: var(--third-color);
      border-radius: 6px;
      color: var(--text-color);
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        outline: none;
        opacity: 0.75;
        color: black;
      }
    }
  }
`;
