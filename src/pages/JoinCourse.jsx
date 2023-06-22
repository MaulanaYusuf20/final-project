import { useState } from "react";
import Navbar from "../components/GlobalComponent/Navbar";
import MainLayout from "../layout/MainLayout";
import "../assets/css/style-joincourse.css";
import Footer from "../components/GlobalComponent/Footer";

const JoinCourse = () => {
  const [activeAccordion, setActiveAccordion] = useState("");
  const handleAccordionClick = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? "" : accordionId);
  };
  return (
    <>
      <MainLayout>
        <div className="container">
          <section className="join-class">
            <Navbar />
            <div className="row">
              <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mt-5 px-3">
                <section className="list-course">
                  <div className="list-course-wrapper bgr-light shadow-sm rounded p-4">
                    <h3 className="title poppins-medium mb-2">Daftar Materi</h3>

                    <div className="accordion my-3" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ${
                              activeAccordion === "accordionOne"
                                ? ""
                                : "collapsed"
                            }`}
                            type="button"
                            onClick={() => handleAccordionClick("accordionOne")}
                          >
                            <div className="button-wrapper">
                              <h5 className="headers poppins-medium">
                                Struktur Dokumen HTML
                              </h5>
                              <h6 className="headers poppins">5 Slide</h6>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className={`accordion-collapse collapse ${
                            activeAccordion === "accordionOne" ? "show" : ""
                          }`}
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body bgr-body">
                            <div className="button-wrapper d-flex justify-content-end">
                              <button className="btn btn-outline-joincourse mx-2">
                                Quiz
                              </button>
                              <button className="btn btn-joincourse bgr-alternative">
                                Mulai Belajar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion my-3" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className={`accordion-button ${
                              activeAccordion === "accordionTwo"
                                ? ""
                                : "collapsed"
                            }`}
                            type="button"
                            onClick={() => handleAccordionClick("accordionTwo")}
                          >
                            <div className="button-wrapper">
                              <h5 className="headers poppins-medium">
                                Menu dan Isi Halaman
                              </h5>
                              <h6 className="headers poppins">25 Slide</h6>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className={`accordion-collapse collapse ${
                            activeAccordion === "accordionTwo" ? "show" : ""
                          }`}
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body bgr-body">
                            <div className="button-wrapper d-flex justify-content-end">
                              <button className="btn btn-outline-joincourse mx-2">
                                Quiz
                              </button>
                              <button className="btn btn-joincourse bgr-alternative">
                                Mulai Belajar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion my-3" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className={`accordion-button ${
                              activeAccordion === "accordionThree"
                                ? ""
                                : "collapsed"
                            }`}
                            type="button"
                            onClick={() =>
                              handleAccordionClick("accordionThree")
                            }
                          >
                            <div className="button-wrapper">
                              <h5 className="headers poppins-medium">
                                Tabel dalam html
                              </h5>
                              <h6 className="headers poppins">18 Slide</h6>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className={`accordion-collapse collapse ${
                            activeAccordion === "accordionThree" ? "show" : ""
                          }`}
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body bgr-body">
                            <div className="button-wrapper d-flex justify-content-end">
                              <button className="btn btn-outline-joincourse mx-2">
                                Quiz
                              </button>
                              <button className="btn btn-joincourse bgr-alternative">
                                Mulai Belajar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion my-3" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className={`accordion-button ${
                              activeAccordion === "accordionFour"
                                ? ""
                                : "collapsed"
                            }`}
                            type="button"
                            onClick={() =>
                              handleAccordionClick("accordionFour")
                            }
                          >
                            <div className="button-wrapper">
                              <h5 className="headers poppins-medium">
                                Formulir dalam HTML
                              </h5>
                              <h6 className="headers poppins">20 Slide</h6>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className={`accordion-collapse collapse ${
                            activeAccordion === "accordionFour" ? "show" : ""
                          }`}
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body bgr-body">
                            <div className="button-wrapper d-flex justify-content-end">
                              <button className="btn btn-outline-joincourse mx-2">
                                Quiz
                              </button>
                              <button className="btn btn-joincourse bgr-alternative">
                                Mulai Belajar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion my-3" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className={`accordion-button ${
                              activeAccordion === "accordionFive"
                                ? ""
                                : "collapsed"
                            }`}
                            type="button"
                            onClick={() =>
                              handleAccordionClick("accordionFive")
                            }
                          >
                            <div className="button-wrapper">
                              <h5 className="headers poppins-medium">
                                Layout Website
                              </h5>
                              <h6 className="headers poppins">18 Slide</h6>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className={`accordion-collapse collapse ${
                            activeAccordion === "accordionFive" ? "show" : ""
                          }`}
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body bgr-body">
                            <div className="button-wrapper d-flex justify-content-end">
                              <button className="btn btn-outline-joincourse mx-2">
                                Quiz
                              </button>
                              <button className="btn btn-joincourse bgr-alternative">
                                Mulai Belajar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mt-5 px-3">
                <section className="preparation">
                  <div className="preparation-wrapper bgr-light shadow-sm rounded p-4">
                    <h3 className="title poppins-medium">Persiapan Kelas</h3>
                    <ul>
                      <li className="poppins">
                        Gunakan komputer atau laptop dengan koneksi internet
                        yang stabil
                      </li>
                      <li className="poppins">
                        Install web browser (disarankan menggunakan Chrome)
                      </li>
                      <li className="poppins">
                        Sistem operasi (Windows, Linux, MacOS)
                      </li>
                      <li className="poppins">Minimal RAM 1 GB</li>
                      <li className="poppins">
                        Menginstall text editor (VScode)
                      </li>
                      <li className="poppins">
                        Processor Intel Celeron (rekomendasi Core i3 ke atas)
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </MainLayout>
    </>
  );
};

export default JoinCourse;