import styled from "styled-components";
import { Nav, OutsideClickDetector } from "../components";
import { useStore } from "../contexts/StoreContext";

// eslint-disable-next-line react/prop-types
const Sidebar = () => {
  const { isSidebarOpen, closeSideBar } = useStore();
  const handleOutsideClick = () => {
    closeSideBar();
  };

  return (
    <OutsideClickDetector onOutSideClicked={handleOutsideClick}>
      <Wrapper className={`${isSidebarOpen ? "opened" : ""}`}>
        <Nav />
      </Wrapper>
    </OutsideClickDetector>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  position: fixed;
  height: 100%;
  right: 0;
  top: 0;
  width: 200px;
  background-color: var(--third-color);
  transition: var(--transition);
  transform: translateX(100%);
  z-index: 999;
  @media (max-width: 767px) {
    &.opened {
      transform: translateX(0);
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    li {
      padding: 30px;
      a {
        font-weight: bold;
        font-size: 16px;
        text-decoration: none;
        color: var(--text-dark);
      }
    }
  }
`;
