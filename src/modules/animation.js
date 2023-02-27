export function animator (element) {
  if (element.classList.contains('card')) {
    element.classList.toggle('expandCard')
  } else {
    element.classList.toggle('expand')
  }
}
