import "../assets/css/style-article.css";
import ArticleFilter from "../components/Article/ArticleFilter";
import ArticleList from "../components/Article/ArticleList";
// import ArticlePagination from "../components/Article/ArticlePagination";
import Footer from "../components/GlobalComponent/Footer";
import Navbar from "../components/GlobalComponent/Navbar";
import MainLayout from "../layout/MainLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetArticle } from "../redux/actions/ArticleAction";

const Article = () => {
  const { dataArticle, oriDataArticle } = useSelector((state) => state.articleReducer);
  const dispatch = useDispatch();

  const updateDataArticle = (filteredData) => {
    dispatch({ type: "UPDATE_DATA_ARTICLE", payload: filteredData });
  };

  useEffect(() => {
    if (dataArticle === null) {
      dispatch(GetArticle());
    }
  }, [dispatch, dataArticle]);

  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <ArticleFilter dataArticle={oriDataArticle} updateDataArticle={updateDataArticle} />
          <ArticleList dataArticle={dataArticle} />
          {/* <ArticlePagination /> */}
        </div>
        <Footer />
      </MainLayout>
    </>
  );
};

export default Article;
