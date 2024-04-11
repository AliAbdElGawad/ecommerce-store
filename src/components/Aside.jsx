import styled from "styled-components";
import { Filter, Sort } from "../components";

const Aside = () => {
  return (
    <Wrapper>
      <div className="content">
        <h2>Filter by:</h2>
        <Filter />
        <Sort />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  padding: 20px 10px;
  border-right: 1px solid var(--third-color);
  max-width: 250px;
  .content {
    display: flex;
    flex-direction: column;
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
