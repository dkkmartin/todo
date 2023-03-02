// import { format, compareAsc } from 'date-fns'
import './style.css'
import { globalEventListener, resize, expand } from './modules/utils'
import DOM from './modules/dom'
import ModalMaker from './modules/modals'

globalEventListener('click', '.sidebar__button__title', e => {
  // if btn parentElement has classlist then resize else expand
  if (e.target.parentElement.classList.contains('expand')) {
    resize(e.target.parentElement)
    console.log('Resizing...')
  } else {
    expand(e.target.parentElement)
    console.log('Expanding...')
    ModalMaker.makeModal(e.target, e.target.nextElementSibling)
    console.log(e.target.nextElementSibling)
  }
})
