import styled, { keyframes } from "styled-components";
const Loader = () => {
  return <StyledLoader></StyledLoader>;
};

const animation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #25b09b;
  animation: ${animation} 1s infinite linear;
  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: ${animation} 2s infinite;
  }
  &::after {
    margin: 8px;
    animation-duration: 3s;
  }
`;

export default Loader;
