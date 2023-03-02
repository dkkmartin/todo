import DOM from './dom'
import { delay } from './utils'

export default class ModalMaker {
  static makeModal (title, nextDiv) {
    // Hide the title button
    DOM.displayNone(title)
    // Wait 1 second
    // show the modal
    delay(500).then(() => DOM.displayFlex(nextDiv))
  }

  static removeModal (element) {
    DOM.displayblock(element)
  }
}
