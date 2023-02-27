(function btnsListener () {
  const btns = document.querySelectorAll('.sidebar__button')
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
      animator(btns[i])
    })
    btns[i].addEventListener('mouseout', () => {
      btns[i].classList.remove('expand')
    })
  }
})()

function animator (element) {
  if (element.classList.contains('expand')) {
    element.classList.remove('expand')
  } else {
    element.classList.add('expand')
  }
}
