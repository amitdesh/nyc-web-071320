

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  /*
  √As a user, I should be able to type a task into the input field.
  √As a user, I should be able to click some form of a submit button.

  As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

  √1. add a submit listener to the form
  √2. get the text out of the form somehow
  √3. create li for that text
  √3a. put the text inside the li
  √4. append the li to the ul

  */

  const form = document.querySelector("form")

  form.addEventListener("submit", function(e){
    e.preventDefault()
    
    const form = e.target

    const priority = form.priority.value
    
    const task = form['new-task-description'].value
    const taskLi = document.createElement('li')
    taskLi.textContent = task
    taskLi.style.backgroundColor = priority

    const button = document.createElement("button")
    button.textContent = "X"
    taskLi.append(button)

    const edit = document.createElement('button')
    edit.textContent = "Edit"
    taskLi.append(edit)
    
    button.addEventListener("click", function(e){
      const taskLi = form.parentElement
      taskLi.remove()
    })

    // const tasks = document.getElementById('tasks')
    const div = document.querySelector(`#${priority}`)
    div.append(taskLi)
  })
});
