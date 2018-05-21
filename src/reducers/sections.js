import {
  FETCH_SECTION_LIST_REQUEST,
  FETCH_SECTION_LIST_SUCCESS,
} from "../actions";

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const sections = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SECTION_LIST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_SECTION_LIST_SUCCESS:
      // console.log('action>>');
      // console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        items: action.data,
      });
    default:
      return state;
  };
};

export default sections;