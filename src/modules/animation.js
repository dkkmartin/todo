function delay (time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

export const expander = function (element) {
  if (element.classList.contains('card')) {
    element.classList.toggle('expandCard')
  } else {
    element.classList.add('expand')
  }
}

export const resizer = function (element) {
  element.classList.remove('expand')
  element.classList.add('resize')
  delay(1000).then(() => {
    element.classList.remove('resize')
  })
}
