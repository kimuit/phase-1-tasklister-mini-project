document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.querySelector('form')
 form.addEventListener('submit', (e) => {
    e.preventDefault()
    toMyList(e.target.newTask.value)
    form.reset()
  })
});

let toMyList = (todo) => {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteBtn)
  btn.style.backgroundColor = 'red'
  btn.textContent = 'x'
  li.textContent = `${todo}  `
  li.appendChild(btn)
  console.log(li);
  document.querySelector('#tasks').appendChild(li)
}
let deleteBtn = (e) => {
  e.target.parentNode.remove()
}