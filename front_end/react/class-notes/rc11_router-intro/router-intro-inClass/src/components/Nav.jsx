import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/instructors">Instructors</Link>
      </li>
      <li>
        <NavLink href="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
