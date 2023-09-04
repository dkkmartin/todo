export default class Projects {
  static projects_db = ['Home', 'School', 'Work', 'Gym']

  static appendToProjects (project) {
    if (project === '') {
      alert('Enter a name')
    } else {
      this.projects_db.push(`${project}`)
    }
  }

  static removeFromProjects (project) {
    this.projects_db = this.projects_db.filter(item => item !== project)
  }
}
