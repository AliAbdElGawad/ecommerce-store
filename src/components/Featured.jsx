import { Link } from "react-router-dom";
import styled from "styled-components";

const Featured = ({ product }) => {
  const { image, title, price, id } = product;
  return (
    <Wrapper>
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <div className="info">
        <Link to={`/products/${id}`}>
          <p>{title}</p>
        </Link>
        <span>${price}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 0.5rem;
  border-radius: var(--radius);
  border: var(--border);
  position: relative;
  box-shadow: var(--shadow);
  transition: var(--transition);
  &:hover {
    transform: translateY(-5px) scale(1.02);
  }
  &::after {
    content: "Hot sale";
    position: absolute;
    top: 5px;
    right: -14px;
    padding: 0.5rem;
    width: 10rem;
    background: var(--third-color);
    color: var(--primary-color);
    border-radius: var(--radius);
    text-align: center;
    font-weight: bold;
    box-shadow: var(--shadow);
  }
  .img {
    display: grid;
    place-items: center;
    img {
      width: 80%;
      margin: auto;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 1rem;
    margin-top: auto;
    span {
      color: var(--third-color);
    }
  }
`;

export default Featured;
