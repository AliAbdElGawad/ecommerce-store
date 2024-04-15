import styled from "styled-components";
import { useStore } from "../contexts/StoreContext";

const Filter = () => {
  /**
   * ! Don't Forget
   * TODO: Add Search filter // Done 
   * TODO: Make layout responsive and look better
   */
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
        <label htmlFor="search">Name:</label>
        <input type="text" name="search" onChange={changeHandler} />
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
  form {
    input[type="text"] {
      appearance: none;
      border: none;
      outline: none;
      border-bottom: 0.2em solid var(--third-color);
      background: var(--text-color);
      border-radius: 0.2em 0.2em 0 0;
      padding: 0.4em;
      color: var(--secondary-color);
      font-weight: bold;
    }
  }
`;
