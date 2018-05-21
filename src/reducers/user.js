import {RECEIVE_LOGIN, REQUEST_LOGIN, UPDATE_USERNAME} from "../actions";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  isLogin: false,
  username: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_LOGIN:
      return {
        isFetching: false,
        didInvalidate: false,
        isLogin: true,
      };
    case UPDATE_USERNAME:
      return Object.assign({}, state, {
        username: action.username,
      });
    default:
      return state;
  }
};

export default user;