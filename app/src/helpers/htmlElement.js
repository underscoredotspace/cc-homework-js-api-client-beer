const htmlElement = {
  textElement,
  imageElement
}

function textElement(tag, text, {id, className} = {}) {
  const element = document.createElement(tag)

  element.textContent = text
  if (id) {element.id = id}
  if (className) {element.classList.add(className)}

  return element
}

function imageElement(url, alt) {
  const image = document.createElement('img')

  image.src = url
  image.alt = alt

  return image
}


module.exports = htmlElement