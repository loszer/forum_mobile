import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import { Switch, Route }  from 'react-router-dom';

import Bmob from 'Bmob';

class PageMy extends React.Component {
  constructor(props) {
    super(props);
    const user = Bmob.User.current()
    this.state = {
      selectedIndex: 0,

      isLogin: user ? true : false,
      username: user ? user.attributes.username : null,
    };

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {

  }

  logout() {
    Bmob.User.logOut();
    var currentUser = Bmob.User.current();
    if (!currentUser) {
      alert('退出登录');
    }
  }

  render() {
    const { match } = this.props;
    return (
      <div className="page">
        <div
          style={{
            overflow: 'hidden',
            height: 150,
            backgroundColor: '#00CEDB',
            borderBottom: '1px solid #eee',
          }}
        >
          <div
            style={{
              height: 47,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              position: 'relative',
            }}
          >
            <span style={{ color: '#fff', fontSize: 16 }}>我的</span>

            <div
              className="flex"
              style={{
                position: 'absolute',
                right: 0, top: 0, bottom: 0, alignItems: 'center',
                paddingRight: 12,
              }}
            >
              {/*<span style={{ color: '#fff', fontSize: 16 }}>设置</span>*/}
            </div>
          </div>

          <div style={{ height: 12 }}></div>

          <div className="flex">
            <div
              className="flex"
              style={{ width: 100, justifyContent: 'center' }}
            >
              <div
                style={{
                  // width: 56, height: 56,
                  borderRadius: '50%',
                  border: '2px  solid #ccc',
                }}
              >
                <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: '#fff' }}></div>
              </div>
            </div>

            <div style={{ width: 12 }}></div>

            <div style={{ color: '#fff', fontSize: 13, }}>
              {this.state.isLogin ?
                [
                  <div>
                    <span>昵称: </span> <span>{this.state.username}</span>
                  </div>,
                  <div>
                    {/*<span>手机: </span> <span>183****7089</span>*/}
                  </div>
                ] :
                <div>
                  <span>未登录</span>
                </div>
              }
            </div>

            <div style={{ flex: 1 }}></div>

            <button
              style={{ backgroundColor: '#fff', height: 22, paddingLeft: 6, paddingRight: 6, borderRadius: 4 }}
              onClick={(e) => {
                e.preventDefault();
                if (this.state.isLogin) {
                  this.logout();
                } else {
                  this.props.history.push('/login');
                }
              }}
            >{this.state.isLogin ? '退出' : '登录'}</button>

            <div style={{ width: 12 }}></div>

          </div>
        </div>

        <div style={{ height: 8 }}></div>

        <div
          className="flex"
          style={{
            backgroundColor: '#fff'
          }}
        >
          {(() => {
            const data = [
              {label: '我的收藏'},
              {label: '我的评论'},
              {label: '我的喜欢'},
            ];
            return (
              data.map((item, index, arr) => (
                [
                  <div
                    className="flex-col"
                    style={{
                      flex: 1, height: 60,
                      alignItems: 'center', justifyContent: 'space-evenly',
                    }}
                  >
                    <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: '#eee' }}></div>
                    <span style={{ fontSize: 10, color: '#333' }}>{item.label}</span>
                  </div>,
                  index != arr.length - 1 &&
                  <div style={{ height: 60, display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: 40, width: 1, backgroundColor: '#eee' }}></div>
                  </div>
                ]
              ))
            );
          })()}
        </div>

        <div style={{ height: 8 }}></div>

        <div style={{ backgroundColor: '#fff' }}>
          {(() => {
            const data = [
              {
                label: '我的发布',
                to: () => {
                  this.props.history.push('/my/post');
                }
              },
              // { label: '我的xx0' },
              // { label: '我的xx1' },
              // { label: '我的xx2' },
              // { label: '我的xx3' },
            ];
            return (
              data.map((item, index, arr) => (
                [
                  <div
                    className="flex"
                    style={{
                      height: 42, alignItems: 'center',
                      backgroundColor: '#fff', paddingLeft: 15,
                    }}
                    onClick={(e) => {

                    }}
                  >
                    <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: '#eee' }}></div>
                    <div style={{ width: 4 }}></div>
                    <span style={{ fontSize: 13, color: '#333' }}>{item.label}</span>
                  </div>,
                  index != arr.length - 1 &&
                  <div style={{ paddingLeft: 15 }}>
                    <div style={{ height: 1, backgroundColor: '#eee' }}></div>
                  </div>
                ]
              ))
            );
          })()}
        </div>

      </div>
    );
  }
}

PageMy.propTypes = {};
PageMy.defaultProps = {};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    username: state.user.username
  };
}

export default connect()(PageMy);
