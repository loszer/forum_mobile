import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route }  from 'react-router-dom';
import {connect} from 'react-redux';

import Bmob from 'Bmob';

class PageWrite extends React.Component {
  constructor(props) {
    super(props);

    const currentUser = Bmob.User.current();
    console.log(currentUser.id);

    this.state = {
      selectedIndex: 0,
      content: '',

      user_id: currentUser.id,
    };

    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onCancel() {
    this.props.history.goBack();
  }

  onSave() {

    // var currentUser = Bmob.User.current();
    // console.log(currentUser);
    // return;
    if (this.state.content.length == 0) {
      alert('内容不能为空');
      return;
    }
    var $this = this;
    var Post = Bmob.Object.extend("Post");
    var post = new Post();
    var user = Bmob.Object.createWithoutData("User", this.state.user_id);
    post.set("parent", user);
    post.save({
      type: 0,
      title: '测试标题' + (new Date()).toLocaleString(),
      content: $this.state.content,
    }, {
      success: function(object) {
        alert('发表成功');
        $this.props.history.goBack();
      },
      error: function(model, error) {
        alert('发表失败');
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
            position: 'relative',
          }}
        >
          <span style={{ fontSize: 16, color: '#fff' }}>新记录</span>
          <div
            className="flex"
            style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              alignItems: 'center',
              paddingLeft: 12,
            }}
            onClick={(e) => {
              e.preventDefault();
              this.onCancel();
            }}
          >
            <span style={{ fontSize: 16, color: '#fff' }}>取消</span>
          </div>
          <div
            className="flex"
            style={{
              position: 'absolute', right: 0, top: 0, bottom: 0,
              alignItems: 'center',
              paddingRight: 12,
            }}
            onClick={(e) => {
              e.preventDefault();
              this.onSave();
            }}
          >
            <span style={{ fontSize: 16, color: '#fff' }}>保存</span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 47, bottom: 47, left: 0, right: 0,
            backgroundColor: '#fff',
            padding: 15,
            // overflowY: 'auto',
            overflow: 'hidden',
          }}
        >
          {/*<select name="" id="">*/}
            {/*<option value="1">1</option>*/}
            {/*<option value="2">2</option>*/}
            {/*<option value="3">3</option>*/}
          {/*</select>*/}

          <div
            class="flex"
            style={{
              width: '100%', height: 32,
              alignItems: 'center',
            }}
          >
            <input
              type="text" placeholder="标题"
              style={{
                width: '100%',
                height: '100%',
                // borderBottom: '1px solid #eee',
              }}
              value={this.state.title}
              onChange={(e) => {
                e.preventDefault();
                this.setState({ title: this.state.title });
              }}
            />
          </div>

          <div style={{ height: 12 }}></div>

          <textarea
            name="" id=""
            style={{
              width: '100%', height: '80%',
              border: '1px solid #eee',
              WebkitAppearance: 'none',
              padding: 8,
              fontSize: 14,
            }}
            placeholder="内容"
            value={this.state.content}
            onChange={(e) => {
              e.preventDefault();
              this.setState({ content: e.target.value });
            }}
          ></textarea>
        </div>

        <div
          className="flex"
          style={{
            position: 'fixed', height: 47,
            left: 0, right: 0, bottom: 0,
            backgroundColor: '#fff',
            alignItems: 'center', paddingLeft: 12,
            borderTop: '1px solid #ddd',
          }}
        >
          <span style={{ fontSize: 13, color: '#666' }}>富文本编辑器</span>
        </div>

      </div>
    );
  }
}

PageWrite.propTypes = {};
PageWrite.defaultProps = {};

export default connect()(PageWrite);
