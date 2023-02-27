function btnsListener () {
  const sideBtns = document.querySelectorAll('.sidebar__button')
  const editBtns = document.querySelectorAll('.button--edit')
  for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', () => {
      // modal opener
    })
  }
  for (let i = 0; i < sideBtns.length; i++) {
    sideBtns[i].addEventListener('click', () => {
      animator(sideBtns[i])
    })
    sideBtns[i].addEventListener('mouseout', () => {
      sideBtns[i].classList.remove('expand')
    })
  }
}

function animator (element) {
  if (element.classList.contains('card')) {
    element.classList.toggle('expandCard')
  } else {
    element.classList.toggle('expand')
  }
}

export { btnsListener }
