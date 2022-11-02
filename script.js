var input = document.getElementById('todo-entry-box');
var list = document.getElementById('todo-list');
var add = document.getElementById('add-button');
add.onclick = function(){
input.oninput = function(){
    list.innerHTML = this.value;

}
}