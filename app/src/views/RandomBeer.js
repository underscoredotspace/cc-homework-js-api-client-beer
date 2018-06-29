const pubSub = require('../helpers/pubSub')

const RandomBeer = function(element) {
  this.element = element
}

RandomBeer.prototype.bindEvents = function() {
  this.element.addEventListener('click', event => {
    pubSub.publish('RandomBeer:get-random')
  })
}

module.exports = RandomBeer