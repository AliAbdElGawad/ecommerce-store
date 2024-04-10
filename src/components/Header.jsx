import { CartItems, Nav } from "../components";
import { useCart } from "../contexts/CartContext";
import { useStore } from "../contexts/StoreContext";
import styled from "styled-components";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const { isSidebarOpen, toggleSideBar, toggleCart } = useStore();
  const { totalItems } = useCart();

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
      <div className="cart" onClick={toggleCart}>
        <FaShoppingCart />
        <span>{totalItems > 0 ? totalItems : ""}</span>
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
  .nav {
    margin-left: auto;
    ul {
      display: flex;
      list-style: none;
      @media (max-width: 767px) {
        display: none;
      }
      li {
        margin-right: 1rem;
        a {
          text-decoration: none;
          transition: 0.5s;
          font-weight: bold;
          color: inherit;
          &:hover {
            color: grey;
          }
        }
      }
    }
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
  .cart {
    padding: 5px 15px;
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid white;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
  }
`;
