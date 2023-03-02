import DOM from './dom'

export function globalEventListener (type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) {
      callback(e)
    }
  })
}

export function expand (btn) {
  DOM.addClass(btn, 'expand')
  console.log('Added class "expand"')
}

export function resize (btn) {
  DOM.addClass(btn, 'resize')
  console.log('Added class "Resize"')
  delay(1000).then(() => {
    DOM.removeClass(btn, 'resize')
    DOM.removeClass(btn, 'expand')
  })
}

export function delay (time) {
  return new Promise(resolve => setTimeout(resolve, time))
}
