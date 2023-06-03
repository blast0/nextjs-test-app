cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
}).listen(3002, '0.0.0.0', () => {
  console.log('CORS proxy server running on 0.0.0.0:3002');
});