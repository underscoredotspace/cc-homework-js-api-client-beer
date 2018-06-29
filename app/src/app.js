const RandomBeerView = require('./views/RandomBeer')
const BeerAPI = require('./models/BeerAPI')

const randomBeerButton = document.querySelector('button#random-beer')
const randomBeerView = new RandomBeerView(randomBeerButton)
randomBeerView.bindEvents()

const beerAPI = new BeerAPI
beerAPI.bindEvents()