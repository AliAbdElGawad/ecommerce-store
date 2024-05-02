import { NavLink } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import { NavLinks } from "../utils/constants";
import styled from "styled-components";

const Nav = () => {
  const { closeSideBar } = useStore();

  return (
    <Wrapper>
      {NavLinks.map((link, index) => (
        <li onClick={closeSideBar} key={index}>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={link.path}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media (max-width: 767px) {
    display: none;
  }
  li {
    margin-right: 1rem;
    a {
      transition: var(--transition);
      &.active {
        color: var(--third-color);
        border-bottom: 1px solid var(--third-color);
      }
    }
  }
`;
export default Nav;
