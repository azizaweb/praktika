let user = prompt('Введите задний фон');
if(user){
    document.body.style.backgroundColor = user;
}else{
    alert('Ничего не написано')
}
let text = prompt('Введите цвет текста');
const admin = document.getElementById('text');
if(text){
    admin.style.color = text;
}else{
    alert('Ничего не написано')
}
