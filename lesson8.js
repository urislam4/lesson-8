

const todos = document.querySelector('.todos');
const addTodo = (item) => {
    const todo =  document.createElement('div')
    todo.innerHTML = `
            <div>
            <h2>${item.id}</h2>
            <p class="red">${item.title}</p>
            <img src="amd/SPE010_artwork-7.jpg" alt="">
            </div>
        `
    todo.style = `
    width: 400px;
    height: 500px;
    border-radius:20px;
    border: 3px solid rgb(111, 206, 235);
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0,0.3);
`
    todos.append(todo)
}


const getTodo = document.querySelector('.btn');
async function getData() {
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/todos")
        const todoList = await result.json()
        const todoNum = document.querySelector('.todoNum')
        const filterEd = todoList.filter((todo) => todo.id == todoNum.value)
        console.log(filterEd, "ok")

        filterEd.forEach((item) => {
            console.log(item)
            addTodo(item)
        })
    }catch (e){
        console.log('Ошибка')
    }finally {
        console.log('finally')
    }
}
getTodo.addEventListener('click',getData);
