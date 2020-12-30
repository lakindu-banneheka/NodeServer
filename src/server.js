const http = require('http');

const server = http.createServer(()=>{
    console.log('I here your reqvest. Thank you');
})

server.listen(3001);