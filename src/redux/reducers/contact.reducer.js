import { ALL_CONTACTS, US_CONTACTS } from "redux/constants/contact.constants";

const initialState = {
  allContacts: [],
  usContacts: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_CONTACTS:
      return {
        ...state,
        allContacts: payload
      };
    case US_CONTACTS:
      return {
        ...state,
        usContacts: payload
      };
    default:
      return state;
  }
};