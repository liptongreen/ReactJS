//1.
const task1 = document.getElementById("task1");
task1.innerHTML = task1.innerHTML.replace(
  /функци(.|..)/gi,
  "<strong>функция</strong>"
);
//2
const task2 = document.getElementById("task2");
task2.innerHTML = task2.innerHTML.replace(/[0-9]{2}:[0-9]{2}/g, "<b>$&</b>");
