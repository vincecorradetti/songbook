import "./Navigation.css";
import { Link } from "react-router";

export default function Navigation() {
  return (
    <nav className="navigation--main">
      <Link to="/">Home</Link>
      <Link to="/scrapbook">Scrapbook</Link>
    </nav>
  );
}
