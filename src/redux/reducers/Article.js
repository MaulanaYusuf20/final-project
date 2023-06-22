const initialStateApi = {
  dataArticle: null,
  oriDataArticle: null,
};

const articleReducer = (state = initialStateApi, action) => {
  if (action.type === "SET_DATA_ARTICLES") {
    return {
      ...state,
      dataArticle: action.payload,
      oriDataArticle: action.original,
    };
  }
  if (action.type === "UPDATE_DATA_ARTICLE") {
    return {
      ...state,
      dataArticle: action.payload,
    };
  }

  return state;
};

export default articleReducer;
