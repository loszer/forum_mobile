import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Bmob from 'Bmob';

import './index.css';
import App from './App';
import rootReducer from './reducers';
import {reqPostList, requestPostList} from "./actions";
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
Bmob.initialize("0a7ab0199ba8b4567abd6aa4f2a035f5", "270f25d476d0f0741a9740f0a7affaa5");
console.log(Bmob.User.current());
// var Post = Bmob.Object.extend("Post");
// var post = new Post();
// post.save({
//   title: '标题000',
//   content: '蒹葭苍苍，白露为霜，所谓伊人在水一方',
//   type: 0,
// }, {
//   success: function(object) {
//     $(".success").show();
//   },
//   error: function(model, error) {
//     $(".error").show();
//   }
// });

let store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);
// console.log(store.getState());
// store.dispatch(reqPostList()).then(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// // 用户
// var User = Bmob.Object.extend("User");
// var user = new User();
// user.save({
//   nickname: '测试用户000',
//   username: 'user000',
//   password: '123456',
// }, {
//   success: function(object) {
//     $(".success").show();
//   },
//   error: function(model, error) {
//     $(".error").show();
//   }
// });
//
// // 帖子
// var Post = Bmob.Object.extend("Post");
// var post = new Post();
// post.save({
//   title: '标题000',
//   content: '蒹葭苍苍，白露为霜，所谓伊人在水一方',
//   type: 0,
// }, {
//   success: function(object) {
//     $(".success").show();
//   },
//   error: function(model, error) {
//     $(".error").show();
//   }
// });
//
// // 版主
// var Agent = Bmob.Object.extend("Agent");
// var agent = new Agent();
// agent.save({
//   username: 'agent000',
//   password: '123456',
//   type: 0,
// }, {
//   success: function(object) {
//     $(".success").show();
//   },
//   error: function(model, error) {
//     $(".error").show();
//   }
// });
//
// // 回帖
// var Reply = Bmob.Object.extend("Reply");
// var reply = new Reply();
// reply.save({
//   content: '我认为你说的不对',
//   post_id: '',
//   from_id: '',
//   to_id: '',
// }, {
//   success: function(object) {
//     $(".success").show();
//   },
//   error: function(model, error) {
//     $(".error").show();
//   }
// });


