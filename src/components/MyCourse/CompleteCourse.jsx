import { CompleteHTML } from "../../assets/images";
import "../../assets/css/style-mycourse.css";
import { Link } from "react-router-dom";
import { Point } from "../../assets/icons";

const CompleteCourse = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 px-3 py-2">
          <section className="complete-course bgr-light shadow-sm rounded p-4">
            <h1 className="header-complete-course mb-3">
              Kelas yang sudah selesai
            </h1>
            <div className="card-complete-wrapper d-flex justify-content-center">
              <div className="card-complete-course p-5 w-75">
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <img src={CompleteHTML} alt="" />
                  </div>
                  <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <h1 className="complete-course-title">HTML Dasar</h1>
                    <h3 className="complete-course-subtitle">Junior</h3>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        100%
                      </div>
                    </div>
                    <Link
                      to="*"
                      className="btn-certificate bgr-alternative px-3 py-2 color-light rounded"
                    >
                      Unduh Sertifikat
                    </Link>
                    <div className="point-increse d-flex justify-content-end">
                      <h6 className="point-text color-light my-auto">+ 500</h6>
                      <img src={Point} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CompleteCourse;
