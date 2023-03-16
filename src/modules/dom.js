export default class DOM {
  static getElement (selector) {
    return document.querySelector(selector)
  }

  static makeElement (newElement, elementContent, appendWhere, className) {
    const element = document.createElement(`${newElement}`)
    element.textContent = elementContent
    if (className) {
      element.classList.add(className)
    }
    this.getElement(`${appendWhere}`).append(element)
  }

  static globalEventListener (type, selector, callback) {
    document.addEventListener(type, e => {
      if (e.target.matches(selector)) {
        callback(e)
      }
    })
  }

  static clearCards () {
    const card = document.querySelectorAll('.card')
    card.forEach(item => {
      item.remove()
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

  static removeElement (element) {
    element.remove()
  }
}
