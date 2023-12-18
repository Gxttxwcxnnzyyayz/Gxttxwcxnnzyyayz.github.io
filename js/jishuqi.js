var btn1=document.querySelector("#add");
var num=document.querySelector("#num");
var btn2=document.querySelector("#minus");


btn1.onclick=function(){
    var count=num.value
    if(count==0)
    btn2.removeAttribute("disabled");
    count++
    num.value=count;
}
btn2.onclick=function(){
    var count=num.value
    if(count==0)
    btn2.disabled="true";
else
{
    count--;
    num.value=count;
}
}

