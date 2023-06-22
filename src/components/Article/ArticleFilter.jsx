import "../../assets/css/style-article.css";
import { useEffect, useState } from "react";

const ArticleFilter = ({ dataArticle, updateDataArticle }) => {
  const [param, setParam] = useState(null);

  useEffect(() => {
    if (param) {
      const filteredData = dataArticle.filter(
        (item) => item.category === param
      );
      updateDataArticle(filteredData);
    } else {
      updateDataArticle(dataArticle);
    }
  }, [param, dataArticle]);

  return (
    <>
      <section id="kategori" className="kategori">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="kategori-filters">
                <li className={param === null ? "filter-active" : ""}>
                  <button
                    className="btn btn-text"
                    onClick={() => setParam(null)}
                  >
                    Semua
                  </button>
                </li>
                <li className={param === "pendidikan" ? "filter-active" : ""}>
                  <button
                    className="btn btn-text"
                    onClick={() => setParam("pendidikan")}
                  >
                    Pendidikan
                  </button>
                </li>
                <li className={param === "perlindungan" ? "filter-active" : ""}>
                  <button
                    className="btn btn-text"
                    onClick={() => setParam("perlindungan")}
                  >
                    Perlindungan
                  </button>
                </li>
                <li className={param === "keterampilan" ? "filter-active" : ""}>
                  <button
                    className="btn btn-text"
                    onClick={() => setParam("keterampilan")}
                  >
                    Keterampilan
                  </button>
                </li>
                <li className={param === "bakat" ? "filter-active" : ""}>
                  <button
                    className="btn btn-text"
                    onClick={() => setParam("bakat")}
                  >
                    Minat Bakat
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleFilter;
