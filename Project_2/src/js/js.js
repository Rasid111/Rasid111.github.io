let price = {
    feature1: 0,
    feature2: 0,
    feature3: 0,
}
price.feature1=prompt("Характеристика 1 1) Вариант 1 2) Вариант 2 3) Вариант 3");
price.feature2=prompt("Характеристика 2 1) Вариант 1 2) Вариант 2 3) Вариант 3");
price.feature3=prompt("Характеристика 3 1) Вариант 1 2) Вариант 2 3) Вариант 3");
let totalPrice = parseInt(price.feature1)+parseInt(price.feature2)+parseInt(price.feature3);
alert("Итоговая цена = "+totalPrice);