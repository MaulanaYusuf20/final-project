import axios from "axios";

const baseurl = "https://6484b288ee799e321626f226.mockapi.io";

export const GetCourse = () => (dispatch) => {
  axios
    .get(baseurl + "/course")
    .then((response) => {
      const result = response.data;
      dispatch({
        type: "SET_DATA_COURSE",
        payload: result,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
