import Cards from './cards'

export default class Storage {
  static setToStorage () {
    for (let i = 0; i < Cards.cardsArray.length; i++) {
      window.localStorage.setItem(`card_${i}`, JSON.stringify(Cards.cardsArray[i]))
    }
  }

  static getFromStorage () {

  }
}
