let plus=document.getElementById("plus")
let minus=document.getElementById("minus")
let clean=document.getElementById("clean")
let counter=document.getElementById("counter")

let count=0

plus.addEventListener("click",function(){
    count++
    counter.textContent=count
    if(count>0){
        counter.style.color="green"
        count+=4
    }
})

minus.addEventListener("click",function(){
    count--
    counter.textContent=count
    if(count<0){
        counter.style.color="red"
        count-=2
    }
})
clean.addEventListener("click",function(){
    count=0
    counter.textContent=count
    if(count==0){
        counter.style.color="black"
    }
})