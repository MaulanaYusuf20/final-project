import { RightTwig, LeftTwig } from "../../assets/images";
import { Link } from "react-router-dom";

const ArticleList = ({ dataArticle }) => {
  return (
    <>
      <img src={RightTwig} alt="" className="right-twig" />
      <section className=" artikel-list mt-5">
        {dataArticle && (
          <div className="row g-3">
            {dataArticle.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <Link to={`/article/detailarticle/${item.id}`}>
                  <div className="card card-article">
                    <img src={item.thumbnail} alt="" />
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div className="kategori-wrapper d-flex ms-1">
                            <img src={item.badgeStatus} className="img-fluid" />
                          </div>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                          <span className="date me-1 my-auto">{item.date}</span>
                        </div>
                      </div>
                      <h5 className="card-titleArticle pt-3 mx-1 color-dark">
                        {item.title}
                        {/* <a href="/pages/detail-artikel.html" className="view color-dark"></a> */}
                      </h5>
                      <p className="card-text mx-1 color-dark my-3">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
      <img src={LeftTwig} alt="" className="left-twig" />
    </>
  );
};

export default ArticleList;
