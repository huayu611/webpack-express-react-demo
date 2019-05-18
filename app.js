var express = require('express');
var path = require('path');
var reactViews = require('express-react-views');
var app = express();
var port = 3000;
  //加载react的js引擎
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());
//获取是否是开发模式
var dev = process.env.NODE_ENV !== 'production';
app.set('views', path.resolve(__dirname, './server/view'));
app.use(express.static(path.join(__dirname, 'public')));
if (dev) {
  app.locals.reload = true;
  var webpack = require('webpack');
  //webpack开发中间件
  var webpackDevMiddleware = require('webpack-dev-middleware');
  //webpack热启动中间件
  var webpackHotMiddleware = require('webpack-hot-middleware');
  //加载webpack的配置文件，由于是express来启动。所以需要在这里配置配置文件件，让express拉webpack进来，然后按webpack中路由进行客户端渲染。
  var webpackDevConfig = require('./webpack.config.dev.js');
  var compiler = webpack(webpackDevConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
  }));
  app.use(webpackHotMiddleware(compiler));
  //加载express的路由。
  require('./server/route')(app);
  //创建服务端连接，打开端口监听
  var http = require('http');
  var server = http.createServer(app);
  server.listen(port, function () {
    console.log('Devlopement start success');
  });
}
else {
  //生产环境不需要用webpack，需要在package.json中配置production
  require('./server/route')(app);
  app.listen(port, function () {
    console.log('Production start success');
  });
}