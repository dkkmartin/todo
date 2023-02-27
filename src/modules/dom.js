import { animator } from './animation'
import { modalMaker, returnOGContent } from './modals'

export function btnsListener () {
  const sideBtns = document.querySelectorAll('.sidebar__button')
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
      animator(sideBtns[i])
      // modal insert
      modalMaker(sideBtns[i])
    })
    sideBtns[i].addEventListener('mouseout', () => {
      returnOGContent()
      sideBtns[i].classList.remove('expand')
    })
  }
}
