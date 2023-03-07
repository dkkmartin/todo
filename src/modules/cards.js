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

  static showCards () {
    return this.cardsArray
  }

  static appendChecker (card) {
    try {
      if (card.title === '') throw new Error('Title is empty')
    } catch (err) {
      return console.warn(err)
    }
    this.appendToArray(card)
    this.makeCard(card)
  }

  static appendToArray (card) {
    this.cardsArray.push(card)
    console.log(this.cardsArray)
  }

  static removeFromArray (card) {
    this.cardsArray.pop(card)
    console.log(this.cardsArray)
  }

  static makeCard (object) {
    const mainContent = DOM.getElement('.main__content__cards')
    const cardTemplate = `<div class="card">
    <div class="card__content__container">
      <button class="button button__ellipse"></button>
      <div class="card__content__text__container">
        <h5 class="card__content__title">${object.title}</h5>
        <div class="card__content__info__container">
          <div class="info__calendar">
            <i class="icon far fa-calendar"></i>
            <p class="card__info__date">${object.date}</p>
          </div>
          <div class="info__project">
            <i class="icon far fa-folder"></i>
            <p class="card__info__project">${object.project}</p>
          </div>
          <div class="info__priority">
            <i class="fa-solid fa-exclamation"></i>
            <p class="card__info__priority">${object.prio}</p>
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
    const template = document.createElement('template')
    template.innerHTML = cardTemplate.trim()
    const clon = template.content.cloneNode(true)
    mainContent.append(clon)
  }
}
