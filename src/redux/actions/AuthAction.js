import axios from "axios";
import Swal from "sweetalert2";

const baseurl = "https://6451d89fbce0b0a0f736af1a.mockapi.io";

export const AuthLogin = () => (dispatch) => {
  axios
    .get(baseurl + "/users")
    .then((response) => {
      const result = response.data;
      dispatch({
        type: "SET_DATA_USERS",
        payload: result,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const AuthRegister = (datas) => {
  let data = JSON.stringify({
    email: datas.email,
    name: datas.name,
    password: datas.password,
    img: "https://i.ibb.co/YN7zDFF/avatar.png",
  });
  let config = {
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios
    .post(baseurl + "/users", data, config)
    .then((response) => {
      //   const result = response.data;
      //   return result;
      Swal.fire({
        title: "Yeayy, Daftar Berhasil!",
        text: "Ayo Login dan Selamat berpetualang, pahlawan!",
        icon: "success",
        confirmButtonText: "OK",
      });
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const ChangeProfile = (datas, id) => {
  let data = JSON.stringify({
    email: datas.email,
    name: datas.name,
  });
  let config = {
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios
    .put(baseurl + `/users/${id}`, data, config)
    .then((response) => {
      const result = response.data;
      return result;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
