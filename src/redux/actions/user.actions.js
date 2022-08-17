import { USER_NAME } from "redux/constants/user.constants";

export const updateUserName = (data) => async (dispatch) => {
  dispatch({
    type: USER_NAME,
    payload: data
  });
};