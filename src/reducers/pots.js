import { SAVE_POTS_API } from "../actions/pots";

const initialState = {
  pots: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POTS_API:
      return {
        ...state,
        pots: action.potsApi,
        logged: true,
      };
    default:
      return state;
  }
};

export default reducer;
