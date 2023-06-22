import { Link } from "react-router-dom";
import { PageNotFound } from "../assets/images";
import "../assets/css/style-notfound.css";

const UnderDestruction = () => {
  return (
    <>
      <section className="page-not-found">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 d-flex p2">
            <img src={PageNotFound} alt="" className="ms-auto" />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="wrapper">
              <h1
                className="404-title poppins-semiBold color-dark"
                style={{
                  fontSize: 64,
                }}
              >
                Page Under Destruction!
              </h1>
              <h3
                className="404-desc poppins color-subdark mb-4"
                style={{
                  fontSize: 18,
                }}
              >
                Halaman sedang dalam pengembangan, Mohon kembali beberapa saat
                lagi
              </h3>
              <Link
                to="/account/profile"
                className="bgr-alternative color-light px-3 py-2 rounded btn-notfound"
              >
                Kembali ke Profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnderDestruction;
