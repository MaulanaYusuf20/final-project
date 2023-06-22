import React, { useEffect, useState } from "react";
import "../assets/css/style-detailkelas.css";
import { AiFillStar } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { LuAlarmClock } from "react-icons/lu";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { TbCertificate } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import Footer from "../components/GlobalComponent/Footer";
import Navbar from "../components/GlobalComponent/Navbar";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GetCourse } from "../redux/actions/CourseAction";
import { useDispatch, useSelector } from "react-redux";

const DetailKelas = () => {
  const navigate = useNavigate();
  const { dataCourse, paymentCourseId } = useSelector(
    (state) => state.courseReducer
  );
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { param } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (dataCourse === null) {
        await dispatch(GetCourse());
      }
      const filteredItems = dataCourse.filter((item) => item.id == param);
      setData(filteredItems.length > 0 ? filteredItems[0] : null);
    };

    fetchData();
  }, [dispatch, dataCourse, param]);

  const dataDetailKelas = [
    {
      title: "Terakhir Diupdate",
      status: "-",
    },
    {
      title: "Level Kelas",
      status: "-",
    },
    {
      title: "Siswa",
      status: "-",
    },
    { title: "Bahasa", status: "-" },
  ];

  const daftarKelas = (id) => {
    dispatch({ type: "SET_COURSE_PAYMENT", payload: id });
    navigate("/payment");
  };

  return (
    <main className="bgr-body pt-4">
      <Navbar />
      {!data && <p>Loading ....</p>}
      {data && (
        <div className="container">
          <div className="row">
            <div className="col col-sm-12  col-lg-8">
              <div className="container border border-white rounded bg-white p-4 my-2">
                <div className="container fw-bold fs-3">{data.title}</div>
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col col-sm-5 col-lg-4">
                      <div
                        className="container kelas-type-wrapper rounded"
                        id="coding"
                      >
                        Kelas Coding
                      </div>
                    </div>
                    <div className="col col-sm-7 col-lg-8">
                      <div className="container">
                        5.0{" "}
                        {[...Array(5)].map((a, index) => (
                          <span key={index} style={{ color: "#f5d442" }}>
                            <AiFillStar />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    {data &&
                      dataDetailKelas.map((a, index) => (
                        <div lg={3} className="col col-lg-3 py-2" key={index}>
                          <div className="container data-kelas-wrapper rounded py-1">
                            <div>{a.title}</div>
                            <div className="fw-bold">{a.status}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="container py-2">
                  <img
                    className="rounded"
                    src="https://cdn.eraspace.com/pub/media/mageplaza/blog/post/m/e/medium.com_-1024x684.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-4">
              <div className="container border border-white rounded bg-white p-4 my-2">
                {data.price > 0 ? (
                  <div className="fw-bold">Rp. {data.price},-</div>
                ) : (
                  <div style={{ color: "#7b069c" }} className="mb-3">
                    Gratis
                  </div>
                )}
                <button
                  className="button rounded text-white btn-dftr px-3 py-2"
                  onClick={() => daftarKelas(data.id)}
                >
                  Daftar Kelas
                </button>
                <hr />
                <div className="fw-bold">Detail Kelas</div>
                <div style={{ fontSize: "0.8rem" }}>
                  <span>
                    <BiBookAdd /> {data.lessonBox}
                  </span>
                </div>
                <div style={{ fontSize: "0.8rem" }}>
                  <span>
                    <LuAlarmClock /> Dapat diakses selamanya
                  </span>
                </div>
                <div style={{ fontSize: "0.8rem" }}>
                  <span>
                    <TiPointOfInterestOutline /> Dapat 500 points
                  </span>
                </div>
                <div style={{ fontSize: "0.8rem" }}>
                  <span>
                    <TbCertificate /> Sertifikat dari penyelesaian kelas
                  </span>
                </div>
                <hr />
                <div className="fw-bold">Mentor</div>
                <div className="py-2">
                  <div className="d-flex align-items-center gap-2">
                    <div className="fs-1 d-flex">
                      <FaUserCircle />
                    </div>
                    <div style={{ fontSize: "0.8rem" }}>
                      <div>Enricho Alkalas Savaro</div>
                      <div>Mentor Skilvul</div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between pt-2">
                  <div>
                    5.0{" "}
                    {[...Array(5)].map((a, index) => (
                      <span key={index} style={{ color: "#f5d442" }}>
                        <AiFillStar />
                      </span>
                    ))}
                  </div>
                  <div style={{ fontSize: "0.8rem" }}>
                    <MdOutlineClass /> 4 Kelas
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-xs-12  col-lg-8">
              <div className="container border border-white rounded bg-white p-4 my-2">
                <div className="fw-bold fs-3">Ringkasan</div>
                <br />
                <p>{data.description}</p>

                {/* {HtmlParser(data.summary)} */}
                <div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
              </div>
              <div className="container border border-white rounded bg-white p-4 my-2">
                <div className="fw-bold fs-3">Materi yang kamu pelajari</div>

                <br />

                <ol dangerouslySetInnerHTML={{ __html: data.lesson }}></ol>
                {/* <ol>{HtmlParser(data.lesson)}</ol> */}
              </div>
              <div className="container border border-white rounded bg-white p-4 my-2">
                <div className="fw-bold fs-3">Persiapan kelas</div>

                <br />

                <ul dangerouslySetInnerHTML={{ __html: data.preparation }}></ul>
                {/* <ul>{HtmlParser(data.preparation)}</ul> */}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default DetailKelas;
