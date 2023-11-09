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
const server = http.createServer(function (req, res) {

    const jokes = loadNorrisJokes();

    return
});

// mettiamo il server in ascolto 
server.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});