let http = require('http')

const PORT = 7000

const HOST = 'localhost'

let server = http.createServer((request, response)=>{
  response.writeHead(200,{'Content-Type':'text/plane; charset=utf-8'})

  if(request.url === '/'){
    response.end('main page')
  }
  if(request.url === '/about'){
    response.end('about page')
  }
  if( request.url === '/some'){
    response.end('some text about server')
  }
  
})

server.listen(PORT,HOST,()=>{
  console.log(`started on http://${HOST}:${PORT}`)
})