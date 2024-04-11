import styled from "styled-components";
import { useStore } from "../contexts/StoreContext";

const Filter = () => {
  const { filtersUpdate, filteres } = useStore();
  const price = filteres.price;
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    filtersUpdate({ name, value });
  };
  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <label htmlFor="price">Price: ${price.toFixed(1)}</label>
        <input
          type="range"
          max={filteres.maxPrice}
          onChange={changeHandler}
          value={price}
          name="price"
          step={5}
          min={1}
        />
        <br />
        <label htmlFor="category">Category: </label>
        <select defaultValue="all" onChange={changeHandler} name="category">
          <option value="all">All</option>
          <option value="men's clothing">Men&apos;s Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women&apos;s Clothing</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.div`
margin-bottom: 60px;
`;
