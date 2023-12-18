var li = document.querySelectorAll("#fixed li");
var main = document.querySelector("#main");
var box = document.querySelectorAll("#main .box");
//dom操作
var mh = 100; // margin-top，元素离上面的值
var bh = []; // 每个盒子的高度的数组

// 初始化所有盒子的高度
for (var i = 0; i < box.length; i++) {
    bh.push(box[i].offsetHeight);
}

// 点击左侧的li时，只显示对应的box，隐藏其他的box
for (var i = 0; i < li.length; i++) {
    li[i].index = i;
    li[i].onclick = function () {
        // 清除所有li的cur类
        for (var j = 0; j < li.length; j++) {
            li[j].className = "";
        }
        // 给当前点击的li添加cur类
        this.className = "cur";
        // 隐藏所有的box
        for (var k = 0; k < box.length; k++) {
            box[k].style.display = 'none';
        }
        // 只显示当前对应的box
        box[this.index].style.display = 'block';
        // 滚动到页面顶部
        window.scrollTo(0,0);
    }
}

// 页面加载时默认隐藏所有box，只显示第一个
window.onload = function() {
    for (var k = 1; k < box.length; k++) {
        box[k].style.display = 'none';
    }
}

