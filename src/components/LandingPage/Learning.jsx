import "../../assets/css/style-landing.css";
import {
  BukuAgama,
  BukuIndonesia,
  BukuInggris,
  BukuIPA,
  BukuIPS,
  BukuMatematika,
  BukuPPKN,
  BukuSenbud,
  ShieldBadge,
} from "../../assets/images";

const Learning = () => {
  return (
    <>
      <section className="learning mt-3 px-3">
        <div className="bgr-primary p-md-5 color-light bg-learning">
          <div className="row">
            <div className="col-md-5 my-auto">
              <h2 className="tag color-sublight">P E M B E L A J A R A N</h2>
              <h2 className="title my-3">Pembelajaran Menarik</h2>
              <p className="paragraph color-sublight">
                Menghadirkan mata pelajaran dasar yang penting untuk anak dengan
                dikemas menarik agar tidak merasa bosan
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 learning-grid">
              <div className="row">
                <div className="col-md-3 col-10 card d-flex text-center align-items-center p-2 m-2">
                  <img src={BukuMatematika} />
                  <p className="mt-2">Matematika</p>
                </div>
                <div className="col-md-3 col-10 card d-flex text-center align-items-center p-2 m-2">
                  <img src={BukuIPA} />
                  <p className="mt-2">IPA</p>
                </div>
                <div className="col-md-3 col-10 card d-flex text-center align-items-center p-2 m-2">
                  <img src={BukuIPS} />
                  <p className="mt-2">IPS</p>
                </div>
                <div className="col-md-3 col-10 card d-flex text-center align-items-center p-2 m-2">
                  <img src={BukuAgama} />
                  <p className="mt-2">Agama</p>
                </div>
                <div className="col-md-3 col-10 d-flex justify-content-center align-items-center p-2 m-2">
                  <img src={ShieldBadge} />
                </div>
                <div className="col-md-3 col-10 card d-flex text-center align-items-center p-2 m-2">
                  <img src={BukuPPKN} />
                  <p className="mt-2">PPKN</p>
                </div>
                <div className="col-md-3 col-10 card d-flex text-center align-items-center p-2 m-2">
                  <img src={BukuIndonesia} />
                  <p className="mt-2">B. Indonesia</p>
                </div>
                <div className="col-md-3 col-10 card d-flex text-center align-items-center p-2 m-2">
                  <img src={BukuSenbud} />
                  <p className="mt-2">Seni Budaya</p>
                </div>
                <div className="col-md-3 col-10 card d-flex text-center align-items-center p-2 m-2">
                  <img src={BukuInggris} />
                  <p className="mt-2">B. Inggris</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learning;
