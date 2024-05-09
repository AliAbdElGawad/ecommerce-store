import { Button } from "../components";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>
        <span>404 </span>
        Not Found
      </h1>
      <Link to="/products">
        <Button>Go Shopping</Button>
      </Link>
    </Wrapper>
  );
};

export default ErrorPage;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  h1 {
    font-size: 8rem;
    text-align: center;
    span {
      color: var(--primary-color);
    }
  }
`;
