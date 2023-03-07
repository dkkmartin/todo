import Cards from './cards'

export default class DOM {
  static getElement (selector) {
    return document.querySelector(selector)
  }

  static globalEventListener (type, selector, callback) {
    document.addEventListener(type, e => {
      if (e.target.matches(selector)) {
        callback(e)
      }
    })
  }

  static displayNone (element) {
    element.style.display = 'none'
  }

  static displayBlock (element) {
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
