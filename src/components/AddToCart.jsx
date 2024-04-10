import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AddToCart = ({ item }) => {
  const { id, price, title, image } = item;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const increace = () => {
    if (quantity === 10) return;
    setQuantity((prevCount) => prevCount + 1);
  };
  const decreace = () => {
    if (quantity <= 1) return;
    setQuantity((prevCount) => prevCount - 1);
  };
  const handleAddToCart = () => {
    addToCart({ id, title, image, price, quantity });
    setQuantity(1);
  };
  return (
    <Wrapper>
      <div className="quantity">
        <FaPlus onClick={increace} className="icon" />
        <input disabled type="number" value={quantity} />
        <FaMinus onClick={decreace} className="icon" />
      </div>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
gap: 20px;
  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input[type="number"] {
    max-width: 50px;
    height: 40px;
    text-align: center;
    border: solid 1px #ccc;
    font-size: 18px;
    border-radius: 6px;
    margin-bottom: 5px;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .icon {
    font-size: 28px;
    width: 20%;
    margin: 0 10px;
    color: var(--primary-color);
    cursor: pointer;
  }
`;

export default AddToCart;
