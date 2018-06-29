const RandomBeerView = require('./views/RandomBeer')
const BeerDetailView = require('./views/BeerDetail')
const BeerAPI = require('./models/BeerAPI')

const randomBeerButton = document.querySelector('button#random-beer')
const randomBeerView = new RandomBeerView(randomBeerButton)
randomBeerView.bindEvents()

const beerAPI = new BeerAPI
beerAPI.bindEvents()

const beerDetailElement = document.querySelector('section#beer-detail')
const beerDetailView = new BeerDetailView(beerDetailElement)
beerDetailView.bindEvents()