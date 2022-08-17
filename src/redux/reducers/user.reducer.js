import { USER_NAME } from "redux/constants/user.constants";

const initialState = {
  name: ''
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_NAME:
      return {
        ...state,
        name: payload
      };
    default:
      return state;
  }
};