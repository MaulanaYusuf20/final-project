import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import Register from "../../pages/Register";
import Course from "../../pages/Course";
import About from "../../pages/About";
import Article from "../../pages/Article";
import Login from "../../pages/Login";
import Payment from "../../pages/Payment";
import Form from "../../pages/Form";
import DetailKelas from "../../pages/DetailKelas";
import DetailArticle from "../../pages/DetailArticle";
import Dashboard from "../../pages/AccountMenu/Dashboard";
import MyCourse from "../../pages/AccountMenu/MyCourse";
import Profile from "../../pages/AccountMenu/Profile";
import Transaction from "../../pages/AccountMenu/Transaction";
import Award from "../../pages/AccountMenu/Award";
import NotFound from "../../pages/NotFound";
import DetailProfile from "../../pages/DetailProfile";
import JoinCourse from "../../pages/JoinCourse";
import UnderDestruction from "../../pages/UnderDestruction";

const Router = () => {
  return (
    <>
      <Routes>
        {/* ========= Navbar ========= */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/form" element={<Form />} />
        <Route path="/joincourse" element={<JoinCourse />} />
        <Route path="/course/detailcourse/:param" element={<DetailKelas />} />
        <Route
          path="/article/detailarticle/:param"
          element={<DetailArticle />}
        />
        {/* ========= Sidebar ========= */}
        <Route path="/account/dashboard" element={<Dashboard />} />
        <Route path="/account/mycourse" element={<MyCourse />} />
        <Route path="/account/transaction" element={<Transaction />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/award" element={<Award />} />
        <Route path="/account/detailprofile" element={<DetailProfile />} />
        {/* ====== 404 NotFound ======= */}
        <Route path="*" element={<NotFound />} />
        <Route path="underdestruction" element={<UnderDestruction />} />
      </Routes>
    </>
  );
};

export default Router;
