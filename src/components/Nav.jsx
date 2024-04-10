import { useStore } from "../contexts/StoreContext";
import { NavLinks } from "../utils/constants";
import { Link } from "react-router-dom";

const Nav = () => {
  const { closeSideBar } = useStore();
  return (
    <ul>
      {NavLinks.map((link, index) => (
        <li onClick={closeSideBar} key={index}>
          <Link to={link.path}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
