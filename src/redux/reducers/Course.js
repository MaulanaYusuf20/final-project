const initialStateApi = {
  dataCourse: null,
  paymentCourseId: null,
};

const courseReducer = (state = initialStateApi, action) => {
  if (action.type === "SET_DATA_COURSE") {
    return {
      ...state,
      dataCourse: action.payload,
    };
  }
  if (action.type === "SET_COURSE_PAYMENT") {
    return {
      ...state,
      paymentCourseId: action.payload,
    };
  }
  return state;
};

export default courseReducer;
