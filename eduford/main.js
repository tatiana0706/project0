let button=document.getElementById("button")
let body=document.querySelector("body")
let color=["rgb(82, 82, 82","white"]

button.addEventListener("click",function(){
    let colorIndex=Math.floor(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]
})