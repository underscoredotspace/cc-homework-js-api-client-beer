const pubSub = require('../helpers/pubSub')
const request = require('../helpers/request')

class BeerAPI {
  constructor() {
    const baseURL = 'https://api.punkapi.com/v2/beers'

    this.url = {
      random: `${baseURL}/random`
    }
  }

  bindEvents() {
    pubSub.subscribe('RandomBeer:get-random', () => {
      this.getRandom()
    })
  }

  get(url, callback) {
    request(url, (error, response) => {
      if (error) {
        alert('Error!')
        console.error(error)
        return 
      }

      callback(response)      
    })
  }

  getRandom() {
    this.get(this.url.random, response => {
      const randomBeer = response[0]
      pubSub.publish('BeerAPI:random-beer', randomBeer)
    })
  }
    
}

module.exports = BeerAPI