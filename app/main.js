//имя//
let name = prompt('Как Вас зовут?', );
alert('Привет, ' + name + '!');
//возраст//
let year = 2020;
let byear = prompt('Какого вы года рождения?');
if (byear < 1920 || byear > 2018) {

    while (byear < 1920 || byear > 2018) {
        alert('кажется вы врете');
        byear = prompt('Какого вы года рождения на самом деле?');

    }
    alert('Похоже, Ваш возраст равен ' + (year - byear) + '!');
} else { alert('Похоже, Ваш возраст равен ' + (year - byear) + '!'); }
//квадрат//
let length = prompt('Задайте длинну стороны квадрата.');
alert('Периметр заданного квадрата равен ' + length * 4);
//окружность//
let r = prompt('Задайте радиус окружности.');
let p = 3.14;
alert(p * r ** 2 + '- площадь заданной окружности');
//скорость//
let dist = prompt('Задайте расстояние между городами в киллометрах.');
let hr = prompt('За сколько часов Вы планируете добраться?');
alert('Тогда Вам нужно двигаться как минимум со скоростью ' + Math.floor(dist / hr) + ' км/ч');