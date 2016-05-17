function getToDos() {
    var toDos = new Array;
    var toDosStr = localStorage.getItem('todo');
    console.log(toDosStr);
    if (toDosStr !== null) {
        toDos = JSON.parse(toDosStr);
    }
    return toDos;

}
 
function add() {
    var task = document.getElementById('task').value;
 
    var toDos = getToDos();
    toDos.push(task);
    localStorage.setItem('todo', JSON.stringify(toDos));
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var toDos = getToDos();
    toDos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(toDos));
 
    show();
 
    return false;
}
 
function show() {
    var toDos = getToDos();
 
    var html = '<ul>';
    for(var i=0; i<toDos.length; i++) {
        html += '<li>' + toDos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();