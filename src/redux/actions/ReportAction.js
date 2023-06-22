import axios from "axios";
import Swal from "sweetalert2";

const baseurl = "https://6451d89fbce0b0a0f736af1a.mockapi.io";

export const ReportPOST = (datas) => {
  let data = JSON.stringify({
    title: datas.title,
    location: datas.location,
    date: datas.date,
    report: datas.report,
  });
  let config = {
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios
    .post(baseurl + "/report", data, config)
    .then((response) => {
      Swal.fire({
        title: "Yeayy, Laporan kamu sudah terkirim!",
        text: "Tunggu informasi selanjutnya dari kami",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
        window.location.href = "/";
      });
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
