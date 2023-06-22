import Navbar from "../../components/GlobalComponent/Navbar";
import SideBar from "../../components/GlobalComponent/SideBar";
import ProfileContent from "../../components/Profile/ProfileContent";
import MainLayout from "../../layout/MainLayout";

const Profile = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <section className="profile">
            <Navbar />
            <div className="container mt-5">
              <div className="row col-rev">
                <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
                  <h1 className="title poppins-medium">Profile Saya</h1>
                  <ProfileContent />
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 my-5">
                  <SideBar />
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="poppins footer-profile mt-5 d-flex justify-content-center">
          Copyright © 2022 SEVA ALL RIGHT RESERVED
        </footer>
      </MainLayout>
    </>
  );
};

export default Profile;
