const modalNewProject = document.querySelector('.new__project__modal')
const newProjectTitle = document.querySelector('.title--newproject')
export const modalMaker = function (btn) {
  if (btn.classList.contains('button--newproject')) {
    newProjectTitle.style.display = 'none'
    modalNewProject.style.display = 'block'
  }
}

export const returnOGContent = function () {
  modalNewProject.style.display = 'none'
  newProjectTitle.style.display = 'block'
  console.log('Works')
}
