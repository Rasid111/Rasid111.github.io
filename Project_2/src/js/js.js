let  price = {
    feature1: 0,
    feature2: 0,
    feature3: 0,
    getFeatures: function () {
        this.feature1 = prompt("Характеристика 1 1) Вариант 1 2) Вариант 2 3) Вариант 3");
        this.feature2 = prompt("Характеристика 2 1) Вариант 1 2) Вариант 2 3) Вариант 3");
        this.feature3 = prompt("Характеристика 3 1) Вариант 1 2) Вариант 2 3) Вариант 3");
    }
    let prices1 = [[11, 12, 13][21, 22, 23][31, 32, 33]];
    let prices2 = [1, 2, 3];
    totalPrice: function () {
        return.this.prices1[this.feature1][this.feature2] + this.prices2[this.feature3] s;
    }
}

price.getFeatures();
alert("Итоговая цена = " + price.totalPrice);

$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 60 + "px"
    });
});
