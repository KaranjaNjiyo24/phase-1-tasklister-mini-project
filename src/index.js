document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener(
    'submit', (e) => {
      // console.log(e)
      e.preventDefault() //prevent form from submitting and refreshing
      buildToDo(e.target["new-task-description"].value)
    }
  )

  function buildToDo(taskDescription) {
    let p = document.createElement('p') //paragrah for each string
    let btn = document.createElement('button') //delete button
    btn.addEventListener('click', handleDelete) //listens for the click to our button
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
