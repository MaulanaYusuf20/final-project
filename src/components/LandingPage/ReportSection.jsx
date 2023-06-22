import "../../assets/css/style-landing.css";
import { ReportChara, RightTwig } from "../../assets/images";

import { Link } from "react-router-dom";

const ReportSection = () => {
  return (
    <>
      <section className="report mt-5 px-3">
        <div className="row">
          <img
            src={RightTwig}
            alt=""
            className="right-twig img-fluid"
            width="50px"
          />
          <h4 className="tag color-dark text-center">Laporan</h4>
          <h4 className="title color-dark text-center">
            Perlindungan terhadap Perundungan
          </h4>
          <div className="bgr-primary mt-4" id="report-card">
            <div className="row">
              <div className="col-md-6 p-4 my-auto">
                <h4 className="title-2 color-light">
                  Kami ada disini untuk kamu
                </h4>
                <p className="paragraph color-sublight">
                  Sampaikan laporan perundunganmu disini, kami siap membantu
                </p>
                <Link
                  to="/form"
                  className="btn bgr-warning color-primary mt-2"
                  id="btn-report"
                  // onclick="checkLoginButton()"
                >
                  Sampaikan Laporanmu
                </Link>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 d-flex justify-content-end">
                <img src={ReportChara} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportSection;
