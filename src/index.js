// import { format, compareAsc } from 'date-fns'
import './style.css'
import DOM from './modules/dom'

const newProjectModal = DOM.getElement('.newproject__modal')
const newTodoModal = DOM.getElement('.newtodo__modal')
const projectsModal = DOM.getElement('.projects__modal')
const overlay = DOM.getElement('.overlay')

DOM.globalEventListener('click', '.overlay', () => {
  DOM.displayNone(overlay)
  DOM.displayNone(newProjectModal)
  DOM.displayNone(newTodoModal)
  DOM.displayNone(projectsModal)
})

DOM.globalEventListener('click', '.sidebar__button__title', e => {
  if (e.target.classList.contains('title--newproject')) {
    DOM.displayBlock(overlay)
    DOM.displayBlock(newProjectModal)
    console.log(e.target.classList)
  }
  if (e.target.classList.contains('title--newtodo')) {
    DOM.displayBlock(overlay)
    DOM.displayBlock(newTodoModal)
    console.log(e.target.classList)
  }
  if (e.target.classList.contains('title--projects')) {
    DOM.displayBlock(overlay)
    DOM.displayFlex(projectsModal)
    console.log(e.target.classList)
  }
})

DOM.globalEventListener('click', '.--decline', e => {
  if (e.target.classList.contains('projects')) { console.log('Contains projects') }
  if (e.target.classList.contains('--decline')) { console.log('Contains --decline') }
  if (e.target.classList.contains('--decline')) { console.log('Contains --decline') }
  DOM.displayNone(overlay)
  DOM.displayNone(projectsModal)
})
