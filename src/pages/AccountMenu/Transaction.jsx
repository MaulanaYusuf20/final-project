import Navbar from "../../components/GlobalComponent/Navbar";
import SideBar from "../../components/GlobalComponent/SideBar";
import TransactionContent from "../../components/Transaction/TransactionContent";
import MainLayout from "../../layout/MainLayout";

const Transaction = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <section className="transaction px-3 my-5">
            <h1 className="transaction-title color-dark poppins-medium">
              Daftar Transaksi
            </h1>
            <div className="row">
              <div className="col-sm-12 col-md-9 col-lg-9">
                <TransactionContent />
              </div>
              <div className="col-sm-12 col-md-3 col-xl-3 mt-3">
                <SideBar />
              </div>
            </div>
          </section>
        </div>
        <footer className="poppins footer-profile mt-5 d-flex justify-content-center">
          Copyright © 2022 SEVA ALL RIGHT RESERVED
        </footer>
      </MainLayout>
    </>
  );
};

export default Transaction;
