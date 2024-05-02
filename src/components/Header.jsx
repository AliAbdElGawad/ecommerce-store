import { CartItems, Nav } from "../components";
import { useCart } from "../contexts/CartContext";
import { useStore } from "../contexts/StoreContext";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { RiLoginCircleLine } from "react-icons/ri";

const Header = () => {
  const { isSidebarOpen, toggleSideBar, toggleCart } = useStore();
  const { totalItems } = useCart();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Wrapper className="container">
      <div className="logo">
        <h2>
          Owl <span>Store</span>
        </h2>
      </div>
      <div className="nav">
        <div className="bars" onClick={() => toggleSideBar()}>
          {!isSidebarOpen ? <FaBars /> : <RxCross1 />}
        </div>
        <Nav />
      </div>
      <div className="profile-cart">
        <div className="cart" onClick={toggleCart}>
          <FaShoppingCart />
          <span>{totalItems > 0 ? totalItems : ""}</span>
        </div>
        <div className="profile">
          {isAuthenticated ? (
            <RiLoginCircleLine className="icons" onClick={() => logout()} />
          ) : (
            <CgProfile className="icons" onClick={() => loginWithRedirect()} />
          )}
        </div>
      </div>
      <CartItems />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 10px;
  height: 60px;
  z-index: 999;
  .nav {
    margin: 0 auto;
    .bars {
      display: none;
      cursor: pointer;
      font-size: 24px;
      font-weight: bold;
      margin-right: 10px;
      @media (max-width: 767px) {
        display: block;
      }
    }
  }
  .profile-cart {
    display: flex;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    .profile {
      height: 36px;
    }
    .cart {
      display: flex;
      padding: 0 5px;
      align-items: center;
      width: 55px;
      height: 36px;
      gap: 5px;
      border: var(--border);
      border-color: var(--third-color);
      border-radius: var(--radius);
      color: var(--third-color);
      cursor: pointer;
      span {
        margin: 0 auto;
      }
    }
  }
`;
