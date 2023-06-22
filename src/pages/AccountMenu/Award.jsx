import Navbar from "../../components/GlobalComponent/Navbar";
import SideBar from "../../components/GlobalComponent/SideBar";
import AwardContent from "../../components/Award/AwardContent";
import MainLayout from "../../layout/MainLayout";

const Award = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <section className="award">
            <Navbar />
            <div className="container px-3 mt-5">
              <h1 className="title">Penghargaan</h1>
              <div className="row mt-4">
                <div className="col-sm-12 col-md-9 col-xl-9">
                  <AwardContent />
                </div>
                <div className="col-sm-12 col-md-3 col-xl-3">
                  <SideBar />
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="poppins footer-profile mt-5 d-flex justify-content-center">Copyright © 2022 SEVA ALL RIGHT RESERVED</footer>
      </MainLayout>
    </>
  );
};

export default Award;
