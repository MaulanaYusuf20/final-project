import { Link } from "react-router-dom/dist";
import "../../assets/css/style-landing.css";

const Highlight = () => {
  return (
    <>
      <section className="highlight mt-3">
        <div className="row">
          <div className="col-md-5 col my-auto">
            <h1 className="title color-dark ms-3">Mari Belajar dengan SevA</h1>
            <p className="paragraph color-dark my-3 ms-3">
              Menghadirkan pembelajaran yang menyenangkan dengan dikemas tema
              game RPG.
            </p>
            <Link
              to="/course"
              className="btn bgr-alternative color-light my-2 ms-3"
              id="btn-highlight"
            >
              Mulai Belajar
            </Link>
            <img
              src="https://i.ibb.co/Sv11b49/scroll.png"
              className="bg-scroll"
            />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 col">
            <img
              src="https://i.ibb.co/KXYhdV6/Hero-Invitation.png"
              alt="Gambar Petualang"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlight;
