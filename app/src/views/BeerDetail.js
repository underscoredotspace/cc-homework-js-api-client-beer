const pubSub = require('../helpers/pubSub')
const beerElement = require('./BeerElement')

class BeerDetail {
  constructor(element) {
    this.element = element
  }

  bindEvents() {
    pubSub.subscribe('BeerAPI:random-beer', event => {
      const beerDetail = event.detail
      this.renderOne(beerDetail)
    })
  }

  renderOne(beer) {
    this.element.appendChild(beerElement(beer))
  }
}

module.exports = BeerDetail