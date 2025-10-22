import './style.css'
const allSlidesEl=document.querySelectorAll(".slides")
const mainColor=document.querySelectorAll(".main")
const profilesEl=document.querySelectorAll(".profiles")
const backBtnEl=document.getElementById("prev") as HTMLButtonElement
const nextBtnEl=document.getElementById("next") as HTMLButtonElement
let interval:number;
const line1El=document.getElementById("line1") as HTMLDivElement
const line2El=document.getElementById("line2") as HTMLDivElement
const line3El=document.getElementById("line3") as HTMLDivElement
const line4El=document.getElementById("line4") as HTMLDivElement
const counter1El=document.getElementById("counter1") as HTMLSpanElement
const counter2El=document.getElementById("counter2") as HTMLSpanElement
const counter3El=document.getElementById("counter3") as HTMLSpanElement
const counter4El=document.getElementById("counter4") as HTMLSpanElement
const selectBarEl=document.getElementById("selectBar") as HTMLElement
const showSelectBarEl=document.getElementById("showSelectBar") as HTMLElement
let count1=50
let count2=150
let count3=250
let count4=350
const changeHeadColorEl=document.getElementById("changeHeadColor") as HTMLHeadElement


//  اسلایدر
const next=():void=>{
    const currentEl= document.querySelector(".current")
    const changeColorEl=document.querySelector(".changeColor")
    currentEl?.classList.remove("current")
    changeColorEl?.classList.remove("changeColor")
     if(currentEl?.nextElementSibling && changeColorEl?.nextElementSibling) {
        currentEl.nextElementSibling.classList.add("current")
        changeColorEl.nextElementSibling.classList.add("changeColor")
    } else {
    allSlidesEl[0].classList.add("current")
    mainColor[0].classList.add("changeColor")
    }
}
const back=():void=>{
    const currentEl= document.querySelector(".current")
    const changeColorEl=document.querySelector(".changeColor")
    currentEl?.classList.remove("current")
    changeColorEl?.classList.remove("changeColor")
     if(currentEl?.previousElementSibling && changeColorEl?.previousElementSibling) {
        currentEl.previousElementSibling.classList.add("current")
        changeColorEl.previousElementSibling.classList.add("changeColor")
    } else {
    allSlidesEl[allSlidesEl.length-1].classList.add("current")
    mainColor[mainColor.length-1].classList.add("changeColor")
    }
}

nextBtnEl.addEventListener("click",()=>{
    next()
    if(true){
        clearInterval(interval)
        interval=setInterval(next,5000)
    }

})
backBtnEl.addEventListener("click",()=>{
    back()
    if(true){
        clearInterval(interval)
        interval=setInterval(next,5000)
    }

})
if(true){
    interval=setInterval(next,5000)
}

//اسکرول ها
window.addEventListener("scroll",()=>{
//تغییر رنگ بک گراند هدر
if(window.pageYOffset>=200){
    changeHeadColorEl.classList.add("black")
}else{
    changeHeadColorEl.classList.remove("black")
}

//نوار
if(window.pageYOffset>=3345){
line1El.classList.add("anime1")
line2El.classList.add("anime2")
line3El.classList.add("anime3")
line4El.classList.add("anime4")

//افزایش اعداد
const startAdd1=setInterval(() => {
    counter1El.textContent=count1.toString()
    if(count1>=100){
    clearInterval(startAdd1)
  }else{
  count1++
}
}, 330);

const startAdd2=setInterval(() => {
    counter2El.textContent=count2.toString()
    if(count2>=200){
    clearInterval(startAdd2)
  }else{
  count2++
}
}, 330);

const startAdd3=setInterval(() => {
    counter3El.textContent=count3.toString()
    if(count3>=300){
    clearInterval(startAdd3)
  }else{
  count3++
}
}, 330);

const startAdd4=setInterval(() => {
    counter4El.textContent=count4.toString()
    if(count4>=400){
    clearInterval(startAdd4)
  }else{
  count4++
}
}, 330);


}
})

//dropdown
selectBarEl.addEventListener("mouseover",()=>{
    showSelectBarEl.classList.toggle("show")
})

// Portfolio
profilesEl.forEach((profile)=>{
    const layers=profile.querySelector(".layer2")
    const massage=profile.querySelector(".massage")
    profile.addEventListener("mouseover",()=>{
       massage?.classList.add("layer2")
       layers?.classList.remove("layer2")
    })
    profile.addEventListener("mouseleave",()=>{
       massage?.classList.remove("layer2")
       layers?.classList.add("layer2")
    })
})


