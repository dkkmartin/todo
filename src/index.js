// import { format, compareAsc } from 'date-fns'
import './style.css'
import { globalEventListener, resize, expand } from './modules/utils'
import DOM from './modules/dom'
import ModalMaker from './modules/modals'

const newProjectModal = DOM.getElement('.newproject__modal')
const newTodoModal = DOM.getElement('.newtodo__modal')
const projectsModal = DOM.getElement('.projects__modal')

globalEventListener('click', '.sidebar__button__title', e => {
  expand(e.target.parentElement)
  console.log('Expanding...')
  ModalMaker.makeModal(e.target, e.target.nextElementSibling)
})

globalEventListener('click', '.checkmark--decline', e => {
  console.log('hello')
  resize(newProjectModal)
})
