import { AUTHENTICATE, LOGOUT } from '../actions/auth';

const initialState = {
  name: null,
  mobile: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        name: action.name,
        mobile: action.mobile
      };
    case LOGOUT:
      return initialState;
    // case SIGNUP:
    //   return {
    //     name: action.name,
    //     mobile: action.mobile
    //   };
    default:
      return state;
  }
};
