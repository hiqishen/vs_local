const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use('/api', createProxyMiddleware({
    target: 'http://175.24.4.13:3001',
    changeOrigin: true,
    pathRewrite: {
    }
  }));

  app.use('/mock', createProxyMiddleware({
    target: 'http://localhost:3333',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/mock': '', // axios 访问/douban/v2 == target + /v2
    }
  }));

};