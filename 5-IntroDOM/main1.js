const todos = JSON.parse(localStorage.getItem('todos')) || []; 

const render = () => {
    const todoList = document.getElementById("todo-list");
    const todosTemplate = todos.map (t => "<li>" + t + "</li>"); 
    todoList.innerHTML = todosTemplate.join("");
    const elementos = document.querySelectorAll("#todo-list li") //permite buscar elementos en el sistema, en este caso va de un elemento mas grande a uno mas
    //chico, de todo-list a el elemento li 
    elementos.forEach((elemento, i) => {
        elemento.addEventListener("click", () => {
            elemento.parentNode.removeChild(elemento);
            todos.splice(i, 1)
            actualizaTodos(todos); 
            render();
        })
    })        
}
const actualizaTodos = (todos) => {
    const todoStrings=JSON.stringify(todos)
    localStorage.setItem('todos', todoStrings)
}

window.onload = () => {
    render();
    const form = document.getElementById("todo-form");
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById("todo");
        const todoText = todo.value; 
        todo.value = "";
        todos.push(todoText);
        actualizaTodos(todos)
        render();
    }
}
