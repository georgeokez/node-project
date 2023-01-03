const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node Js Simple User Server</title></head>');
        res.write('<body> ' +
                    '<h1>Hello, welcome to my page.</h1>' +
                    '<p>This page enables you to create a user that gets logged to the console!</p>' + 
                    '<form action="/create-user" method="POST">' +
                        '<label for="username">username</label>' +
                        '<input type="text" id="username" name="username">' +
                        '<button>Submit</button>' +
                    '</form>' +
                '</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node Js Simple User Server</title></head>');
        res.write('<body> ' +
                    '<h3>List of Users</h3>' +
                    '<ul><li>User 1</li><li>User 2</li></ul>' +
                '</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log('Entered Username:',username);
        }); 
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node.Js Html Generated Page</title></head>');
    res.write('<body><h1>404 - Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(PORT);