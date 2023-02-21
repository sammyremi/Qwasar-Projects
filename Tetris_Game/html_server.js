function start_html_server() {
    const http = require('http');
    const fs = require('fs');

    const hostname = '0.0.0.0';
    const port = 8080;

    const server = http.createServer(function(request, response) {
        if (request.url === '/style.css') {
            response.writeHeader(200, {"Content-Type": "text/css"});
            const css = fs.readFileSync('./style.css', 'utf8');
            response.write(css);
            response.end();
        } else if (request.url === '/my_tetris.js') {
            response.writeHeader(200, {"Content-Type": "application/javascript"});
            const js = fs.readFileSync('./my_tetris.js', 'utf8');
            response.write(js);
            response.end();
        } else {
            response.writeHeader(200, {"Content-Type": "text/html"});
            html = fs.readFileSync('./index.html', 'utf8');
            response.write(html);
            response.end();
        }
    }).listen(port, hostname, () => {
        console.log("Server running at http://web-ba0f9d86a-be62.docode.fi.qwasar.io/");
        console.log("Replace web-ba0f9d86a-be62 by your current workspace ID");
        console.log("(look at the URL of this page and http://web-ba0f9d86a-be62.docode.fi.qwasar.io, web-ba0f9d86a-be62 is your workspace ID and fi is your zone)");
    });
}

start_html_server();
