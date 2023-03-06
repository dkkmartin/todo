export default class Cards {
  static cardsArray = []

  constructor (title, desc, date, project, prio) {
    this.title = title
    this.desc = desc
    this.date = date
    this.project = project
    this.prio = prio
  }

  static appendToArray (object) {
    this.cardsArray.push(object)
    console.log(this.cardsArray)
  }

  static removeFromArray (object) {
    this.cardsArray.pop(object)
    console.log(this.cardsArray)
  }

  static showCards
}
