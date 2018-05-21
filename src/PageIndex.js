import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route }  from 'react-router-dom';

import Bmob from 'Bmob';

import PageHome from "./PageHome";
import PageMsg from "./PageMsg";
import PageMy from "./PageMy";
import PageFind from "./PageFind";

class PageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    const { match } = this.props;
    return (
      <div className="page">
        <div
          style={{
            position: 'absolute',
            left: 0, right: 0, top: 0, bottom: 47,
            display: 'block',
            overflow: 'hidden',
            // overflowY: 'auto',
            // WebkitOverflowScrolling: 'touch',
          }}
        >
          <Switch>
            <Route path={`${match.url}/home`} component={PageHome} />
            <Route path={`${match.url}/find`} component={PageFind} />
            <Route path={`${match.url}/msg`} component={PageMsg} />
            <Route path={`${match.url}/my`} component={PageMy} />
          </Switch>
        </div>

        <div
          style={{
            position: 'fixed',
            left: 0, right: 0, bottom: 0,
            height: 47,
            backgroundColor: '#fff',
            borderTop: '1px solid #ddd',
            display: 'flex',
          }}
        >
          {(() => {
            const items = [
              {
                label: '首页', to: `${match.url}/home`,
              },
              {
                label: '版块', to: `${match.url}/find`,
              },
              () => (
                <div
                  key="nav_bottom_btn_add"
                  className="flex" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                  <div
                    style={{
                      display: 'flex', boxSizng: 'borderbox',
                      width: 34, height: 34, borderRadius: '50%',
                      backgroundColor: '#00CEDB',
                      justifyContent: 'center', alignItems: 'center',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      var currentUser = Bmob.User.current();
                      if (currentUser) {
                        this.props.history.push('/write');
                      } else {
                        alert('你还没有登陆');
                        this.props.history.push('/login')
                      }
                    }}
                  >
                    <img
                      src={require('@/assets/icon/icons8-plus-math-26.png')} alt=""
                      style={{ width: 26, height: 26 }}
                    />
                  </div>
                </div>
              ),
              {
                label: '消息', to: `${match.url}/msg`,
              },
              {
                label: '我的', to: `${match.url}/my`,
              }
            ];
            return items.map((item, index) => (
              typeof item == 'function' ?
                item()
                :
                <div
                  key={`nav_bottom_${index}`}
                  style={{
                    flex: 1, height: '100%',
                    display: 'flex', justifyContent: 'center',
                  }}
                >
                  {/* 点击区域 */}
                  <div
                    style={{
                      width: 52, height: '100%',
                      display: 'flex', flexDirection: 'column',
                      justifyContent: 'space-evenly', alignItems: 'center',
                      // 去除点击的阴影效果
                      WebkitTapHighlightColor: 'transparent',
                      WebkitTouchCallout: 'none',

                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      if (index !== this.state.selectedIndex) {
                        console.log('change page');
                        item.to && this.props.history.replace(item.to);
                        this.setState({ selectedIndex: index });
                      }
                    }}
                  >
                    <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: '#eee' }}></div>
                    <span style={{ fontSize: 10, color: this.state.selectedIndex == index ? '#333' : '#999' }}>{item.label}</span>
                  </div>
                </div>
            ));
          })()}
        </div>
      </div>
    );
  }
}

PageIndex.propTypes = {};
PageIndex.defaultProps = {};

export default PageIndex;
