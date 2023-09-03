import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/css/style-sidebar.css";
import Cookies from "universal-cookie";

const SideBar = () => {
  const navigate = useNavigate();
  const signOut = () => {
    const ToolsCookies = new Cookies();
    ToolsCookies.remove("user_data", { path: "/" });
    ToolsCookies.remove("status_login", { path: "/" });

    navigate("/");
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="sidebar-wrapper rounded shadow-sm p-3">
            {/* <NavLink
              to="/underdestruction"
              className="sidebar-link d-flex my-3"
            >
              <div className="sidebar-items ms-2 ">
                <i className="fa fa-chart-line fa-fw"></i>
                <span className="ms-2">Dasboard</span>
              </div>
            </NavLink> */}
            <NavLink
              to="/account/mycourse"
              className="sidebar-link d-flex my-3"
            >
              <div className="sidebar-items ms-2">
                <i className="fa fa-chalkboard-user fa-fw"></i>
                <span className="ms-2">Kelas Saya</span>
              </div>
            </NavLink>
            <NavLink to="/account/profile" className="sidebar-link d-flex my-3">
              <div className="sidebar-items ms-2">
                <i className="fa fa-user fa-fw"></i>
                <span className="ms-2">Profile</span>
              </div>
            </NavLink>
            <NavLink
              to="/account/transaction"
              className="sidebar-link d-flex my-3"
            >
              <div className="sidebar-items ms-2 ">
                <i className="fa fa-cart-shopping fa-fw"></i>
                <span className="ms-2">Daftar Transaksi</span>
              </div>
            </NavLink>
            <NavLink to="/account/award" className="sidebar-link d-flex my-3">
              <div className="sidebar-items ms-2 ">
                <i className="fa fa-trophy fa-fw"></i>
                <span className="ms-2">Penghargaan</span>
              </div>
            </NavLink>
            <div
              className="sidebar-link d-flex my-3 cursor-pointer"
              role="button"
              onClick={() => signOut()}
            >
              <div className="sidebar-items ms-2">
                <i className="fa fa-arrow-right-from-bracket fa-fw"></i>
                <span className="ms-2">Sign-Out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
