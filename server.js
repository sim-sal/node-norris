// importo libreria http
const http = require("http");

// importo libreria dotenv
const dotenv = require("dotenv");

// avviamo dotenv
dotenv.config();

// creiamo una variabile per la porta da utilizzare
const port = process.env.PORT || 3000;

// creiamo il server
const server = http.createServer(function (req, res) {

    // specifichiamo il modo in cui il server deve rispondere
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Ciao Moduli e Librerie!</h1>");
});

server.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});