import axios from "axios";

const baseurl = "https://6484b288ee799e321626f226.mockapi.io";

export const GetArticle = () => (dispatch) => {
  axios
    .get(baseurl + "/article")
    .then((response) => {
      const result = response.data;
      dispatch({
        type: "SET_DATA_ARTICLES",
        payload: result,
        original: result,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
