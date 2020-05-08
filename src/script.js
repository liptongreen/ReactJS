let getToDo;

fetch(`https://todo-a7861.firebaseio.com/todos.json`).then((response) => {
  response
    .json()
    .then((data) => {
      getToDo = data.map((element) => element);
      setToDo();
    })
    .catch(() => {
      document.write(`ERROR 404`);
    });
});

function setToDo() {
  for (let i = 0; i < getToDo.length; ) {
    let task = document.getElementById(`task${i}`);
    task.innerHTML = getToDo[i].title;
    i++;
  }
}
