import Cards from './cards'

// Should not do anything else than read from cardsArray
export default class Storage {
  // setStorage reads from cardsArray and appends to localstorage
  // also clears storage before setStorage again
  static setToStorage () {
    localStorage.clear()
    localStorage.setItem('cards', JSON.stringify(Cards.cardsArray))
    console.log(JSON.parse(localStorage.getItem('cards')))
  }

  // getStorage reads from localstorage and appends to cardsArray
  static getFromStorage () {
    const storageArray = JSON.parse(localStorage.getItem('cards'))
    Cards.cardsArray = storageArray
  }
}
