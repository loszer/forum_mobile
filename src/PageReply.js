import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route }  from 'react-router-dom';

import Bmob from 'Bmob';

class PageReply extends React.Component {
  constructor(props) {
    super(props);

    const _search = props.location.search;
    const _id = _search.split('id=')[1];
    this.id = _id;

    this.state = {

      selectedIndex: 0,

      username: '',
      password: '',

      content: '',
    };

    this.reply = this.reply.bind(this);
  }

  reply() {
    if (this.state.content.length === 0) {
      alert('不能提交空内容');
      return;
    }

    var $this = this;
    // Declare the types.
    var post = Bmob.Object.createWithoutData("Post", $this.id);
    var Reply = Bmob.Object.extend("Reply");

    // Create the post
    // var myPost = new Post();
    // myPost.set("title", "I'm Hungry");
    // myPost.set("content", "Where should we go for lunch?");

    // Create the comment
    var reply = new Reply();
    reply.set("content", this.state.content);
    reply.set("from_id", Bmob.User.current().id);
    reply.set("to_id", )

    // Add the post as a value in the comment
    reply.set("parent", post);


    // This will save both myPost and myComment
    reply.save(null, {
      success: function () {
        alert('评论成功');
        $this.props.history.goBack();
      },
      error: function () {
        alert('评论失败');
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
          <span style={{ fontSize: 16, color: '#fff' }}>回帖</span>
          <div
            class="flex center"
            style={{
              position: 'absolute',
              left: 6, top: 0, bottom: 0,
            }}
          >
            <img
              src={require('@/assets/icon/icons8-back-26.png')} alt=""
              onClick={(e) => {
                e.preventDefault();
                this.props.history.goBack();
              }}
            />
          </div>
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
          <div style={{ height: 12 }}></div>

          <div
            style={{
              paddingLeft: 8,
              paddingRight: 8,
            }}
          >
            <textarea
              name="" id="" cols="30" rows="10"
              style={{
                width: '100%',
                fontSize: 14,
              }}
              value={this.state.content}
              onChange={(e) => {
                e.preventDefault();
                this.setState({ content: e.target.value });
              }}
            ></textarea>
          </div>

          <div style={{ height: 12 }}></div>

          <div
            style={{paddingLeft: 12, paddingRight: 12}}
          >
            <div
              className="flex center"
              style={{
                height: 42,
                backgroundColor: '#fff',
                borderRadius: 4, border: '1px solid #eee',
              }}
              onClick={(e) => {
                e.preventDefault();
                this.reply();
              }}
            >
              <span style={{color: '#333'}}>发表</span>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

PageReply.propTypes = {};
PageReply.defaultProps = {};

export default PageReply;
