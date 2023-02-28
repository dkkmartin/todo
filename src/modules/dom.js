import { expander, resizer } from './animation'
import { modalMaker, returnContent } from './modals'

export function btnsListener () {
  const sideBtns = document.querySelectorAll('.sidebar__button')
  const sideBtnsDecline = document.querySelectorAll('.checkmark--decline')
  const editBtns = document.querySelectorAll('.button--edit')

  // Card edit button
  for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', () => {
      // Add modal
    })
  }

  // Sidemenu buttons
  for (let i = 0; i < sideBtns.length; i++) {
    sideBtns[i].addEventListener('click', () => {
      if (sideBtns[i].classList.contains('resize')) {
        return ''
      } else {
        expander(sideBtns[i])
      }
    })
    sideBtns[i].addEventListener('animationend', () => {
      if (sideBtns[i].classList.contains('expand')) {
        modalMaker(sideBtns[i])
      } else {
        return ''
      }
    })
  }

  for (let i = 0; i < sideBtnsDecline.length; i++) {
    sideBtnsDecline[i].addEventListener('click', () => {
      returnContent(sideBtns[i])
      resizer(sideBtns[i])
    })
  }
}
