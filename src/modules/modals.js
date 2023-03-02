import DOM from './dom'

export default class ModalMaker {
  static makeModal (title, nextDiv) {
    // Hide the title button
    DOM.displayNone(title)
    // show the modal
    DOM.displayblock(nextDiv)
  }

  static removeModal (element) {
    DOM.displayblock(element)
  }
}
