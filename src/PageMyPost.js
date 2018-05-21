import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { Switch, Route }  from 'react-router-dom';
import {reqPostList} from "./actions";

const Item = (props) => {
  return (
    // 定高
    <div
      style={{
        backgroundColor: '#fff',
        padding: 8,
        // height: 160,
        minHeight: 80,
      }}
      onClick={(e) => {
        e.preventDefault();
        props.onItemClick && props.onItemClick();
      }}
    >
      <div
        className="flex"
        style={{
          float: 'right',
          paddingLeft: 12,
          height: '100%',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 60, height: 60, backgroundColor: '#eee',
          }}
        >
        </div>
      </div>

      <div>
        {/*<div className="flex" style={{ alignItems: 'center' }}>*/}
          {/*<div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: '#eee' }}></div>*/}
          {/*<div style={{ width: 4 }}></div>*/}
          {/*<span style={{ fontSize: 13, color: '#333' }}>伽蓝</span>*/}
        {/*</div>*/}

        <div style={{ height: 6 }}></div>

        <div>
          <span style={{ fontSize: 16, color: '#333' }}>{props.title}</span>
          <div style={{ heiht: 4 }}></div>
          <div>
            <span style={{ fontSize: 11, color: '#999' }}>{props.content}</span>
          </div>
        </div>

        <div style={{ height: 6 }}></div>

        <div
          className="flex"
          style={{
            alignItems: 'center',
          }}
        >
          <div
            className="flex"
            style={{ margin: 0, padding: '0px 6px', border: '1px solid red', borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 10, color: 'red' }}>城市故事</span>
          </div>

          <div style={{ width: 12 }}></div>

          <div style={{ width: 14, height: 14, borderRadius: 6, backgroundColor: '#eee' }}></div>
          <span style={{ marginLeft: 6, fontSize: 12, color: '#666' }}>58</span>

          <div style={{ width: 12 }}></div>

          <div style={{ width: 14, height: 14, borderRadius: 6, backgroundColor: '#eee' }}></div>
          <span style={{ marginLeft: 6, fontSize: 12, color: '#666' }}>61</span>
        </div>
      </div>

    </div>
  );
};

class PageMyPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //默认第一个选项卡
      selectedIndex: 0,

      isShowNavTop: true,
    };
  }

  componentDidMount() {
    this.props.dispatch(reqPostList());
  }

  render() {
    const { match } = this.props;
    return (
      <div className="page">
        {this.state.isShowNavTop &&
        <div
          className="flex"
          style={{
            height: 47, backgroundColor: '#00CEDB',
            borderBottom: '1px solid #eee',
            justifyContent: 'center', alignItems: 'center',
            position: 'relative',
          }}
        >
          <span style={{ fontSize: 16, color: '#fff' }}>发现</span>

          <div
            className="flex"
            style={{
              position: 'absolute',
              right: 0, top: 0, bottom: 0,
              width: 52,
              alignItems: 'center', justifyContent: 'center',
            }}
            onClick={(e) => {
              e.preventDefault();
              this.setState({
                isShowNavTop: false,
              });
            }}
          >
            {/*<div*/}
              {/*style={{*/}
                {/*width: 22, height: 16, borderRadius: 4, backgroundColor: '#eee',*/}
              {/*}}*/}
            {/*></div>*/}
            <img
              src={require('@/assets/icon/icons8-collapse-arrow-24.png')} alt=""
              style={{ height: 20 }}
            />
          </div>
        </div>
        }

        {/* tab效果 */}
        <div
          className="flex"
          style={{
            height: 36, backgroundColor: '#fff',
            borderBottom: '1px solid #ddd',
            alignItems: 'center',
          }}
        >
          {(() => {
            // const data = [
            //   { label: '游记' },
            //   { label: '路线' },
            //   { label: '美食' },
            //   { label: '故事' },
            //   { label: '新闻' },
            //   { label: '人物' },
            // ];
            return (
              // data.map((item, index) => (
              this.props.sections.map((item, index) => (
                <div
                  className="flex"
                  style={{
                    width: 60, height: '100%',
                    justifyContent: 'center', alignItems: 'center',
                  }}>
                  {/*<span style={{ fontSize: 13, color: '#666' }}>{item.label}</span>*/}
                  <div
                    class="flex center"
                    style={{
                      paddingLeft: 6, paddingRight: 6,
                      ...this.state.selectedIndex == index ? {backgroundColor: 'powderblue'} : {},
                      borderRadius: 6,
                    }}
                  >
                    <span style={{ fontSize: 13, color: '#666' }}>{item.attributes.name}</span>
                  </div>
                </div>
              ))
            );
          })()}
        </div>

        <div
          style={{
            position: 'absolute',
            left: 0, right: 0, bottom: 0, top: this.state.isShowNavTop ? 36 + 47 : 36,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div style={{ height: 4 }}></div>

          {this.props.items && this.props.items.map((item, index, arr) => (
            [
              <Item
                key={`item_${index}`}
                title={item.attributes.title}
                content={item.attributes.content}
                onItemClick={() => {
                  console.log(item);
                  this.props.history.push(`/detail?id=${item.id}`);
                }}
              />,
              index != arr.length - 1 && <div style={{ height: 1 }}></div>
            ]
          ))}

          <div style={{ height: 4 }}></div>
        </div>

      </div>
    );
  }
}

PageMyPost.propTypes = {};
PageMyPost.defaultProps = {};

const mapStateToProps = state => {
  console.log(state.posts);
  return {
    // items: state.posts.items.filter((item) => Bmob.User.current().id == item.attributes. ),
  };
};

export default connect(mapStateToProps)(PageMyPost);
