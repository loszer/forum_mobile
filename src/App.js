import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import {
  HashRouter as Router,
  Route, Link,
  withRouter,
} from 'react-router-dom';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';

import PageIndex from "./PageIndex";
import PageWrite from "./PageWrite";
import PageDetail from "./PageDetail";
import PageLogin from "./PageLogin";
import PageReply from "./PageReply";
import {reqSectionList} from "./actions";
import PageMyPost from "./PageMyPost";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends Component {
  componentDidMount() {
    this.props.dispatch(reqSectionList());
  }

  render() {
    return (
      // 使用动态路由
      <Router>
        <div
          className="App"
          style={{
            width: '100%',
            // height: window.innerHeight,
            height: '100%',
          }}
        >
          {/* 通过开关toggle导航面板 */}
          {/*<ul>*/}
            {/*<li><Link to="/">Home</Link></li>*/}
            {/*<li><Link to="/about">About</Link></li>*/}
          {/*</ul>*/}

          {/* 主页 */}
          <Route path="/index" component={PageIndex} />
          {/* 发帖页 */}
          <Route exact path="/write" component={PageWrite} />
          {/* 帖子详情页 */}
          <Route exact path="/detail" component={PageDetail} />
          {/*<Route exact path="/about" component={About} />*/}
          {/* 登录注册页 */}
          <Route exact path="/login" component={PageLogin} />
          {/* 回帖页 */}
          <Route exact path="/reply" component={PageReply} />
          {/*<Route exact path="/user/post" component={PageMyPost} />*/}
        </div>
      </Router>
    );
  }
}

// export default App;
export default hot(module)(connect()(App));
