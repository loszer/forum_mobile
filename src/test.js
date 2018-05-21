import Bmob from 'Bmob';

// 新建一个Foo对象并且存储一个它的实例foo
var Foo = Bmob.Object.extend('Foo');
var foo = new Foo();
foo.set('objname', 'Foo');
foo.save(null, {
  success: function (obj) {
    // 保存成功的回调处理
  },
  error: function (model, error) {
    // 保存失败的回调处理
  }
});

var GameScore = Bmob.Object.extend("GameScore");
var gameScore = new GameScore();
gameScore.set("score", 1337);
gameScore.save(null, {
  success: function(object) {
    alert("create object success, object id:"+object.id);
  },
  error: function(model, error) {
    alert("create object fail");
  }
});

// 用户注册
var user = new Bmob.User();
user.set("username", "my name");
user.set("password", "my pass");
user.signUp(null, {
  success: function (user) {
    // 用户注册成功
  },
  fail: function (user, error) {
    // 用户注册失败
  }
});

// 用户登录
Bmob.User.logIn("username", "password", {
  success: function () {
    // 登录成功
  },
  error: function (user, error) {
    // 登录失败
  }
});

// 用户退出
Bmob.User.current().logOut();







