import Navbar from "../components/GlobalComponent/Navbar";
import Footer from "../components/GlobalComponent/Footer";
import MainLayout from "../layout/MainLayout";
import { ImgAbout } from "../assets/images";
import "../assets/css/style-about.css";

const About = () => {
  return (
    <>
      <MainLayout>
        <div className="container">
          <Navbar />
          <section className="hero mt-3 d-flex">
            <div className="row ">
              <div className="col-md-6 col my-auto">
                <img src={ImgAbout} alt="Gambar Petualang" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 col my-auto ">
              <h1 className="title color-dark ms-3">Seventeen Academy (SevA)</h1>
              <p className="paragraph color-dark my-3 ms-3">
                SevA merupakan sebuah website pembelajaran interaktif dengan latar belakang game RPG. Menggabungkan tema game RPG dan pembelajaran online diharapkan dapat menghadirkan pembelajaran yang menarik sehingga anak bisa belajar
                dengan menyenangkan.
              </p>
              <img src="https://i.imgur.com/2pExLRP.png" className="bg-ranting" width="180" />
            </div>
          </section>

          <section className="benefit mt-5 px-2">
            <h4 className="title color-dark text-center">Tujuan SevA</h4>
            <h4 className="tag color-dark text-center">Mari mengetahui tujuan dan manfaat SevA dibuat</h4>
            <div className="row justify-content-center">
              <div className="col-md-4 my-2">
                <div className="card mt-4 shadow-sm p-2">
                  <img src="https://i.ibb.co/ZM0w5Ft/Sword-Penghargaan.png" className="m-2 img-fluid" width="76" />
                  <div className="card-body">
                    <h5 className="title color-dark">Pembelajaran</h5>
                    <p className="paragraph color-subdark">Membantu anak dalam pembelajaran</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="card mt-4 shadow-sm p-2">
                  <img src="https://i.ibb.co/JpDjVqX/Sword-Interaktif.png" className="m-2 img-fluid" width="76" />
                  <div className="card-body">
                    <h5 className="title color-dark">Inovasi</h5>
                    <p className="paragraph color-subdark">Menghadirkan inovasi baru dalam pembelajaran</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="card mt-4 shadow-sm p-2">
                  <img src="https://i.imgur.com/24bL4NQ.png" className="m-2 img-fluid" width="76" />
                  <div className="card-body">
                    <h5 className="title color-dark">Keterampilan</h5>
                    <p className="paragraph color-subdark">Mengembangkan keterampilan digital</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="card mt-4 shadow-sm p-2">
                  <img src="https://i.ibb.co/kK6SCDS/Sword-Terjangkau.png" className="m-2 img-fluid" width="76" />
                  <div className="card-body">
                    <h5 className="title color-dark">Terjangkau</h5>
                    <p className="paragraph color-subdark">Memberikan akses kelas dengan biaya terjangkau</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="card mt-4 shadow-sm p-2">
                  <img src="https://i.ibb.co/pncKs2J/Sword-Perlindungan.png" className="m-2 img-fluid" width="76" />
                  <div className="card-body">
                    <h5 className="title color-dark">Perlindungan</h5>
                    <p className="paragraph color-subdark">Menyediakan Laporan perundungan</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="benefit mt-10 px-4">
            <h4 className="title color-dark text-center mt-5">Pengembang SevA</h4>
            <h4 className="tag color-dark text-center">Mari mengenal pengembang platform pendidikan SevA</h4>
            <div className="row justify-content-center">
              <div className="col-md-3 my-2">
                <div className="card border-0 bg-transparent text-center" id="card">
                  <img src="https://i.imgur.com/OKeLlh7.png" className="mx-auto img-fluid mt-4 p-2" width="200" />
                  <div className="card-body">
                    <h5 className="title color-dark">Maulana Yusuf</h5>
                    <p className="paragraph color-subdark ">STIMK "AMIKBANDUNG"</p>
                    <a href="#" className="text-decoration-none me-3">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-2">
              <div className="card border-0 bg-transparent" id="card">
                <img src="https://i.imgur.com/p5PA14u.png" className="mx-auto img-fluid mt-4 p-2" width="200" />
                <div className="card-body text-center">
                  <h5 className="title color-dark">Tasya Adila Putri</h5>
                  <p className="paragraph color-subdark ">Universitas Lampung</p>
                  <a href="#" className="text-decoration-none me-3">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="card border-0 bg-transparent" id="card">
                <img src="https://i.imgur.com/vVC9u4Z.png" className="mx-auto img-fluid mt-4 p-2" width="200" />
                <div className="card-body text-center">
                  <h5 className="title color-dark">Gema Kurnia Ramadhan</h5>
                  <p className="paragraph color-subdark ">Universitas Gunadarma</p>
                  <a href="#" className="text-decoration-none me-3">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="card border-0 bg-transparent" id="card">
                <img src="https://i.imgur.com/OjMTNIU.png" className="mx-auto img-fluid mt-4 p-2" width="200" />
                <div className="card-body text-center">
                  <h5 className="title color-dark">Velani Nur Hanifah</h5>
                  <p className="paragraph color-subdark ">Universitas Negeri Yogyakarta</p>
                  <a href="#" className="text-decoration-none me-3">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </section>
        </div>
        <Footer />
      </MainLayout>
    </>
  );
};

export default About;
