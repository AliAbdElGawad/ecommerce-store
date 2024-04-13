import { HeroSection, Button } from "../components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AboutImg from "../assets/images/undraw_remote_team_re_ck1y.svg";
const About = () => {
  return (
    <section className="content">
      <HeroSection title={"About"} />
      <Wrapper>
        <div className="img">
          <img src={AboutImg} alt="hero" />
        </div>
        <div className="text">
          <h1>About our Store!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            quod? Voluptates dolorum eaque voluptatibus natus accusantium fuga
          </p>
          <Link to="/products">
            <Button>Shop now</Button>
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100dvh - 60px);
  padding: 2rem;
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
      padding-bottom: 2rem;
    }
    p {
      line-height: 1.4;
      color: #7d8285;
      padding-bottom: 2rem;
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
        background-color: var(--primary-color);
      }
    }
  }
  .img {
    display: grid;
    place-items: center;
    flex: 1;
    img {
      max-width: 100%;
    }
  }
`;
export default About;
