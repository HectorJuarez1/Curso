"use strict";

const btn = document.querySelector("[date-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[ date-list]");
    const task = document.createElement('li');
    task.classList.add("card");
    input.value = "";
    const content = ` <div>
    ${checkComplete()}
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;

    list.appendChild(task);
    console.log(content);
};

console.log(btn);


btn.addEventListener("click", createTask);

const checkComplete = () =>{
    const i =document.createElement("i")
    i.classList.add("far fa-check-square icon");
    return i;
}