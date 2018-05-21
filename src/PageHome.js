import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route }  from 'react-router-dom';

const Topic = (props) => {
  return (
    <div
      style={{
        width: '100%',  backgroundColor: '#fff',
      }}
    >
      <div style={{ height: 8 }}></div>

      <div className="flex" style={{ alignItems: 'center' }}>
        <div style={{ width: 8 }}></div>
        <div style={{ width: 5, height: 16, backgroundColor: 'red' }}></div>
        <div style={{ width: 8 }}></div>
        <span style={{ fontSize: 13, color: '#333' }}>{props.title}</span>
      </div>

      <div style={{ height: 8 }}></div>

      <div
        style={{
          // height: 82,
          // width: '100%',
          display: 'block', whiteSpace: 'nowrap',
          overflowY: 'hidden', overflowX: 'scroll', fontSize: 0,
        }}
      >
        {Array.from(new Array(12)).map((item, index) => (
          [
            <div style={{ display: 'inline-block', width: 6 }}></div>,
            <div
              style={{
                display: 'inline-block', fontSize: 13,
                width: 100, height: 70, backgroundColor: '#eee',
                borderRadius: 4,
              }}
            ></div>,
            <div style={{ display: 'inline-block', width: 6 }}></div>,
          ]
        ))}
      </div>

      <div style={{ height: 8 }}></div>
    </div>
  );
};

class PageHome extends React.Component {
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
          className="flex"
          style={{
            height: 47, backgroundColor: '#00CEDB',
            borderBottom: '1px solid #eee',
            justifyContent: 'center', alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 16, color: '#fff' }}>首页</span>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 0, right: 0, top: 47, bottom: 0,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div
            style={{
              height: 150, width: '100%',
              backgroundColor: 'lightblue',
            }}
          ></div>

          <div style={{ height: 8 }}></div>

          <div
            className="flex"
            style={{
              height: 38, backgroundColor: '#fff',
              borderTop: '1px solid #eee',
              borderBottom: '1px solid #eee',
              paddingLeft: 15, paddingRight: 15,
              alignItems: 'center',
            }}
            onClick={(e) => {
              e.preventDefault();
              alert('跳转到相应的H5');
            }}
          >
            <span style={{ fontSize: 12, color: '#333' }}>恋上一座城，爱上一个人</span>
            <div style={{ flex: 1 }}></div>
            {/*<div style={{ width: 16, height: 16, backgroundColor: '#eee' }}></div>*/}
            <img
              src={require('@/assets/icon/icons8-chevron-right-26.png')} alt=""
              style={{
                width: 12,
              }}
            />
          </div>

          <div style={{ height: 8 }}></div>

          <div
            style={{
              width: '100%',  backgroundColor: '#fff',
            }}
          >
            <div style={{ height: 8 }}></div>

            <div className="flex" style={{ alignItems: 'center' }}>
              <div style={{ width: 8 }}></div>
              <div style={{ width: 5, height: 16, backgroundColor: 'red' }}></div>
              <div style={{ width: 8 }}></div>
              <span style={{ fontSize: 13, color: '#333' }}>风景一览</span>
            </div>

            <div style={{ height: 8 }}></div>

            <div
              style={{
                // height: 82,
                // width: '100%',
                display: 'block', whiteSpace: 'nowrap',
                overflowY: 'hidden', overflowX: 'scroll', fontSize: 0,
              }}
            >
              {Array.from(new Array(12)).map((item, index) => (
                [
                  <div style={{ display: 'inline-block', width: 6 }}></div>,
                  <div
                    style={{
                      display: 'inline-block', fontSize: 13,
                      width: 100, height: 70, backgroundColor: '#eee',
                      borderRadius: 4,
                    }}
                  ></div>,
                  <div style={{ display: 'inline-block', width: 6 }}></div>,
                ]
              ))}
            </div>

            <div style={{ height: 8 }}></div>
          </div>

          <div style={{ height: 8 }}></div>

          <div
            style={{
              width: '100%',  backgroundColor: '#fff',
            }}
          >
            {(() => {
              const data = [
                {
                  label: '游记',
                  post_list: [
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                  ]
                },
                {
                  label: '路线',
                  post_list: [
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                  ]
                },
                {
                  label: '美食',
                  post_list: [
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                  ]
                },
                {
                  label: '故事',
                  post_list: [
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                  ]
                },
                {
                  label: '新闻',
                  post_list: [
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                  ]
                },
                {
                  label: '人物',
                  post_list: [
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                    { id: '', title: '', content: '帖子内容', },
                  ]
                },
              ];
              const cols = 3;
              const rows = Math.ceil(data.length / cols);
              return (
                Array.from(new Array(rows)).map((_, rowIndex) => (
                  [
                    <div
                      className="flex"
                    >
                      {Array.from(new Array(cols)).map((_, colIndex) => (
                        [
                          <div
                            className="flex"
                            style={{
                              flex: 1, justifyContent: 'center', alignItems: 'center',
                              height: 50,
                            }}
                          >
                            <div style={{ width: 22, height: 22, borderRadius: 8, backgroundColor: '#eee' }}></div>
                            <div style={{ width: 12 }}></div>
                            <span style={{ fontSize: 13, color: '#666' }}>{data[colIndex + rowIndex * cols].label}</span>
                          </div>,
                          colIndex !== cols - 1 && <div style={{ width: 1, height: 50, backgroundColor: '#eee' }}></div>
                        ]
                      ))}
                    </div>,
                    rowIndex !== rows - 1 && <div style={{ height: 1, backgroundColor: '#eee' }}></div>
                  ]
                ))
              );
            })()}
          </div>

          <div style={{ height: 8 }}></div>

          <Topic
            title="社区精选"
          />

          <div style={{ height: 8 }}></div>

          <Topic
            title="美食精选"
          />

          <div style={{ height: 8 }}></div>

          <Topic
            title="线路精选"
          />

          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 10, color: '#999' }}>@由xxx提供技术支持</span>
          </div>

          <div style={{ height: 8 }}></div>

        </div>
      </div>
    );
  }
}

PageHome.propTypes = {};
PageHome.defaultProps = {};

export default PageHome;
