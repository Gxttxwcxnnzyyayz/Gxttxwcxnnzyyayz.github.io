var btn1 = document.querySelector("#add");
var num = document.querySelector("#num");
var btn2 = document.querySelector("#minus");

var btn3 = document.querySelector("#add2");
var num2 = document.querySelector("#num2");
var btn4 = document.querySelector("#minus2");

btn1.onclick = function() {
var count = num.value;
if (count == 0)
  btn2.removeAttribute("disabled");
count++;
num.value = count;
updateTotalPrice(); // 更新总价
};

btn2.onclick = function() {
var count = num.value;
if (count == 0)
  btn2.disabled = true;
else {
  count--;
  num.value = count;
  updateTotalPrice(); // 更新总价
}
};

btn3.onclick = function() {
var count = num2.value;
if (count == 0)
  btn4.removeAttribute("disabled");
count++;
num2.value = count;
updateTotalPrice(); // 更新总价
};

btn4.onclick = function() {
var count = num2.value;
if (count == 0)
  btn4.disabled = true;
else {
  count--;
  num2.value = count;
  updateTotalPrice(); // 更新总价
}
};
function updateTotalPrice() {
var price1 = 0.42; // 商品1的单价
var price2 = 9.90; // 商品2的单价
var count1 = parseInt(num.value); // 商品1的数量
var count2 = parseInt(num2.value); // 商品2的数量

var totalPrice = price1 * count1 + price2 * count2; // 计算总价

// 将结果显示在页面上
var totalPriceElement = document.getElementById("totalPrice");
totalPriceElement.innerHTML = "总价：￥" + totalPrice.toFixed(2);
}