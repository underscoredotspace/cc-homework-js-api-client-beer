function request(url, callback) {
  fetch(url)
    .then(res => res.json())
    .then(json => callback(null, json))
    .catch(error => callback(error, null))
}

module.exports = request