import { Link } from "react-router-dom";

const CourseList = ({ dataCourse }) => {
  return (
    <>
      <section className="course-list">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-12">
            {dataCourse && (
              <div className="row">
                {dataCourse.map((item, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <Link to={`/course/detailcourse/${item.id}`}>
                      <div className="card-wrapper">
                        <div className="card card-thumbnail border-card shadow-sm d-flex justify-content-center align-items-center">
                          <img
                            src={item.thumbnail}
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="card-body p-2 shadow-sm bgr-light px-2">
                          <h4 className="title-1 mx-2 color-dark">
                            {item.title}
                          </h4>
                          <div className="badge d-flex align-items-center">
                            <img src={item.badgeLevel} alt="" />
                            <h4 className="badge-text color-dark ms-1 my-auto">
                              {item.badgeText}
                            </h4>
                          </div>
                          <h4 className="paragraph mx-2 color-dark my-3">
                            {item.description}
                          </h4>
                          <div className="row">
                            <div className="col-6">
                              <div className="container bgr-secondary lesson-wrapper d-flex ms-1">
                                <i className="fa fa-book my-auto"></i>
                                <h4 className="lesson p-2 my-auto">
                                  {item.lessonBox}
                                </h4>
                              </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <h4 className="price-class-card color-alternative me-2 my-auto">
                                {item.price < 1
                                  ? "Gratis"
                                  : "Rp. " + item.price}
                              </h4>
                            </div>
                          </div>
                          <div className="card-footer px-2 bgr-light mb-2">
                            <hr />
                            <Link
                              to={"/course/detailcourse/" + item.id}
                              className="btn bgr-alternative btn-class color-light"
                            >
                              Selengkapnya
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseList;
