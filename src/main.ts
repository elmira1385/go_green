import './style.css'
const allSlidesEl=document.querySelectorAll(".slides")
const prevousBtnEl=document.getElementById("prev") as HTMLButtonElement
const nextBtnEl=document.getElementById("next") as HTMLButtonElement
let interval:number;
//اسلایدر
const next=():void=>{
    const currentEl= document.querySelector(".current")
    currentEl?.classList.remove("current")
     if(currentEl?.nextElementSibling) {
        currentEl.nextElementSibling.classList.add("current")
    } else {
    allSlidesEl[0].classList.add("current")
    }
}
const prevous=():void=>{
    const currentEl= document.querySelector(".current")
    currentEl?.classList.remove("current")
     if(currentEl?.previousElementSibling) {
        currentEl.previousElementSibling.classList.add("current")
    } else {
    allSlidesEl[allSlidesEl.length-1].classList.add("current")
    }
}

nextBtnEl.addEventListener("click",()=>{
    next()
    if(true){
        clearInterval(interval)
        interval=setInterval(next,5000)
    }

})
prevousBtnEl.addEventListener("click",()=>{
    prevous()
    if(true){
        clearInterval(interval)
        interval=setInterval(prevous,5000)
    }

})
if(true){
    interval=setInterval(next,5000)
}