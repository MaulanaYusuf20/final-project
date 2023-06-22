import { Link } from "react-router-dom/dist";
import "../../assets/css/style-landing.css";
import { BadgeJunior, BookIcon } from "../../assets/icons";
import {
  CSSThumbnail,
  HTMLThumbnail,
  JSThumbnail,
  LeftTwig,
} from "../../assets/images";

const CourseSection = () => {
  return (
    <>
      <section className="class mt-5">
        <div className="row">
          <h4 className="tag color-dark text-center">Kelas</h4>
          <h4 className="title color-dark text-center">Kelas Yang Populer</h4>
          <Link to="/course">
            <div className="row">
              <div className="col-md-4 mt-3">
                <div className="card-wrapper">
                  <div className="card card-thumbnail border-card shadow-sm d-flex justify-content-center align-items-center">
                    <img src={CSSThumbnail} alt="" />
                  </div>
                  <div className="card-body p-2 shadow-sm bgr-light px-2">
                    <h4 className="title-1 mx-2 color-dark">CSS Dasar</h4>
                    <div className="badge d-flex align-items-center">
                      <img src={BadgeJunior} alt="" />
                      <h4 className="badge-text color-dark ms-1 my-auto">
                        Junior
                      </h4>
                    </div>
                    <h4 className="paragraph mx-2 color-dark my-3">
                      CSS, bahasa yang digunakan untuk mengatur tampilan elemen
                      yang tertulis dalam bahasa markup.
                    </h4>
                    <div className="row">
                      <div className="col-6">
                        <div className="container bgr-secondary lesson-wrapper d-flex ms-2">
                          <img src={BookIcon} />
                          <h4 className="lesson p-2 my-auto">7 Pembelajaran</h4>
                        </div>
                      </div>
                      <div className="col-6 d-flex justify-content-end">
                        <h4 className="price-class-card color-alternative me-2 my-auto">
                          Gratis
                        </h4>
                      </div>
                    </div>
                    <div className="card-footer px-2 bgr-light mb-2">
                      <hr />
                      <button className="btn bgr-alternative btn-class color-light">
                        Selengkapnya
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mt-3">
                <div className="card-wrapper">
                  <div className="card card-thumbnail border-card shadow-sm d-flex justify-content-center align-items-center">
                    <img src={HTMLThumbnail} alt="" />
                  </div>
                  <div className="card-body p-2 shadow-sm bgr-light px-2">
                    <h4 className="title-1 mx-2 color-dark">HTML Dasar</h4>
                    <div className="badge d-flex align-items-center">
                      <img src={BadgeJunior} alt="" />
                      <h4 className="badge-text color-dark ms-1 my-auto">
                        Junior
                      </h4>
                    </div>
                    <h4 className="paragraph mx-2 color-dark my-3">
                      HTML adalah bahasa pemrograman web yang bertujuan untuk
                      membuat kerangka pada suatu website
                    </h4>
                    <div className="row">
                      <div className="col-6">
                        <div className="container bgr-secondary lesson-wrapper d-flex ms-2">
                          <img src={BookIcon} />
                          <h4 className="lesson p-2 my-auto">5 Pembelajaran</h4>
                        </div>
                      </div>
                      <div className="col-6 d-flex justify-content-end">
                        <h4 className="price-class-card color-alternative me-2 my-auto">
                          Gratis
                        </h4>
                      </div>
                    </div>
                    <div className="card-footer px-2 bgr-light mb-2">
                      <hr />
                      <button className="btn bgr-alternative btn-class color-light">
                        Selengkapnya
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mt-3">
                <div className="card-wrapper">
                  <div className="card card-thumbnail border-card shadow-sm d-flex justify-content-center align-items-center">
                    <img src={JSThumbnail} alt="" />
                  </div>
                  <div className="card-body p-2 shadow-sm bgr-light px-2">
                    <h4 className="title-1 mx-2 color-dark">
                      JavaScript Dasar
                    </h4>
                    <div className="badge d-flex align-items-center">
                      <img src={BadgeJunior} alt="" />
                      <h4 className="badge-text color-dark ms-1 my-auto">
                        Junior
                      </h4>
                    </div>
                    <h4 className="paragraph mx-2 color-dark my-3">
                      JavaScript, bahasa pemrograman yang digunakan untuk
                      membuat halaman yang interaktif
                    </h4>
                    <div className="row">
                      <div className="col-6">
                        <div className="container bgr-secondary lesson-wrapper d-flex ms-1">
                          <img src={BookIcon} />
                          <h4 className="lesson p-2 my-auto">
                            14 Pembelajaran
                          </h4>
                        </div>
                      </div>
                      <div className="col-6 d-flex justify-content-end">
                        <h4 className="price-class-card color-alternative me-2 my-auto">
                          Gratis
                        </h4>
                      </div>
                    </div>
                    <div className="card-footer px-2 bgr-light mb-2">
                      <hr />
                      <button className="btn bgr-alternative btn-class color-light">
                        Selengkapnya
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <img src={LeftTwig} alt="" className="left-twig" />
      </section>
    </>
  );
};

export default CourseSection;
