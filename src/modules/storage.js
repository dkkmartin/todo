import Cards from './cards'

export default class Storage {
  // setStorage from cardsArray
  // getStorage fills cardsArray
  // edit storage clears the localstorage and setStorage again

  static setToStorage () {
    for (let i = 0; i < Cards.cardsArray.length; i++) {
      window.localStorage.setItem(`card_${i}`, JSON.stringify(Cards.cardsArray[i]))
    }
  }

  static getFromStorage () {
    for (let i = 0; i <= localStorage.length; i++) {
      if (localStorage.getItem(`card_${i}`) === null) {
        continue
      }
      const card = JSON.parse(window.localStorage.getItem(`card_${i}`))
      Cards.getCardsFromStorage(card)
    }
  }

  static editToStorage (cardIndex, key, newValue) {
    const card = JSON.parse(localStorage.getItem(cardIndex))
    if (key === 'title') {
      card.title = newValue
    }
    if (key === 'desc') {
      card.desc = newValue
    }
    if (key === 'date') {
      card.date = newValue
    }
    if (key === 'project') {
      card.project = newValue
    }
    if (key === 'prio') {
      card.prio = newValue
    }
    localStorage.setItem(`${cardIndex}`, JSON.stringify(card))
  }

  static deleteFromStorage (cardIndex) {
    localStorage.removeItem(`${cardIndex}`)
  }
}
