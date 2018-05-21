import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import { Switch, Route }  from 'react-router-dom';

import Bmob from 'Bmob';

class PageDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    const _search = props.location.search;
    const _id = _search.split('=')[1];
    this.state = {
      id: _id,
      data: null,
      title: null,
      content: null,
      last: null,

      reply_list: [],

      author: null,
      time: null,

      // post_id: _id,
      // title: '我的未来不是梦',
      // user: '用户000',
      // post: {
      //   id: '',
      //   title: '我的未来不是梦',
      //   content: '蒹葭苍苍，白露为霜',
      //   reply_list: [],
      // },
      // // 回帖列表
      // reply_list: {
      //   'id000': {
      //     id: 'id000',
      //     content: '',
      //     from_id: '',
      //     to_id: '',
      //   }
      // }
    };
  }

  componentDidMount() {
    var $this = this;
    var Post = Bmob.Object.extend("Post");
    var query = new Bmob.Query(Post);
    query.include("user");
    query.get(this.state.id,{
      success: function(result) {
        console.log(result);
        $this.setState({
          // data:result,
          title: result.attributes.title,
          content: result.attributes.content,
          last: result.attributes.createdAt,
          time: result.updatedAt,
        });
        var User = Bmob.Object.extend("User");
        var query00 = new Bmob.Query(User);
        query00.get(result.attributes.parent.id, {
          success: function (obj) {
            // console.log('!!!');
            // console.log(obj);
            $this.setState({
              author: obj.attributes.username,
            });
          }
        });
      },
      error: function(object, error) {
        console.log("query object fail");
      }
    });

    var Reply = Bmob.Object.extend("Reply");
    var query01 = new Bmob.Query(Reply);
    query01.equalTo("parent", this.state.id);
    query01.find({
      success: function(obj) {
        console.log(obj);
        $this.setState({
          reply_list: obj,
        }, () => {
          var User = Bmob.Object.extend('User');
          // 遍历出用户名称
          let username_list = [];
          $this.state.reply_list.map((item, index, arr) => {
            var user_id = item.attributes.from_id;
            var query02 = new Bmob.Query(User);
            query02.get(user_id, {
              success: function (obj) {
                console.log(obj);
                username_list.push(obj.attributes.username);
                if (index === arr.length - 1) {
                  $this.setState({
                    username_list: username_list,
                  }, () => console.log($this.state.username_list));
                }
              }
            })
          });

          // new Promise((resolve, rejct) => {
          //   let username_list = [];
          //   $this.state.reply_list.map((item, index) => {
          //     var user_id = item.attributes.from_id;
          //     var query02 = new Bmob.Query(User);
          //     query02.get(user_id, {
          //       success: function (obj) {
          //         console.log(obj);
          //
          //       }
          //     })
          //   });
          // }).then((username_list) => {
          //   this.setState({
          //     username_list: username_list,
          //   });
          // });
        });
      },
      error: function(object, error) {
        console.log("query object fail");
      }
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="page">
        <div
          class="flex"
          style={{
            // position: 'fixed',
            left: 0, right: 0, top: 0,
            height: 47, backgroundColor: '#00CEDB',
            borderBottom: '1px solid #eee',
            justifyContent: 'center', alignItems: 'center',
            position: 'absolute'
          }}
        >
          <span style={{ fontSize: 16, color: '#fff' }}>帖子</span>
          <div
            className="flex"
            style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0, width: 52,
              justifyContent: 'center', alignItems: 'center'
            }}
            onClick={(e) => {
              e.preventDefault();
              this.props.history.goBack();
            }}
          >
            <img
              src={require('@/assets/icon/icons8-back-26.png')} alt=""
              style={{ width: 26, }}
            />
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 0, right: 0, top: 47, bottom: 47,
            display: 'block', overflowY: 'auto',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff', border: '1px solid #eee',
              width: '100%',
              paddingTop: 6, paddingBottom: 12,
            }}
          >
            <div class="flex center" style={{ justifyContent: 'center' }}>
              <span style={{ fontSize: 20, color: '#333' }}>{this.state.title}</span>
            </div>
            <div class="flex" style={{ justifyContent: 'flex-end', color: '#999', fontSize: 12, }}>
              <span>{this.state.time}</span>
              <div style={{ width: 8 }}></div>
              {/*<span>{this.state.author}</span>*/}
              {/*<div style={{ width: 6 }}></div>*/}
            </div>
            <div className="flex" style={{justifyContent: 'flex-end', color: '#999', fontSize: 12,}}>
              {/*<span>{this.state.time}</span>*/}
              {/*<div style={{width: 8}}></div>*/}
              <span>{'作者: ' + this.state.author}</span>
              <div style={{width: 6}}></div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#fff', border: '1px solid #eee',
              width: '100%',
              padding: 15,
              fontSize: 14, color: '#666'
            }}
          >
            {this.state.content}
          </div>

          <div style={{ height: 12 }}></div>

          {/* 评论 */}
          <div
            style={{
              backgroundColor: '#fff', border: '1px solid #eee',
              width: '100%',
              padding: 15,
            }}
          >
            <div>
              <span style={{ fontSize: 14, color: '#333' }}>热门评论</span>
            </div>
            <div style={{ height: 4 }}></div>
            {this.state.reply_list.length !== 0 && this.state.reply_list.map((item, index, arr) => (
              [
                <div
                  key={`item_${index}`}
                  style={{ paddingTop: 8, paddingBottom: 8 }}
                >
                  <div class="flex">
                    <div style={{ width: 22, height: 22, backgroundColor: '#eee', borderRadius: '50%' }}></div>
                    <div style={{ width: 8 }}></div>
                    <span style={{ fontSize: 13, }}>{this.state.username_list[index]}</span>
                    {/*<span style={{ fontSize: 13, }}>{' '}</span>*/}
                  </div>
                  <span style={{ fontSize: 14, color: '#999' }}>{item.attributes.content || ' '}</span>
                </div>,
                index != arr.length - 1 && <div style={{ height: 1, width: '100%', backgroundColor: '#ddd' }}></div>
              ]
            ))}
          </div>
        </div>


        {/* layout 底部工作栏目 */}
        <div
          className="flex"
          style={{
            position: 'fixed', left: 0, right: 0, bottom: 0, height: 47,
            backgroundColor: '#fff', borderTop: '1px solid #ddd',
            alignItems: 'center',
          }}
        >
          {(() => {
            const data = [
              { label: '点赞' },
              { label: '收藏' },
              {
                label: '评论', handle: () => {
                  var currentUser = Bmob.User.current();
                  if (currentUser) {
                    this.props.history.push(`/reply?id=${this.state.id}`);
                  } else {
                    alert('你还没有登陆');
                    this.props.history.push('/login')
                  }
                },
              },
            ];
            return (
              data.map((item, index) => (
                <div
                  key={`tool_${index}`}
                  className="flex"
                  style={{
                    flex: 1, justifyContent: 'center', alignItems: 'center',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    item.handle && item.handle();
                  }}
                >
                  <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: '#eee' }}></div>
                  <div style={{ width: 8 }}></div>
                  <span style={{ fontSize: 13, color: '#666' }}>{item.label}</span>
                </div>
              ))
            );
          })()}
        </div>
      </div>
    );
  }
}

PageDetail.propTypes = {};
PageDetail.defaultProps = {};

export default connect()(PageDetail);
