document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener(
    'submit', (e) => {
      // console.log(e)
      e.preventDefault()
      buildToDo(e.target["new-task-description"].value)
    }
  )

  function buildToDo(taskDescription) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'Delete'
    p.textContent = `${taskDescription} `
    p.appendChild(btn)
    // console.log(p)
    document.querySelector('#tasks').appendChild(p)
  }

  function handleDelete(e) {
    e.target.parentNode.remove()
  }
});
