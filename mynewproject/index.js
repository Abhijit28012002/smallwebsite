const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html')
const song = fs.readFileSync('song.html')
const popmusic = fs.readFileSync('popmusic.html')
const arijit = fs.readFileSync('arijit.html')
const punjabi = fs.readFileSync('punjabi.html')
const romentic = fs.readFileSync('romentic.html')
const party = fs.readFileSync('party.html')
const south = fs.readFileSync('south.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/song'){
        res.end(song);
    }
    else if(url == '/'){
       res.end(home);
    }
    else if(url == '/popmusic'){
        res.end(popmusic);
    }
    else if(url == '/arijit'){
        res.end(arijit);
    }
    else if(url == '/romentic'){
        res.end(romentic);
    }
    else if(url == '/south'){
        res.end(south);
    }
    else if(url == '/party'){
        res.end(party);
    }
    else if(url == '/punjabi'){
        res.end(punjabi);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
