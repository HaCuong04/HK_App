import "./Header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="title">Hệ thống quản trị ngành sợi</h1>
        <Link className="button-login" to="/login">Sign in</Link>
        <Link className="button-register" to="/register">Register</Link>
      </div>
    </header>
  );
}

export default Header;
