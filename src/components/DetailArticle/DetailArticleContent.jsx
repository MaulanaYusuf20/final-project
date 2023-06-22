import { RightTwig, LeftTwig } from "../../assets/images";
import { Link } from "react-router-dom";

const DetailArticleContent = ({ article }) => {
  return (
    <>
      <div className="container detail-content w-50">
        {article && (
          <div className="content px-3 my-4">
            <img src={RightTwig} id="daun" />
            <div className="breadcrumb mt-4" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/article" className="link-breadcrumb">
                    Artikel
                  </Link>
                </li>
                <li
                  className="current-breadcrumb breadcrumb-item active"
                  aria-current="page"
                >
                  Pendidikan
                </li>
              </ol>
            </div>
            <img src={article.coverDetail} className="img-fluid " />
            <h2 className="title my-4">{article.title}</h2>
            {/* {ReactHtmlParser(article.articleDetail)} */}
            <div
              dangerouslySetInnerHTML={{ __html: article.articleDetail }}
            ></div>
            <img src={LeftTwig} alt="" id="ranting" />
          </div>
        )}
      </div>
    </>
  );
};

export default DetailArticleContent;
