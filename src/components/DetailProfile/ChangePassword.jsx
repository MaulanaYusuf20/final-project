import { BiShowAlt, BiHide } from "react-icons/bi";
import React from "react";
function ChangePassword() {
  const [showPass, setShowPass] = React.useState(false);
  const [showComPass, setShowComPass] = React.useState(false);
  return (
    <div className=" border border-white rounded shadow bg-white p-4 my-2">
      <div className=" fw-bold fs-3 poppins-medium">Ubah Password</div>
      <div className="title-password poppins rounded py-2 px-3 my-2">
        Isi jika Anda ingin mengubah password.
      </div>
      <div className="input-wrapper">
        <div className="poppins">
          Masukkan Password Baru <span style={{ color: "red" }}>*</span>
        </div>
        <div className="password-container">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Masukkan Password"
            name="new_pass"
            className="w-100 rounded p-2"
          />
          <span className="show-eye" onClick={() => setShowPass(!showPass)}>
            {showPass ? <BiHide /> : <BiShowAlt />}
          </span>
        </div>
      </div>
      <div className="input-wrapper">
        <div className="poppins">
          Konfirmasi Password Baru <span style={{ color: "red" }}>*</span>
        </div>
        <div className="password-container">
          <input
            type={showComPass ? "text" : "password"}
            placeholder="Konfirmasi Password"
            name="comfirm_pass"
            className="w-100 rounded p-2"
          />
          <span
            className="show-eye"
            onClick={() => setShowComPass(!showComPass)}
          >
            {showComPass ? <BiHide /> : <BiShowAlt />}
          </span>
        </div>
      </div>
      <button className="btn-img rounded poppins mt-4 py-2 px-4">
        Simpan Password
      </button>
    </div>
  );
}

export default ChangePassword;
