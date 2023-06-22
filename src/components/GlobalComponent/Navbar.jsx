import { Link, NavLink } from "react-router-dom";
import "../../assets/css/style-navbar.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "universal-cookie";

const Navbar = () => {
  const ToolsCookies = new Cookies();
  const Store = useSelector((state) => state);
  const StatusLogin = ToolsCookies.get("status_login");
  const DataUser = ToolsCookies.get("user_data");

  useEffect(function () {
    const btnUser = document.getElementById("btnUser");
    const btnLogin = document.getElementById("btnLogin");

    let users = Store.userReducer;
  }, []);

  return (
    <>
      <header className="section-header">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink to="/">
                  <img
                    src="https://i.ibb.co/Qn7fNyZ/Logo.png"
                    alt="Logo"
                    className="d-inline-block align-text-top"
                  />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item mx-2 ms-5">
                      <NavLink to="/" className="navlink">
                        Beranda
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink to="/course" className="navlink">
                        Kelas
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                      <NavLink to="/article" className="navlink">
                        Artikel
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink to="/about" className="navlink">
                        Tentang Kami
                      </NavLink>
                    </li>
                  </ul>
                  {StatusLogin == undefined && (
                    <div
                      className={`btn-wrapper mx-auto d-flex align-items-center me-2 "
                    `}
                      id="btnLogin"
                    >
                      <div className="btn btn-signin">
                        <Link to="/sign-in" className="navlink">
                          SignIn
                        </Link>
                      </div>
                      <Link
                        to="/sign-up"
                        className="btn btn-signup bgr-alternative color-light rounded"
                      >
                        SignUp
                      </Link>
                    </div>
                  )}
                  {StatusLogin && (
                    <div
                      className={`btn-wrapper-2 mx-auto d-flex align-items-center poppins-medium me-2 btn-wrapper-none" 
                    `}
                      id="btnUser"
                    >
                      <Link
                        to="/account/profile"
                        className="btn btn-profile bgr-alternative color-light rounded"
                        id="btn-profile"
                      >
                        <img
                          src={DataUser.img}
                          className="img-fluid me-2"
                          width="30"
                        />
                        <span>{DataUser.name}</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
