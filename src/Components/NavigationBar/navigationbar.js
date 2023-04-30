import "./navigationbar.css";
import { Link } from "react-router-dom";
export default function NavigationBar() {
  return (
    <div className="header-container">
      <Link to="/" className="items">
        {" "}
        Logo
      </Link>
      <div className="links">
        <Link to="/home" className="items">
          Home
        </Link>
        <Link to="/account" className="items">
          Cart
        </Link>
      </div>
    </div>
  );
}
