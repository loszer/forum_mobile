import Bmob from 'Bmob';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export function requestLogin() {
  return {
    type: REQUEST_LOGIN,
  };
}

export const RECEIVE_LOGIN = 'REQUEST_LOGIN';
export function receiveLogin() {
  return {
    type: REQUEST_LOGIN,
  };
}

export const FETCH_POST_LIST_REQUEST =  'FETCH_POST_LIST_REQUEST';
export const FETCH_POST_LIST_SUCCESS =  'FETCH_POST_LIST_SUCCESS';
export const FETCH_POST_LIST_FAILURE =  'FETCH_POST_LIST_FAILURE';
export function fetchPostListRequest() {
  return {
    type: FETCH_POST_LIST_REQUEST,
  };
}
export function fetchPostListSuccess(data) {
  return {
    type: FETCH_POST_LIST_SUCCESS,
    data,
  };
}
export function fetchPostListFailure(data) {
  return {
    type: FETCH_POST_LIST_FAILURE,
    data,
  };
}

export function reqPostList() {
  return function (dispatch) {
    dispatch(fetchPostListRequest());
    return new Promise((resolve,reject) => {
      var Post = Bmob.Object.extend("Post");
      var query = new Bmob.Query(Post);
      query.descending("createdAt");
      query.include("user");
      query.find({
        success: function(results) {
          resolve(results);
        },
        error: function(object, error) {
          console.log("query object fail");
          reject(object, error);
        }
      });
    }).then((res) => {
      console.log(res);
      dispatch(fetchPostListSuccess(res));
    });
  }
}

export const FETCH_SECTION_LIST_REQUEST =  'FETCH_SECTION_LIST_REQUEST';
export const FETCH_SECTION_LIST_SUCCESS =  'FETCH_SECTION_LIST_SUCCESS';
export const FETCH_SECTION_LIST_FAILURE =  'FETCH_SECTION_LIST_FAILURE';
export function fetchSectionListRequest() {
  return {
    type: FETCH_SECTION_LIST_REQUEST,
  };
}
export function fetchSectionListSuccess(data) {
  return {
    type: FETCH_SECTION_LIST_SUCCESS,
    data,
  };
}
export function fetchSectionListFailure(data) {
  return {
    type: FETCH_SECTION_LIST_FAILURE,
    data,
  };
}

export function reqSectionList() {
  return function (dispatch) {
    dispatch(fetchSectionListRequest());
    return new Promise((resolve,reject) => {
      var Section = Bmob.Object.extend("Section");
      var query = new Bmob.Query(Section);
      query.find({
        success: function(results) {
          resolve(results);
        },
        error: function(object, error) {
          console.log("query object fail");
          reject(object, error);
        }
      });
    }).then((res) => {
      console.log(res);
      dispatch(fetchSectionListSuccess(res));
    });
  }
}


export const FETCH_LOGIN_REQUEST =  'FETCH_LOGIN_REQUEST';
export const FETCH_LOGIN_SUCCESS =  'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE =  'FETCH_LOGIN_FAILURE';
export function fetchLoginRequest() {
  return {
    type: FETCH_LOGIN_REQUEST,
  };
}
export function fetchLoginSuccess(data) {
  return {
    type: FETCH_LOGIN_SUCCESS,
    data,
  };
}
export function fetchLoginFailure(data) {
  return {
    type: FETCH_LOGIN_FAILURE,
    data,
  };
}

export function reqLogin() {
  return function (dispatch) {
    dispatch(fetchLoginRequest());
    return new Promise((resolve,reject) => {
      Bmob.User.logIn(this.state.username, this.state.password, {
        success: function(user) {
          // Do stuff after successful login.
          alert('登录成功');
          if (this.utm) {
            // $this.props.history.replace(this.utm);
          } else {
            // $this.props.history.replace('/index/home');
          }
        },
        error: function(user, error) {
          // console.log(user, error);
          // The login failed. Check error to see why.
          if (error.code == 101) {
            alert('账号不正确');
            return;
          }
          alert('登录失败');
        }
      });
      return;


      var Section = Bmob.Object.extend("Section");
      var query = new Bmob.Query(Section);
      query.find({
        success: function(results) {
          resolve(results);
        },
        error: function(object, error) {
          console.log("query object fail");
          reject(object, error);
        }
      });
    }).then((res) => {
      console.log(res);
      dispatch(fetchSectionListSuccess(res));
    });
  }
}

export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    username,
  };
}
