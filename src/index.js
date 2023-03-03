// import { format, compareAsc } from 'date-fns'
import './style.css'
import DOM from './modules/dom'

const newProjectModal = DOM.getElement('.newproject__modal')
const newTodoModal = DOM.getElement('.newtodo__modal')
const projectsModal = DOM.getElement('.projects__modal')
const overlay = DOM.getElement('.overlay')

DOM.globalEventListener('click', '.sidebar__button__title', () => {
  DOM.displayblock(overlay)
  DOM.displayFlex(projectsModal)
})

DOM.globalEventListener('click', '.--decline', () => {
  DOM.displayNone(overlay)
  DOM.displayNone(projectsModal)
})
