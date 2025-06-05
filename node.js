var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  if (q.year && q.month === year && month) {
    txt = "You got the current" + q.year + " and month " + q.month;
  }
  res.end(txt);

}).listen(8080,);