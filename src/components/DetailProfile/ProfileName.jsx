import { useState } from "react";
import { ChangeProfile } from "../../redux/actions/AuthAction";
import Swal from "sweetalert2";
import { Avatar } from "../../assets/images";

function ProfileName({ data, cookie, onProfileUpdate }) {
  const [formData, setFormData] = useState({
    name: data.name,
    email: data.email,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  async function btnSubmit(e) {
    e.preventDefault();
    try {
      const result = await ChangeProfile(formData, data.id);
      // Handle the result here
      cookie.remove("user_data", { path: "/" });
      cookie.set("user_data", result);
      if (typeof onProfileUpdate === "function") {
        onProfileUpdate();
        Swal.fire({
          title: "Yeayy, Profile Berhasil Diubah!",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      // Handle any errors
      console.log(error);
    }
  }
  return (
    <div className=" border border-white rounded shadow bg-white p-4 my-2">
      <div className=" fw-bold fs-3 poppins-medium">Foto Profile</div>
      <div className="d-flex gap-3 align-items-center py-4">
        <img width={90} height={90} className="avatar" src={Avatar} alt="" />

        <div>
          <button className="btn-img rounded py-1 px-2 poppins">
            Pilih Foto
          </button>
          <div className="text-black-50 w-75 pt-1 poppins">
            Gambar Profile Anda sebaiknya memiliki rasio 11 dan berukuran tidak
            lebih dari 2MB.
          </div>
        </div>
      </div>
      <div className="input-wrapper">
        <div className="poppins">
          Nama Lengkap <span style={{ color: "red" }}>*</span>
        </div>
        <input
          type="text"
          name="name"
          className="w-100 rounded p-2"
          placeholder="Nama Lengkap"
          value={formData.name == "" ? data.name : formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-wrapper">
        <div className="poppins">
          Email <span style={{ color: "red" }}>*</span>
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-100 rounded p-2"
          disabled
          value={formData.email == "" ? data.email : formData.email}
          onChange={handleChange}
        />
      </div>
      <button
        className="btn-img poppins rounded mt-4 py-2 px-2"
        onClick={btnSubmit}
      >
        Simpan Perubahan
      </button>
    </div>
  );
}

export default ProfileName;
