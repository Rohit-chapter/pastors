import { ALL_CONTACTS, US_CONTACTS } from "redux/constants/contact.constants";

export const updateAllContacts = (data) => async (dispatch) => {
  dispatch({
    type: ALL_CONTACTS,
    payload: data
  });
};

export const updateUSContacts = (data) => async (dispatch) => {
  dispatch({
    type: US_CONTACTS,
    payload: data
  });
};