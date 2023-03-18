let button=document.getElementById("button")
let input=document.getElementById("input")
let todocontainer=document.getElementById("todocontainer")

button.addEventListener("click",function(){
    let par=document.createElement("p")
    
    par.innerText=input.value
    todocontainer.appendChild(par)
    par.addEventListener("dblclick",function(){
        todocontainer.removeChild(par)
        
    })
    par.addEventListener("click",function(){
      par.style.color=("blue")
      par.style.border=("solid")
    })
    input.addEventListener("click",function() {
        if(document.getElementById("input")) { 
               document.getElementById('button')
           } else { 
               document.getElementById('button')
           }
       })
})