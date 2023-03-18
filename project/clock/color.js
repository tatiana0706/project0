let button=document.getElementById("button")
let body=document.querySelector("body")
let colors=["red","blue","orange","pink","black","yellow","green"]

button.addEventListener("click",function(){
    let colorIndex=Math.floor(Math.random()*colors.length)
    body.style.backgroundColor=colors[colorIndex]
})