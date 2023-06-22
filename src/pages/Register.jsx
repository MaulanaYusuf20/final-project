import { Link } from "react-router-dom";
import "../assets/css/style-register.css";
import { LockIcon, MailIcon, PersonIcon } from "../assets/icons";
import { BGLoginRegister } from "../assets/images";
import { useState } from "react";
import { AuthRegister } from "../redux/actions/AuthAction";
import Swal from "sweetalert2";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const SignUp = (e) => {
    e.preventDefault();
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    if (password !== confirmPassword) {
      console.log(password, confirmPassword);
      Swal.fire({
        title: "Password tidak sama!",
        text: "Silahkan ketik password dengan benar dan sesuai",
        icon: "error",
        confirmButtonText: "OK",
      });
      return 0;
    }
    AuthRegister(formData);
  };

  return (
    <>
      <section className="register">
        <div className="row">
          <div className="col-sm-6 bg-register">
            <img
              src={BGLoginRegister}
              draggable="false"
              className="img-fluid bg-login-register"
            />
          </div>
          <div className="col-sm-6 form-register d-flex justify-content-center">
            <div className="form-header mt-5 w-50">
              <div className="warning"></div>
              <h1 className="welcome color-dark">
                Daftar Untuk Jadi Pahlawan !
              </h1>
              <h4 className="paragraph color-subdark mt-3">
                Daftarkan dirimu untuk berpetualang dan menjadi seorang pahlawan
              </h4>
              <form
                className="form-content mt-3"
                id="formRegister"
                onSubmit={SignUp}
              >
                <label htmlFor="name">Nama</label>
                <div className="input-group mb-2">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={PersonIcon} alt="" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Masukkan Nama Lengkap"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <label htmlFor="email">Email</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={MailIcon} alt="" />
                  </span>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Masukkan Email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <label htmlFor="password-1">Kata Sandi</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={LockIcon} alt="" />
                  </span>
                  <input
                    type={showPassword1 ? "text" : "password"}
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Masukkan Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text p-3"
                      onClick={togglePasswordVisibility1}
                      id="basic-addon1"
                    >
                      {showPassword1 ? (
                        <i className="fa fa-eye-slash" id="hide_eye"></i>
                      ) : (
                        <i className="fa fa-eye" id="show_eye"></i>
                      )}
                    </span>
                  </div>
                </div>

                <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={LockIcon} alt="" />
                  </span>
                  <input
                    type={showPassword2 ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Masukkan Password"
                    required
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text p-3"
                      onClick={togglePasswordVisibility2}
                      id="basic-addon1"
                    >
                      {showPassword2 ? (
                        <i className="fa fa-eye-slash" id="hide_eye_2"></i>
                      ) : (
                        <i className="fa fa-eye" id="show_eye_2"></i>
                      )}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-register bgr-alternative color-light mt-2"
                >
                  Daftar
                </button>
              </form>
              <div className="row">
                <div className="col mt-3 register d-flex justify-content-center">
                  <span className="register-label">Sudah punya akun?</span>
                  <Link to="/sign-in" className="register-link ms-2">
                    Masuk Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
