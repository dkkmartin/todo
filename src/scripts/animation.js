function btnsListener () {
  const btns = document.querySelectorAll('.sidebar__button')
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
      btns[i].classList.add('expand')
    })
    btns[i].addEventListener('mouseout', () => {
      btns[i].classList.remove('expand')
    })
  }
}

export { btnsListener }
