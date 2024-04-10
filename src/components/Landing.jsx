import styled from "styled-components";
import heroImg from "../assets/images/undraw_web_shopping_re_owap.svg";
import { Link } from "react-router-dom";

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
          <button type="button">Shop now</button>
        </Link>
      </div>
      <div className="img">
        <img src={heroImg} alt="hero" />
      </div>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100dvh - 60px);
  padding-top: 15px;
  text-align: center;
  color: var(--text-color);
  background-color: var(--primary-color);
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
      padding-bottom: 10px;
    }
    p {
      line-height: 1.4;
      color: #7d8285;
      padding-bottom: 10px;
    }
    button {
      height: 50px;
      width: 200px;
      cursor: pointer;
      border: 2px solid #252525;
      border-radius: 30px;
      font-weight: bold;
      transition: all 0.3s ease;
      &:hover {
        color: var(--text-color);
        background-color: rgba(69, 136, 176, 0.2);
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