const fetch = require("node-fetch").default;

/**
 * 
 * @param {Function} onSuccess 
 */

function loadNorrisJokes(onSuccess) {
    const url = "https://api.chucknorris.io/jokes/random";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            onSuccess(data);
        });
}

module.exports = loadNorrisJokes;