let totalPrice = 0;
let feature1 = 0;
let feature2 = 0;
let feature3 = 0;
let prices = [[[[111], [112], [113]], [[121], [122], [123]], [[131], [132], [133]]], [[[211], [212], [213]], [[221], [222], [223]], [[231], [232], [233]]], [[[311], [312], [313]], [[321], [322], [323]], [[331], [332], [333]]];
function getFeatures() {
            feature1 = parseInt(prompt("Число от 1 до 3"));
            feature2 = parseInt(prompt("Число от 1 до 3"));
            feature3 = parseInt(prompt("Число от 1 до 3"));
}
fuction getPrice() {
              return prices[feature1][feature2][feature3];
}
getFeatures();
getPrices();