import styled from "styled-components";
import { Button, Filter, Sort } from "../components";
import { useStore } from "../contexts/StoreContext";

const Aside = () => {
  const { resitFilteres } = useStore();

  const resitHandler = () => {
    resitFilteres();
  };

  return (
    <Wrapper>
      <div className="content">
        <h2>Filter by:</h2>
        <Filter />
        <Sort />
        <Button onClick={resitHandler}>Reset</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  padding: 20px 10px;
  border-right: 1px solid var(--third-color);
  width: 250px;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 25px;
    min-height: 400px;
    position: sticky;
    top: 0;
    left: 0;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export default Aside;
