import {
  Avatar,
  BGProfile,
  JuniorLevel,
  SeniorLevel,
} from "../../assets/images";
import "../../assets/css/style-profile.css";
import { SettingIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const ProfileContent = () => {
  return (
    <>
      <div className="card card-rounded shadow-sm">
        <img src={BGProfile} className="card-img-top img-fluid bg-profile" />
        <Link
          to="/account/detailprofile"
          className="btn bgr-alternative btn-edit-profile float-right"
        >
          <div className="button-wrapper d-flex">
            <img src={SettingIcon} className="setting-icons" />
            <h3 className="button-text color-light poppins my-auto ms-2">
              Edit Profile
            </h3>
          </div>
        </Link>
        <div className="card-body d-flex flex-column align-items-center">
          <div className="image-wrapper">
            <img src={Avatar} id="avatar" className="img-fluid" />
          </div>
          <h1 className="tag-name mt-2">Maulana Yusuf</h1>
          <h3 className="campus mb-4">STMIK "AMIKBANDUNG"</h3>

          <div className="card-level card-level-sm w-75 rounded">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xl-4 p-4">
                <img
                  src={JuniorLevel}
                  alt=""
                  className="img-fluid my-3 img-profile-level"
                />
              </div>
              <div className="col-sm-8 col-md-8 col-xl-8 p-4 my-3">
                <h3 className="tagline-level ms-4">Level kamu saat ini</h3>
                <hr className="line-level" />
                <h1 className="level-status">Junior</h1>
              </div>
            </div>
          </div>

          <div className="point-status w-75 mt-3 rounded mb-4">
            <div className="row">
              <div className="col-sm-8 col-md-8 col-xl-8 p-4">
                <h3 className="tagline-level ms-4">Point kamu saat ini</h3>
                <hr className="line-level-2 ms-4" />
                <h1 className="current-point ms-4">450</h1>
                <h3 className="desc ms-4">
                  Perlu <span className="need-point">250</span> lagi untuk
                  menjadi <span className="upgrade-level">Senior</span>
                </h3>
              </div>
              <div className="col-sm-4 col-md-4 col-xl-4 p-4">
                <img
                  src={SeniorLevel}
                  alt=""
                  className="img-fluid me-3 my-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContent;
