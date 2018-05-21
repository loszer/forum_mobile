import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import { Switch, Route }  from 'react-router-dom';

import Bmob from 'Bmob';
import {updateUsername} from "./actions";

class PageLogin extends React.Component {
  constructor(props) {
    super(props);

    const _search = props.location.search;
    const _url = _search.split('utm=')[1];
    this.utm = _url;

    this.state = {

      selectedIndex: 0,

      username: '',
      password: '',
    };

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  login() {
    if (!this.state.username || !this.state.password) {
      alert('请填写完整');
      return;
    }
    var $this = this;
    Bmob.User.logIn(this.state.username, this.state.password, {
      success: function(user) {
        // Do stuff after successful login.
        alert('登录成功');
        if (this.utm) {
          $this.props.history.replace(this.utm);
        } else {
          $this.props.history.replace('/index/home');
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
  }

  signup() {
    if (!this.state.username || !this.state.password) {
      alert('请填写完整');
      return;
    }

    var $this = this;
    var user = new Bmob.User();
    user.set("username", this.state.username);
    user.set("password", this.state.password);
    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
        alert('注册成功');
        $this.props.dispatch(updateUsername($this.state.username));
        if (this.utm) {
          $this.props.history.replace(this.utm);
        } else {
          $this.props.history.replace('/index/index');
        }
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        // alert("Error: " + error.code + " " + error.message);
        alert('注册失败');
      }
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="page">
        <div
          className="flex"
          style={{
            height: 47, backgroundColor: '#00CEDB',
            borderBottom: '1px solid #eee',
            justifyContent: 'center', alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 16, color: '#fff' }}>登陆</span>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 0, right: 0, top: 47, bottom: 0,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            backgroundColor: '#eee',
          }}
        >
          <div style={{ height: 30 }}></div>

          <div class="flex-col" style={{ paddingLeft: 15, paddingRight: 15, }}>
            <span>账号</span>
            <div style={{ height: 8 }}></div>
            <input
              type="text"
              style={{
                height: 37,
              }}
              value={this.state.username}
              onChange={(e) => {
                e.preventDefault();
                this.setState({
                  username: e.target.value,
                });
              }}
            />
          </div>

          <div style={{height: 8}}></div>

          <div className="flex-col" style={{paddingLeft: 15, paddingRight: 15,}}>
            <span>密码</span>
            <div style={{height: 8}}></div>
            <input
              type="password"
              style={{
                height: 37,
              }}
              value={this.state.password}
              onChange={(e) => {
                e.preventDefault();
                this.setState({
                  password: e.target.value,
                });
              }}
            />
          </div>

          <div style={{ height: 30 }}></div>

          <div
            style={{ paddingLeft: 15, paddingRight: 15 }}
          >
            <div
              class="flex center"
              style={{
                height: 42,
                backgroundColor: 'powderblue',
                borderRadius: 4,
              }}
              onClick={(e) => {
                e.preventDefault();
                this.login();
              }}
            >
              <span style={{ color: '#333' }}>登录</span>
            </div>
          </div>

          <div style={{ height: 12 }}></div>

          <div
            style={{paddingLeft: 15, paddingRight: 15}}
          >
            <div
              className="flex center"
              style={{
                height: 42,
                backgroundColor: '#fff',
                borderRadius: 4, border: '1px solid #ddd',
              }}
              onClick={(e) => {
                e.preventDefault();
                this.signup();
              }}
            >
              <span style={{color: '#333'}}>注册</span>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

PageLogin.propTypes = {};
PageLogin.defaultProps = {};

export default connect()(PageLogin);
