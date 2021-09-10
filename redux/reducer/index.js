import { GET_QRDATA, PUT_QRDATA } from "../actions";

const initialState = {
  QRdata: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QRDATA:
      return {
        ...state
      }
    case PUT_QRDATA:
      return {
        ...state,
        QRdata: [...state.QRdata, action.payload]
      }
    default:
      return state
  };
};

export default rootReducer;