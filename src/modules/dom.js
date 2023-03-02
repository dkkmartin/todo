export default class DOM {
  static getElement (selector) {
    return document.querySelector(selector)
  }

  static createNode (tagName, attributes = {}, children = []) {
    const node = document.createElement(tagName)

    Object.entries(attributes).forEach(([key, value]) => {
      node.setAttribute(key, value)
    })

    children.forEach(child => {
      node.appendChild(child)
    })

    return node
  }

  static displayNone (element) {
    element.style.display = 'none'
  }

  static displayblock (element) {
    element.style.display = 'block'
  }

  static displayFlex (element) {
    element.style.display = 'flex'
  }

  static addClass (element, className) {
    element.classList.add(className)
  }

  static removeClass (element, className) {
    element.classList.remove(className)
  }
}
