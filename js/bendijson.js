var jarr=  [{
    img:"./images/首页/精选/舒可乐卫生纸.JPG",
    link:"https://imgse.com/i/pigu8yD",
    h5:"舒可乐卫生纸",
    three:"￥0.42",
    four:"已售2000+件"
},{
    img:"./images/首页/精选/织梦原木纸巾抽纸.JPG",
    link:"http://huanqiu.com",
    h5:"织梦原木抽纸",
    three:"￥0.54",
    four:"已售1000+件"
},{
    img:"./images/首页/精选/嗨大师酸辣粉.JPG",
    link:"http://ltaaa.com",
    h5:"嗨大师酸辣粉",
    three:"￥1.9",
    four:"已售5万+件"
},{
    img:"./images/首页/精选/千丝迷你蛋酥.JPG",
    link:"http://ltaaa.com",
    h5:"千丝迷你蛋酥",
    three:"￥3.01",
    four:"已售2000+件"
},{
    img:"./images/首页/精选/女秋冬季加长袜.JPG",
    link:"https://yiyan.baidu.com/welcome",
    h5:"女秋冬季加长袜",
    three:"￥9.90",
    four:"已售8000+件"
},{
    img:"./images/首页/精选/云南丑核桃.JPG",
    link:"https://xinghuo.xfyun.cn/desk",
    h5:"云南丑核桃",
    three:"￥12.9",
    four:"已售2万+件"
}];
//  本地json，推荐使用rap2、json server或mock.js进行mock。
    //  var ben1=document.getElementsByClassName("ben")[0];
    //  var ben2=document.querySelectorAll(".ben")[0];
     var ben3=document.querySelector(".ben");
    
     jarr.forEach((v,i)=>{
         let li=document.createElement("li");
         li.classList.add("neb");
         li.innerHTML=`  <img src="${v.img}">
     <div class="uai">
         <h5>${v.h5}</h5>
        <p class="three">${v.three}</p>
        <p class="four">${v.four}</p>
    </div>
        `;
       
        ben3.appendChild(li);
     })