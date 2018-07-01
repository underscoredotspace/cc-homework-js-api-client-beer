const htmlElement = {
  textElement,
  imageElement,
  wrapperElement
}

function textElement(tag, text=null, {id, className} = {}) {
  const element = document.createElement(tag)
  if (text) {element.textContent = text}
  if (id) {element.id = id}
  if (className) {element.classList.add(className)}

  return element
}

function imageElement(url, alt, {id, className} = {}) {
  const image = document.createElement('img')
  if (id) {image.id = id}
  if (className) {image.classList.add(className)}

  image.src = url
  image.alt = alt
  image.title = alt

  return image
}

function wrapperElement(tag, elements, {id, className} = {}) {
  const wrapper = this.textElement(tag, null, {id, className})

  for (const element of elements) {
    wrapper.appendChild(element)
  }

  return wrapper
}


module.exports = htmlElement