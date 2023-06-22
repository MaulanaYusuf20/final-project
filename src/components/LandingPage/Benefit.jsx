import "../../assets/css/style-landing.css";

const Benefit = () => {
  return (
    <>
      <section className="benefit mt-5 px-2">
        <h4 className="tag color-dark text-center">M A N F A A T</h4>
        <h4 className="title color-dark text-center">
          Apa yang akan kamu dapatkan?
        </h4>
        <div className="row">
          <div className="col-md-3 my-2">
            <div className="card mt-4 shadow-sm p-2">
              <img
                src="https://i.ibb.co/kK6SCDS/Sword-Terjangkau.png"
                className="m-2 img-fluid"
                width="76"
              />
              <div className="card-body">
                <h5 className="title color-dark">Terjangkau</h5>
                <p className="paragraph color-subdark">
                  Memberikan akses kelas dengan biaya terjangkau
                </p>
              </div>
            </div>
            <div className="card mt-4 shadow-sm p-2">
              <img
                src="https://i.ibb.co/ZM0w5Ft/Sword-Penghargaan.png"
                className="m-2 img-fluid"
                width="76"
              />
              <div className="card-body">
                <h5 className="title color-dark">Penghargaan</h5>
                <p className="paragraph color-subdark">
                  Dapatkan penghargaan berupa sertifikat dan point
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2 d-flex justify-content-center align-items-center">
            <img
              src="https://i.ibb.co/xGZHpGx/Hero-Benefit.png"
              className="img-fluid"
            />
          </div>
          <div className="col-md-3 my-2">
            <div className="card mt-4 shadow-sm p-2">
              <img
                src="https://i.ibb.co/JpDjVqX/Sword-Interaktif.png"
                className="m-2 img-fluid"
                width="76"
              />
              <div className="card-body">
                <h5 className="title color-dark">Interaktif</h5>
                <p className="paragraph color-subdark">
                  Pembelajaran interaktif dengan tema game RPG
                </p>
              </div>
            </div>
            <div className="card mt-4 shadow-sm p-2">
              <img
                src="https://i.ibb.co/pncKs2J/Sword-Perlindungan.png"
                className="m-2 img-fluid"
                width="76"
              />
              <div className="card-body">
                <h5 className="title color-dark">Keterampilan</h5>
                <p className="paragraph color-subdark">
                  Membantu kamu untuk mengembangkan keterampilan digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit;
