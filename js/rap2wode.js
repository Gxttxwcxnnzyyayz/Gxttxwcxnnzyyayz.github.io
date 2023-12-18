var url='http://rap2api.taobao.org/app/mock/315687/wode';
fetch(url).then(data=>{
    return data.json();
}).then(data=>{
  console.log(data);
  parse(data);
}).catch(e=>{
 console.log(e);
})

function parse(data){
    var jlist=document.querySelector(".shang");
    for(let v of data){
     let li=document.createElement("li");
     li.classList.add("tu");
     li.innerHTML=` 
 
     <img src="${v.img}">
     <div class="kuai">
         <h3>${v.h3}</h3>
        <p class="one">${v.one}</p>
        <p class="two">${v.two}</p>
    </div>`;
    jlist.appendChild(li);
 }
}