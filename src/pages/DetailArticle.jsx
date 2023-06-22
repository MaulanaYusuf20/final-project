import "../assets/css/style-detailartikel.css";

import MainLayout from "../layout/MainLayout";
import Navbar from "../components/GlobalComponent/Navbar";
import Footer from "../components/GlobalComponent/Footer";
import DetailArticleContent from "../components/DetailArticle/DetailArticleContent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetArticle } from "../redux/actions/ArticleAction";

const DetailArticle = () => {
  const { dataArticle } = useSelector((state) => state.articleReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { param } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (dataArticle === null) {
        await dispatch(GetArticle());
      }
      const filteredItems = dataArticle.filter((item) => item.id == param);
      setData(filteredItems.length > 0 ? filteredItems[0] : null);
    };

    fetchData();
  }, [dispatch, dataArticle, param]);

  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
        </div>
        <DetailArticleContent article={data} />
        <Footer />
      </MainLayout>
    </>
  );
};

export default DetailArticle;
