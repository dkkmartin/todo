import { format } from 'date-fns'
import './style.css'
import DOM from './modules/dom'
import Cards from './modules/cards'

let indexOfCardPicked
const newProjectModal = DOM.getElement('.newproject__modal')
const newTodoModal = DOM.getElement('.newtodo__modal')
const projectsModal = DOM.getElement('.projects__modal')
const editTodoModal = DOM.getElement('.edittodo__modal')
const overlay = DOM.getElement('.overlay')
const newTodoForm = DOM.getElement('.newtodo__form')
const newProjectForm = DOM.getElement('.newproject__form')
const inputDate = DOM.getElement('#date')
const dateToday = format(new Date(), 'yyyy-MM-dd')

function defaultDatePicker () {
  inputDate.value = dateToday
  inputDate.setAttribute('min', dateToday)
}

function closeEverything () {
  DOM.displayNone(overlay)
  DOM.displayNone(newProjectModal)
  DOM.displayNone(newTodoModal)
  DOM.displayNone(projectsModal)
  DOM.displayNone(editTodoModal)
  newProjectForm.reset()
  newTodoForm.reset()
}

DOM.globalEventListener('click', '.overlay', () => {
  closeEverything()
})

DOM.globalEventListener('click', '.sidebar__button__title', e => {
  if (e.target.classList.contains('title--newproject')) {
    DOM.displayBlock(overlay)
    DOM.displayBlock(newProjectModal)
  }
  if (e.target.classList.contains('title--newtodo')) {
    DOM.displayBlock(overlay)
    DOM.displayBlock(newTodoModal)
    defaultDatePicker()
  }
  if (e.target.classList.contains('title--projects')) {
    DOM.displayBlock(overlay)
    DOM.displayFlex(projectsModal)
  }
})

DOM.globalEventListener('click', '.newtodo--decline', e => {
  e.preventDefault()
  newTodoForm.reset()
  closeEverything()
})

DOM.globalEventListener('click', '.newproject--decline', e => {
  e.preventDefault()
  newProjectForm.reset()
  closeEverything()
})

DOM.globalEventListener('click', '.newtodo--accept', e => {
  e.preventDefault()
  const inputTitle = DOM.getElement('#nt__title__input')
  const inputDesc = DOM.getElement('#nt__description')
  const priority = DOM.getElement('#priority')
  const project = DOM.getElement('#project')
  const date = inputDate.value
  const formatedDate = format(new Date(date), 'dd/MM/yyyy')
  const newCard = new Cards(inputTitle.value, inputDesc.value, formatedDate, project.value, priority.value)
  Cards.appendChecker(newCard)
  newTodoForm.reset()
  closeEverything()
})

DOM.globalEventListener('click', '.fa-trash-alt', e => {
  Cards.removeOneCard(e.target.parentNode.parentNode.parentNode)
})

DOM.globalEventListener('click', '.fa-edit', e => {
  indexOfCardPicked = e.target.parentNode.parentNode.parentNode.dataset.index
  DOM.displayBlock(overlay)
  DOM.displayBlock(editTodoModal)
  defaultDatePicker()
})

DOM.globalEventListener('click', '.edittodo--accept', e => {
  e.preventDefault()

  const inputTitle = DOM.getElement('#nt__title__input')
  const inputDesc = DOM.getElement('#nt__description')
  const priority = DOM.getElement('#priority')
  const project = DOM.getElement('#project')
  const date = inputDate.value
  const formatedDate = format(new Date(date), 'dd/MM/yyyy')
  Cards.editCard()
  newTodoForm.reset()
})
