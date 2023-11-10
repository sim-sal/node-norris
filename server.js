// importo libreria http
const http = require("http");

// importo libreria dotenv
const dotenv = require("dotenv");

// importo il file in cui è presente la funzione che cattura l'oggetto dell'api
const loadNorrisJokes = require("./utilities/loadNorrisJokes")

// avviamo dotenv, deve essere eseguito prima di accedere alle variabili d'ambiente
dotenv.config();

// creiamo una variabile per la porta da utilizzare
const port = process.env.PORT || 3000;

// creiamo il server
const serverAsync = http.createServer((req, res) => {
    loadNorrisJokes((data) => {
        // console.log(data);
        // Estraggo solo il campo "value" dall'oggetto API
        const jokeValue = data.value;

        // Invio il campo "value" come risposta HTTP
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(jokeValue);
    });
});

// mettiamo il server in ascolto 
serverAsync.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});