// 默认网络代理的配置
const { createProxyMiddleware } = require('http-proxy-middleware');

      module.exports = function (app) {
  app.use(
    createProxyMiddleware('/pokeAPI', {
      target: 'https://pokeapi.co/api/v2',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '^/pokeAPI': '' },
    })
  );
};
