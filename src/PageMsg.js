import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route }  from 'react-router-dom';

// 添加swipe或者操作按钮
const ItemMsg = (props) => {
  return (
    <div
      style={{
        paddingLeft: 8, paddingRight: 8,
        width: '100%', height: 62,
      }}
    >
      <div
        className="flex"
        style={{
          width: '100%', height: '100%', overflow: 'hidden',
          backgroundColor: '#fff',
          borderRadius: 6, border: '1px solid #eee',
          boxShadow: '1 1 0 rgba(200,200,200,0.15)',
          alignItems: 'center',
        }}
      >
        <div style={{ width: 8 }}></div>
        <div style={{ width: 38, height: 38, borderRadius: '50%', backgroundColor: '#eee' }}></div>
        <div style={{ width: 15 }}></div>
        <div
          className="flex-col"
          style={{
            flex: 1, height: '100%', justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 13, color: '#333' }}>管理员</span>
          <span style={{ fontSize: 10, color: '#666' }}>管理删除了你的帖子，请查收......</span>
        </div>
      </div>
    </div>
  );
};

class PageMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg_list: [
        {
          id: '',
          content: '',
          from_id: '',
        },
        {
          id: '',
          content: '',
          from_id: '',
        },
        {
          id: '',
          content: '',
          from_id: '',
        },
      ]
    };
  }

  addOneItem() {
    let copyList = this.state.msg_list.splice(0);
    const newList = copyList.push({ id: 'newid', content: 'new content' });
    this.setState({});
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
          <span style={{ fontSize: 16, color: '#fff' }}>消息</span>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 0, right: 0, top: 47, bottom: 0,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {Array.from(new Array(12)).map((item, index) => (
            [
              <div style={{ height: 8 }}></div>,
              <ItemMsg/>,
            ]
          ))}

          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 11, color: '#999' }}>@一切解释权归xxx公司所有</span>
          </div>

        </div>
      </div>
    );
  }
}

PageMsg.propTypes = {};
PageMsg.defaultProps = {};

export default PageMsg;
