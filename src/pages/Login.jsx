import { Link, useNavigate } from "react-router-dom";
import "../assets/css/style-login.css";
import { LockIcon, MailIcon } from "../assets/icons";
import { BGLoginRegister } from "../assets/images";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { AuthLogin } from "../redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
const ToolsCookies = new Cookies();

const Login = () => {
  const { dataUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(AuthLogin());
  }, [dispatch]);

  const [showPassword, setShowPassword] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    let matchedUsers = [];
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    try {
      for (let i = 0; i < dataUser.length; i++) {
        if (dataUser[i].email === email) {
          matchedUsers = dataUser[i];
        }
      }

      if (!matchedUsers) {
        Swal.fire({
          title: "Email atau password yang anda input salah!",
          text: "Silahkan coba lagi",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        if (matchedUsers.password !== password) {
          Swal.fire({
            title: "Email atau password yang anda input salah!",
            text: "Silahkan coba lagi",
            icon: "error",
            confirmButtonText: "OK",
          });
        } else {
          var currentDate = new Date();
          var expiresDate = new Date(
            currentDate.getTime() + 24 * 60 * 60 * 1000
          );
          // var expiresDateString = expiresDate.toISOString();

          ToolsCookies.set("status_login", true, {
            expires: expiresDate,
          });
          ToolsCookies.set("user_data", JSON.stringify(matchedUsers), {
            expires: expiresDate,
          });

          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="login">
        <div className="row">
          <div className="col-sm-12 col-md-6 bg-login">
            <img
              src={BGLoginRegister}
              draggable="false"
              className="img-fluid bg-login-register"
            />
          </div>
          <div className="col-sm-12 col-md-6 form-login d-flex justify-content-center">
            <div className="form-header mt-5">
              <div id="message" className="color-dark"></div>
              <h1 className="welcome color-dark">Selamat Datang, Pahlawan!</h1>
              <h4 className="paragraph color-subdark mt-3">
                Petualangan baru telah menunggu untuk kamu jelajahi
              </h4>
              <form
                className="form-content mt-5"
                id="formLogin"
                onSubmit={login}
              >
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
                    required
                  />
                  <div className="invalid-feedback">
                    Mohon masukkan email anda
                  </div>
                </div>
                <label htmlFor="email">Kata Sandi</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <img src={LockIcon} alt="" />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control"
                    placeholder="Masukkan Password"
                    id="password"
                    required
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text p-3"
                      onClick={togglePasswordVisibility}
                      id="basic-addon1"
                    >
                      {showPassword ? (
                        <i className="fa fa-eye-slash" id="hide_eye"></i>
                      ) : (
                        <i className="fa fa-eye" id="show_eye"></i>
                      )}
                    </span>
                  </div>
                  <div className="invalid-feedback">
                    Mohon masukkan password anda
                  </div>
                </div>
                <a
                  href="#"
                  className="forgot-password d-flex justify-content-end color-alternative"
                >
                  Lupa kata sandi?
                </a>
                <button
                  type="submit"
                  className="btn btn-login bgr-alternative color-light mt-3"
                >
                  Masuk
                </button>
              </form>
              <div className="row">
                <div className="col mt-3 register d-flex justify-content-center">
                  <span className="register-label">Belum punya akun?</span>
                  <Link to="/sign-up" className="register-link ms-2">
                    Daftar Sekarang
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

export default Login;
