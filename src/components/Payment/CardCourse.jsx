import "../../assets/css/style-payment.css";

const CardCourse = ({ data }) => {
  return (
    <>
      <div className="card-wrapper p-3 shadow-sm rounded bgr-light">
        {data && (
          <div className="row">
            <div className="col-sm-12 col-md-3 col-xl-3">
              <img
                src={data.thumbnail}
                className="img-fluid align-items-center rounded"
              />
            </div>
            <div className="col-sm-12 col-md-8 col-xl-8">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button poppins-medium collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      {data.title}
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    {/* <div className="accordion-body poppins-light">
                      {HtmlParser(data.summary)}
                    </div> */}
                    <div
                      dangerouslySetInnerHTML={{ __html: data.summary }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardCourse;
