const fetch = require("node-fetch").default;

function loadNorrisJokes() {
    const url = "https://api.chucknorris.io/jokes/random";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}

module.exports = loadNorrisJokes;