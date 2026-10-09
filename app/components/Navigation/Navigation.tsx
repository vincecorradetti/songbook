import "./Navigation.css";
import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav className="navigation--main">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/log">Log</NavLink>
    </nav>
  );
}
