import { Link } from "react-router-dom";
import { PageNotFound } from "../assets/images";
import "../assets/css/style-notfound.css";

const NotFound = () => {
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
                404 Not Found
              </h1>
              <h3
                className="404-desc poppins color-subdark mb-4"
                style={{
                  fontSize: 18,
                }}
              >
                Halaman tidak ditemukan, coba lagi atau kembali ke halaman
                beranda
              </h3>
              <Link
                to="/"
                className="bgr-alternative color-light px-3 py-2 rounded btn-notfound"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
