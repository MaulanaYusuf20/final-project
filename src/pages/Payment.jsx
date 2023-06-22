import { useNavigate } from "react-router-dom";
import Footer from "../components/GlobalComponent/Footer";
import Navbar from "../components/GlobalComponent/Navbar";
import CardCourse from "../components/Payment/CardCourse";
import Checkout from "../components/Payment/Checkout";
import PaymentMethod from "../components/Payment/PaymentMethod";
import MainLayout from "../layout/MainLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";

const Payment = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const { dataCourse, paymentCourseId } = useSelector(
    (state) => state.courseReducer
  );
  const navigate = useNavigate();
  const ToolsCookies = new Cookies();
  const StatusLogin = ToolsCookies.get("status_login");

  useEffect(() => {
    if (!StatusLogin || StatusLogin == undefined) {
      navigate("/sign-in");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      const filteredItems = dataCourse.filter(
        (item) => item.id == paymentCourseId
      );
      setData(filteredItems.length > 0 ? filteredItems[0] : null);
    };

    fetchData();
  }, [dispatch, dataCourse, paymentCourseId]);
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <section className="payment mt-3 px-3">
            <div className="row">
              <div className="col-sm-12 col-md-8 col-xl-8">
                <h1 className="title poppins-medium">Pembayaran</h1>
                <CardCourse data={data} />
                <PaymentMethod />
              </div>
              <div className="col-sm-12 col-md-4 col-xl-4 mt-5">
                <Checkout data={data} />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </MainLayout>
    </>
  );
};

export default Payment;
