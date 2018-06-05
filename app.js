var http = require('http');
var handle = require('./handle');

var server = http.createServer(handle);
server.listen(3000, () => {
    console.log('Server is listening at port 3000');
});