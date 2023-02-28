const modalNewProject = document.querySelector('.newproject__modal')
const modalNewTodo = document.querySelector('.newtodo__modal')
const modalProjects = document.querySelector('.projects__modal')

export const modalMaker = function (btn) {
  if (btn.classList.contains('button--newproject')) {
    modalNewProject.previousElementSibling.textContent = ''
    modalNewProject.style.display = 'block'
  }
  if (btn.classList.contains('button--newtodo')) {
    modalNewTodo.previousElementSibling.textContent = ''
    modalNewTodo.style.display = 'block'
  }
  if (btn.classList.contains('button--projects')) {
    modalProjects.previousElementSibling.textContent = ''
    modalProjects.style.display = 'block'
  } else {
    return 'error in modalMaker'
  }
}

export const returnContent = function (element) {
  if (element.classList.contains('button--newproject')) {
    modalNewProject.style.display = 'none'
    modalNewProject.previousElementSibling.textContent = 'New Project'
  }
  if (element.classList.contains('button--newtodo')) {
    modalNewTodo.style.display = 'none'
    modalNewTodo.previousElementSibling.textContent = 'New Todo'
  }
  if (element.classList.contains('button--projects')) {
    modalProjects.style.display = 'none'
    modalProjects.previousElementSibling.textContent = 'Projects'
  }
}
