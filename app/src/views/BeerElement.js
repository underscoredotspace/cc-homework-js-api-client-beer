const htmlElement = require('../helpers/htmlElement')

function beerElement(beer) {
  const altText = `Image of ${beer.name} label`
  const className = 'beer-detail__item'

  const elements = [
    htmlElement.textElement('h2', beer.name, {className:'beer-name'}),
    htmlElement.imageElement(beer.image_url, altText, {className:'beer-image'}),
    htmlElement.textElement('p', beer.description, {className:'beer-description'}),
    htmlElement.textElement('p', `${beer.abv}%`, {className:'beer-abv'})
  ]

  return htmlElement.wrapperElement('div', elements, {className})
}

module.exports = beerElement