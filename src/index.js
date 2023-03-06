import { format, compareAsc } from 'date-fns'
import './style.css'
import DOM from './modules/dom'
import Cards from './modules/cards'

const newProjectModal = DOM.getElement('.newproject__modal')
const newTodoModal = DOM.getElement('.newtodo__modal')
const projectsModal = DOM.getElement('.projects__modal')
const overlay = DOM.getElement('.overlay')
const newTodoForm = DOM.getElement('.newtodo__form')
const newProjectForm = DOM.getElement('.newproject__form')

function closeEverything () {
  DOM.displayNone(overlay)
  DOM.displayNone(newProjectModal)
  DOM.displayNone(newTodoModal)
  DOM.displayNone(projectsModal)
  newProjectForm.reset()
  newTodoForm.reset()
}

function closeSomethings (thing1, thing2) {
  if (thing1) { DOM.displayNone(thing1) }
  if (thing2) { DOM.displayNone(thing2) }
}

DOM.globalEventListener('click', '.overlay', () => {
  closeEverything()
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

DOM.globalEventListener('click', '.newtodo--decline', e => {
  e.preventDefault()
  newTodoForm.reset()
  closeSomethings(overlay, newTodoModal)
})

DOM.globalEventListener('click', '.newproject--decline', e => {
  e.preventDefault()
  newProjectForm.reset()
  closeSomethings(overlay, newProjectModal)
})

DOM.globalEventListener('click', '.newtodo--accept', e => {
  e.preventDefault()
  const inputTitle = DOM.getElement('#nt__title__input')
  const inputDesc = DOM.getElement('#nt__description')
  const priority = DOM.getElement('#priority')
  const project = DOM.getElement('#project')
  const inputDate = DOM.getElement('#date')
  const date = inputDate.value
  const formatedDate = format(new Date(date), 'dd/MM/yyyy')
  const newCard = new Cards(inputTitle.value, inputDesc.value, formatedDate, project.value, priority.value)
  Cards.appendToArray(newCard)
  newTodoForm.reset()
  closeSomethings(overlay, newTodoModal)
})
