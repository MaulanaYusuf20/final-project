import Navbar from "../components/GlobalComponent/Navbar";
import React, { useState } from "react";
import "../assets/css/style-detailprofile.css";
import { FaUserTag, FaUser, FaSignOutAlt } from "react-icons/fa";
import ProfileName from "../components/DetailProfile/ProfileName";
import ChangePassword from "../components/DetailProfile/ChangePassword";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
function DetailProfile() {
  const ToolsCookies = new Cookies();
  const StatusLogin = ToolsCookies.get("status_login");
  const DataUser = ToolsCookies.get("user_data");
  const [TabIdx, setTabIdx] = React.useState(0);
  const [refreshNavbar, setRefreshNavbar] = useState(false);

  // Function to handle the refresh
  const handleRefreshNavbar = () => {
    setRefreshNavbar(!refreshNavbar);
  };

  return (
    <main className="bgr-body pt-4">
      <Navbar refresh={setRefreshNavbar} />
      <div className="container">
        <div className="fw-bold fs-2 py-4">
          {TabIdx === 0 ? "Detail Profile" : "Akun"}
        </div>
        <div className="d-flex gap-4 flex-lg-row flex-column-reverse">
          <div className="col col-sm-12  col-lg-8">
            {TabIdx === 0 ? (
              <ProfileName
                data={DataUser}
                cookie={ToolsCookies}
                onProfileUpdate={handleRefreshNavbar}
              />
            ) : TabIdx === 1 ? (
              <ChangePassword />
            ) : (
              <div />
            )}
          </div>
          <div className="col col-sm-12 col-lg-4">
            <div className=" shadow border border-white rounded bg-white p-4 my-2 d-flex flex-lg-column justify-content-center">
              <div
                className={`fw-bold dtl pointer poppins  ${
                  TabIdx === 0 ? "active" : ""
                }`}
                onClick={() => setTabIdx(0)}
                role="button"
              >
                <FaUser /> Detail Profile
              </div>
              {/* <div
                className={`fw-bold dtl poppins  ${
                  TabIdx === 1 ? "active" : ""
                }`}
                onClick={() => setTabIdx(1)}
                role="button"
              >
                <FaUserTag /> Akun
              </div> */}
              <div
                className={`fw-bold dtl poppins  ${
                  TabIdx === 2 ? "active" : ""
                }`}
                onClick={() => setTabIdx(2)}
                role="button"
              >
                <Link to="/account/profile">
                  <FaSignOutAlt /> Kembali{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-4 poppins-medium">
          Copyright © 2022 SEVA ALL RIGHTS RESERVED
        </div>
      </div>
    </main>
  );
}

export default DetailProfile;
