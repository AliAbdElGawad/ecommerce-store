import styled from "styled-components";
import { Sort } from "../components";
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
      <div className="content">
        <Sort />
        <h2>Filter by:</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="price">Price: ${price.toFixed(1)} </label>
          <input
            type="range"
            max={filteres.maxPrice}
            onChange={changeHandler}
            name="price"
            step={1}
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
      </div>
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.aside`
  width: 180px;
  border-right: 1px solid var(--third-color);
  padding: 20px 10px;
  .content {
    position: sticky;
    top: 0;
    left: 0;
  }
`;
