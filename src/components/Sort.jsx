import styled from "styled-components";
import { useStore } from "../contexts/StoreContext";

const Sort = () => {
  const { sortUpate, sort } = useStore();
  const changeHandler = (e) => {
    const value = e.target.value;
    sortUpate(value);
  };
  return (
    <Wrapper>
      <label htmlFor="category">Sort By:</label>
      <select onChange={changeHandler} value={sort} name="category">
        <option value="default">Default</option>
        <option value="a-to-z">A to Z</option>
        <option value="z-to-a">Z to A</option>
        <option value="low-to-high">Highest Price First</option>
        <option value="high-to-low">Lowest Price First</option>
      </select>
    </Wrapper>
  );
};

export default Sort;

const Wrapper = styled.div`
  select {
    background-color: var(--primary-color);
    color: white;
    font-weight: bold;
    border: none;
    padding: 5px;
    -webkit-appearance: button;
    appearance: button;
    outline: none;
  }
`;
