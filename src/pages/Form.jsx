import "../assets/css/style-laporan.css";
import Navbar from "../components/GlobalComponent/Navbar";
import Footer from "../components/GlobalComponent/Footer";
import MainLayout from "../layout/MainLayout";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { ReportPOST } from "../redux/actions/ReportAction";

const Form = () => {
  const navigate = useNavigate();
  const ToolsCookies = new Cookies();
  const StatusLogin = ToolsCookies.get("status_login");

  useEffect(() => {
    if (!StatusLogin || StatusLogin == undefined) {
      navigate("/sign-in");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    report: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const Report = (e) => {
    e.preventDefault();
    ReportPOST(formData);
  };

  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <section className="lapor">
            <div className="container report-content bgr-light rounded shadow-sm p-3 mt-5 w-50">
              <h4 className="text-center my-4 bgr-primary p-3 rounded text-white poppins-medium">
                Sampaikan Laporanmu
              </h4>
              <form className="form-content" id="formReport" onSubmit={Report}>
                <div className="mb-3">
                  <label htmlFor="judul">Judul Laporan Anda</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    id="judul"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Masukkan Judul Laporan Anda"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="judul">Lokasi Kejadian Anda</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    id="lokasi"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Masukkan Lokasi Kejadian Anda"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="judul">Tanggal Kejadian Anda</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    id="tanggal"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="Masukkan Tanggal Kejadian Anda"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="judul">Tuliskan Isi Laporan Anda</label>
                  <textarea
                    name="report"
                    className="form-control"
                    id="isi"
                    value={formData.report}
                    onChange={handleChange}
                    cols="30"
                    rows="10"
                    autoComplete="off"
                    required
                  />
                </div>
                <button
                  className="btn btn-report bgr-alternative text-white poppins-medium"
                  type="submit"
                >
                  Lapor
                </button>
              </form>
            </div>
          </section>
        </div>

        <Footer />
      </MainLayout>
    </>
  );
};

export default Form;
