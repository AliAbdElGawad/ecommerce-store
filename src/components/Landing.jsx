import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components";
import heroImg from "../assets/images/undraw_web_shopping_re_owap.svg";

const Landing = () => {
  return (
    <Wrapper className="container">
      <div className="text">
        <h1>Welcome to our Store!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod?
          Voluptates dolorum eaque voluptatibus natus accusantium fuga
        </p>
        <Link to="/products">
          <Button>Shop now</Button>
        </Link>
      </div>
      <div className="img">
        <img src={heroImg} alt="hero" />
      </div>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100dvh - 60px);
  padding-top: 15px;
  text-align: center;
  color: var(--primary-color);
  gap: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    h1 {
      font-size: 3em;
      padding-bottom: 1rem;
    }
    p {
      line-height: 1.4;
      color: #7d8285;
      padding-bottom: 1rem;
    }
    button {
      height: 50px;
      width: 200px;
      border: 1px solid #252525;
      border-radius: 30px;
      &:hover {
        color: var(--third-color);
        background-color: var(--primary-color);
      }
    }
  }
  .img {
    flex: 1;
    img {
      max-width: 100%;
    }
  }
`;
