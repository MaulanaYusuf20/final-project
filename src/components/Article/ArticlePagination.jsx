import "../../assets/css/style-article.css";

const ArticlePagination = () => {
  return (
    <>
      <nav className="page-navigation" aria-label="Page-navigation">
        <ul className="pagination justify-content-center mt-3">
          <li className="page-item disabled">
            <a className="page-link">Sebelumnya</a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#" style="background-color: #3e37a9">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link color-alternative" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link color-alternative" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link color-alternative" href="#">
              Selanjutnya
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ArticlePagination;
