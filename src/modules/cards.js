import DOM from './dom'

export default class Cards {
  static cardsArray = []

  constructor (title, desc, date, project, prio) {
    this.title = title
    this.desc = desc
    this.date = date
    this.project = project
    this.prio = prio
  }

  static appendChecker (card) {
    try {
      if (card.title === '') throw new Error('Title is empty')
    } catch (err) {
      return alert(err)
    }
    this.appendToArray(card)
    this.makeCardsToScreen()
  }

  static appendToArray (card) {
    this.cardsArray.push(card)
    console.log(this.cardsArray)
  }

  static removeOneCard (card) {
    this.cardsArray.splice(card.dataset.index, 1)
    this.makeCardsToScreen()
  }

  static editCard (...args) {

  }

  static makeCardsToScreen () {
    DOM.clearCards()
    const mainContent = DOM.getElement('.main__content__cards')
    const template = document.createElement('template')
    this.cardsArray.forEach(element => {
      const cardTemplate = `<div class="card" data-index="${this.cardsArray.indexOf(element)}">
      <div class="card__content__container">
        <button class="button button__ellipse"></button>
        <div class="card__content__text__container">
          <h5 class="card__content__title">${element.title}</h5>
          <div class="card__content__info__container">
            <div class="info__calendar">
              <i class="icon far fa-calendar"></i>
              <p class="card__info__date">${element.date}</p>
            </div>
            <div class="info__project">
              <i class="icon far fa-folder"></i>
              <p class="card__info__project">${element.project}</p>
            </div>
            <div class="info__priority">
              <i class="fa-solid fa-exclamation"></i>
              <p class="card__info__priority">${element.prio}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card__content__icons__container">
        <button class="button button--edit button--nostyle">
          <i class="icon icon--blue far fa-edit"></i>
        </button>
        <button class="button button--delete button--nostyle">
          <i class="icon icon--red far fa-trash-alt"></i>
        </button>
      </div>
    </div>`
      template.innerHTML = cardTemplate.trim()
      const clon = template.content.cloneNode(true)
      mainContent.append(clon)
    })
  }
}
