function getTodos(){
    // Hàm fetch() trả về 1 đối tượng Promise(onFullfilled, onRejected)
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

getTodos();