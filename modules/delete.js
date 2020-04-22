'use strict';

const errorHandler = require('./error');

function deleteArticlesFromDB(request, response) {
    console.log(request.params);
    const SQL = `
        DELETE FROM articles
        WHERE id = $1
    `;

    client.query(SQL, [request.params.id])
        .then(() => response.redirect('/catalog'))
        .catch(err => errorHandler(err, request, response))
}

module.exports = deleteArticlesFromDB;