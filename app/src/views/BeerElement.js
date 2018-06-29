const htmlElement = require('../helpers/htmlElement')

function beerElement(beer) {
  const beerListItem = document.createElement('div')
  beerListItem.className = 'beer-list__item'

  beerListItem.appendChild(htmlElement.textElement('h2', beer.name))
  const altText = `Image of ${beer.name} label`
  beerListItem.appendChild(htmlElement.imageElement(beer.image_url, altText))
  beerListItem.appendChild(htmlElement.textElement('blockquote', beer.tagline))
  beerListItem.appendChild(htmlElement.textElement('p', `${beer.abv}%`))

  return beerListItem
}

module.exports = beerElement