//Задание 1
let x = +prompt("Введите свое число","");
if ( x>0) {
    alert ("Положительное число");}
else if ( x<0){
    alert ("Отрицательное число");}
else {
    alert ("Ноль");}

//Задание 2
let moneyY = +prompt("Введите сумму своих збережений","");
let moneyF = +prompt("Введите сумму збережений своего друга","");
let sum = moneyY + moneyF;
if ( sum >10000) {
    alert ("Летим на Майорку");}
else {
    alert ("Пьем пиво дома :(");}

//Задание 3
let age = +prompt("Введите ваше число","");
if ( age >= 20 && age < 27) {
    alert ("Выслать повестку");}

//Задание 4
let bus = +prompt("Введите номер маршрутки","");
if ( bus === 7 ||bus === 225 ||bus === 27) {
    alert ("Едем домой");}
else {
    alert ("Ждем свою маршрутку");}

//Задание 5
let day = prompt("Введите день недели ","");
if ( day != "Суббота" && day != "Воскресенье") {
    alert ("Иди на работу");}

//Задание 6
let x = +prompt("Введите ваше число х от -20 до 20","");
let y = +prompt("Введите ваше число y от -20 до 20","");
if ( (x > 20 || x<(-20))||(y > 20 || y<(-20))) {
    alert ("Число введено неверно");}
else if (x<=1||(y>=3 || y<0 )){
    alert (x+y);}
else {
    alert ("Неверно");}

//Задание 7
let x = +prompt("Введите ваше число х","");
let y = +prompt("Введите ваше число y","");
if ( (x > 2 && x<11)||(y >= 6 && y<14)) {
    alert (x*2);}
else {
    alert (x+5);}

//Задание 8
let name = prompt("Введите ваше имя ","");
if (name===null ) {
    name="username";}
alert ("Привет, "+name);

//Задание 9 if...else
let greeting = "";
let lang = prompt("Введите язык","");
if (lang==="ru") {
    greeting="Привет";}
else if (lang==="en") {
    greeting="Hello";}
else if (lang==="de") {
    greeting="Hallo";}
else{
    greeting="Вы ввели неверное значение"}
alert(greeting);

//Задание 9 switch...case
let greeting = "";
let lang = prompt("Введите язык","");
switch (true) {
    case lang==="ru":
        greeting="Привет";
        break;
    case lang==="en":
        greeting="Hello";
        break;
    case lang==="de":
        greeting="Hallo";
        break;
    default:
        greeting="Вы ввели неверное значение";
}
alert(greeting);

//Задание 10
let date = new Date();
let month = date.getMonth();
if (month===11||month===0||month===1) {
    alert("Зима");}
else if (month===2||month===3||month===4) {
    alert("Весна");}
else if (month===5||month===6||month===7) {
    alert("Лето");}
else if (month===8||month===9||month===10) {
    alert("Осень");}
//Задание 11
let lang = prompt("Введите язык","");
let day = +prompt("Введите день","");
let result="";
switch (true) {
    case day===0:
        if (lang ==="ru"){
            result="Понедельник";
        }
        else if (lang === "en"){
            result="Monday";
        }
        else{
            result="Неверно введён язык";
        }
        break;
    case day===1:
        if (lang ==="ru"){
            result="Вторник";
        }
        else if (lang === "en"){
            result="Tuesday";
        }
        else{
            result="Неверно введён язык";
        }
        break;
    case day===2:
        if (lang ==="ru"){
            result="Среда";
        }
        else if (lang === "en"){
            result="Wednesday";
        }
        else{
            result="Неверно введён язык";
        }
        break;
    case day===3:
        if (lang ==="ru"){
            result="Четверг";
        }
        else if (lang === "en"){
            result="Thursday";
        }
        else{
            result="Неверно введён язык";
        }
        break;
    case day===4:
        if (lang ==="ru"){
            result="Пятница";
        }
        else if (lang === "en"){
            result="Friday";
        }
        else{
            result="Неверно введён язык";
        }
        break;
    case day===5:
        if (lang ==="ru"){
            result="Суббота";
        }
        else if (lang === "en"){
            result="Saturday";
        }
        else{
            result="Неверно введён язык";
        }
        break;
    case day===6:
        if (lang ==="ru"){
            result="Воскресенье";
        }
        else if (lang === "en"){
            result="Sunday";
        }
        else{
            result="Неверно введён язык";
        }
        break;
    default:
        result="Вы ввели неверное значение";
}
alert(result);

//Задание 12 switch
let name = prompt("Введите имя","");
let age = +prompt("Введите возраст","");
switch (true) {
    case name==="John"&&age===29:
        alert("Привет "+name+" "+age);
        break;
    case name==="Kate"&&age===15:
        alert("Привет "+name+" "+age);
        break;
    default:
        alert("Пока");
}
//Задание 12 ?
let name = prompt("Введите имя","");
let age = +prompt("Введите возраст","");
let message = ((name==="John" && age===29)||(name==="Kate" && age===15))?("Привет "+name+" "+age):("Пока");
alert(message);