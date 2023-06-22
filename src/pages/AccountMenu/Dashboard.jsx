import Navbar from "../../components/GlobalComponent/Navbar";
import SideBar from "../../components/GlobalComponent/SideBar";
import MainLayout from "../../layout/MainLayout";
import "../../assets/css/style-dashboard.css";

const Dashboard = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <section className="profile">
            <Navbar />
            <div className="row">
              <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 px-3">
                <h1 className="title poppins-medium">Dashboard</h1>
                <section className="complete-course bgr-light shadow-sm rounded p-4 d-flex justify-content-between ">
                  <div className="col-md-3">
                    <div
                      className="card dashboard-1 d-flex flex-row py-0 px-3"
                      style={{ width: "180px" }}
                    >
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="#096CC8"
                        xmlns="http://www.w3.org/2000/svg"
                        className="my-auto"
                      >
                        <path
                          d="M11.3008 10.175V7C11.3008 6.71667 11.2048 6.479 11.0128 6.287C10.8208 6.095 10.5834 5.99933 10.3008 6C10.0174 6 9.77978 6.096 9.58778 6.288C9.39578 6.48 9.30011 6.71733 9.30078 7V10C9.30078 10.3333 9.35911 10.6417 9.47578 10.925C9.59245 11.2083 9.76745 11.4667 10.0008 11.7L12.1258 13.825C12.3258 14.025 12.5634 14.125 12.8388 14.125C13.1141 14.125 13.3514 14.025 13.5508 13.825C13.7341 13.625 13.8258 13.3873 13.8258 13.112C13.8258 12.8367 13.7341 12.6077 13.5508 12.425L11.3008 10.175ZM10.3008 2C10.0174 2 9.77978 2.096 9.58778 2.288C9.39578 2.48 9.30011 2.71733 9.30078 3C9.30078 3.28333 9.39678 3.521 9.58878 3.713C9.78078 3.905 10.0181 4.00067 10.3008 4C10.5841 4 10.8218 3.904 11.0138 3.712C11.2058 3.52 11.3014 3.28267 11.3008 3C11.3008 2.71667 11.2048 2.479 11.0128 2.287C10.8208 2.095 10.5834 1.99933 10.3008 2ZM18.3008 10C18.3008 9.71667 18.2048 9.479 18.0128 9.287C17.8208 9.095 17.5834 8.99933 17.3008 9C17.0174 9 16.7798 9.096 16.5878 9.288C16.3958 9.48 16.3001 9.71733 16.3008 10C16.3008 10.2833 16.3968 10.521 16.5888 10.713C16.7808 10.905 17.0181 11.0007 17.3008 11C17.5841 11 17.8218 10.904 18.0138 10.712C18.2058 10.52 18.3014 10.2827 18.3008 10ZM10.3008 16C10.0174 16 9.77978 16.096 9.58778 16.288C9.39578 16.48 9.30011 16.7173 9.30078 17C9.30078 17.2833 9.39678 17.521 9.58878 17.713C9.78078 17.905 10.0181 18.0007 10.3008 18C10.5841 18 10.8218 17.904 11.0138 17.712C11.2058 17.52 11.3014 17.2827 11.3008 17C11.3008 16.7167 11.2048 16.479 11.0128 16.287C10.8208 16.095 10.5834 15.9993 10.3008 16ZM4.30078 10C4.30078 9.71667 4.20478 9.479 4.01278 9.287C3.82078 9.095 3.58345 8.99933 3.30078 9C3.01745 9 2.77978 9.096 2.58778 9.288C2.39578 9.48 2.30011 9.71733 2.30078 10C2.30078 10.2833 2.39678 10.521 2.58878 10.713C2.78078 10.905 3.01811 11.0007 3.30078 11C3.58411 11 3.82178 10.904 4.01378 10.712C4.20578 10.52 4.30145 10.2827 4.30078 10ZM10.3008 20C8.91745 20 7.61745 19.7373 6.40078 19.212C5.18411 18.6867 4.12578 17.9743 3.22578 17.075C2.32578 16.175 1.61345 15.1167 1.08878 13.9C0.564115 12.6833 0.301448 11.3833 0.300781 10C0.300781 8.61667 0.563448 7.31667 1.08878 6.1C1.61411 4.88333 2.32645 3.825 3.22578 2.925C4.12578 2.025 5.18411 1.31267 6.40078 0.788C7.61745 0.263333 8.91745 0.000666667 10.3008 0C11.6841 0 12.9841 0.262667 14.2008 0.788C15.4174 1.31333 16.4758 2.02567 17.3758 2.925C18.2758 3.825 18.9884 4.88333 19.5138 6.1C20.0391 7.31667 20.3014 8.61667 20.3008 10C20.3008 11.3833 20.0381 12.6833 19.5128 13.9C18.9874 15.1167 18.2751 16.175 17.3758 17.075C16.4758 17.975 15.4174 18.6877 14.2008 19.213C12.9841 19.7383 11.6841 20.0007 10.3008 20Z"
                          fill="#096CC8"
                        />
                      </svg>
                      <div className="card-body card-body-sm py-0 tex-center mt-2">
                        <h5 className="title color-subdark">Dikerjakan</h5>
                        <p className="title poppins-medium color-dark">
                          2 Kelas
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div
                      className="card dashboard-2 d-flex flex-row py-0 px-3"
                      style={{ width: "180px" }}
                    >
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="my-auto"
                      >
                        <path
                          d="M7.37539 12.475C8.549 13.6486 10.4518 13.6486 11.6254 12.475L15.8504 8.25C16.237 7.8634 16.237 7.2366 15.8504 6.85C15.4638 6.4634 14.837 6.4634 14.4504 6.85L10.9254 10.375C10.1384 11.162 8.8624 11.162 8.07539 10.375L7.35039 9.65C6.96379 9.2634 6.33699 9.2634 5.95039 9.65C5.56379 10.0366 5.56379 10.6634 5.95039 11.05L7.37539 12.475ZM10.9004 20C9.51706 20 8.21706 19.7373 7.00039 19.212C5.78372 18.6867 4.72539 17.9743 3.82539 17.075C2.92539 16.175 2.21306 15.1167 1.68839 13.9C1.16372 12.6833 0.901057 11.3833 0.900391 10C0.900391 8.61667 1.16306 7.31667 1.68839 6.1C2.21372 4.88333 2.92606 3.825 3.82539 2.925C4.72539 2.025 5.78372 1.31267 7.00039 0.788C8.21706 0.263333 9.51706 0.000666667 10.9004 0C12.2837 0 13.5837 0.262667 14.8004 0.788C16.0171 1.31333 17.0754 2.02567 17.9754 2.925C18.8754 3.825 19.5881 4.88333 20.1134 6.1C20.6387 7.31667 20.9011 8.61667 20.9004 10C20.9004 11.3833 20.6377 12.6833 20.1124 13.9C19.5871 15.1167 18.8747 16.175 17.9754 17.075C17.0754 17.975 16.0171 18.6877 14.8004 19.213C13.5837 19.7383 12.2837 20.0007 10.9004 20Z"
                          fill="#288914"
                        />
                      </svg>
                      <div className="card-body card-body-sm py-0 tex-center mt-2">
                        <h5 className="title color-subdark">Selesai</h5>
                        <p className="title poppins-medium color-dark">
                          2 Kelas
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div
                      className="card dashboard-3 d-flex flex-row py-0 px-3"
                      style={{ width: "180px" }}
                    >
                      <svg
                        width="25"
                        height="18"
                        viewBox="0 0 25 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="my-auto"
                      >
                        <path
                          d="M13.2231 17.6666H2.38976C2.00667 17.6666 1.63927 17.5145 1.36838 17.2436C1.09749 16.9727 0.945313 16.6053 0.945312 16.2222V1.77776C0.945312 1.39467 1.09749 1.02727 1.36838 0.756381C1.63927 0.485495 2.00667 0.333313 2.38976 0.333313H22.612C22.9951 0.333313 23.3625 0.485495 23.6334 0.756381C23.9042 1.02727 24.0564 1.39467 24.0564 1.77776V9.2672C23.0943 8.04176 21.6947 7.23681 20.1516 7.02141C18.6085 6.80601 17.042 7.19691 15.7811 8.11203C14.5201 9.02714 13.6628 10.3953 13.3892 11.9291C13.1155 13.4629 13.4469 15.0431 14.3136 16.3378L13.642 17.1611L13.2231 17.6666ZM4.55642 4.66665V5.8222H16.8342V4.66665H4.55642ZM4.55642 8.71109H12.5009V7.55554H4.55642V8.71109ZM4.55642 13.7666H11.7786V12.6111H4.55642V13.7666Z"
                          fill="#C60077"
                        />
                      </svg>
                      <div className="card-body card-body-sm py-0 tex-center mt-2">
                        <h5 className="title color-subdark">Sertifikat</h5>
                        <p className="title poppins-medium color-dark">
                          2 Kelas
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="card dashboard-4 d-flex flex-row py-0 px-3"
                      style={{ width: "180px" }}
                    >
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="my-auto"
                      >
                        <path
                          d="M0.701172 5V3H2.92339V2C2.92339 1.46957 3.15752 0.960859 3.57427 0.585786C3.99102 0.210714 4.55625 0 5.14562 0H11.8123V7L14.5901 5.5L17.3678 7V0H18.479C19.6456 0 20.7012 0.95 20.7012 2V18C20.7012 19.05 19.6456 20 18.479 20H5.14562C3.97895 20 2.92339 19.05 2.92339 18V17H0.701172V15H2.92339V11H0.701172V9H2.92339V5H0.701172ZM5.14562 9H2.92339V11H5.14562V9ZM5.14562 5V3H2.92339V5H5.14562ZM5.14562 17V15H2.92339V17H5.14562Z"
                          fill="#3E37A9"
                        />
                      </svg>
                      <div className="card-body card-body-sm py-0 tex-center mt-2">
                        <h5 className="title color-subdark">Kelas</h5>
                        <p className="title poppins-medium color-dark">
                          2 Kelas
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="col-12 py-2">
                  <section className="complete-course bgr-light shadow-sm rounded p-4">
                    <h1 className="header-complete-course mb-3">
                      Aktifitas Belajar
                    </h1>
                    <div className="line-chart-1">
                      <Activity />
                    </div>
                  </section>
                </div>
                <div className="col-12 py-2">
                  <section className="complete-course bgr-light shadow-sm rounded p-4">
                    <h1 className="header-complete-course mb-3">
                      Hasil Belajar
                    </h1>
                  </section>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mt-5">
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

export default Dashboard;
