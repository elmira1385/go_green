import '/src/style.css'
const changeHeadColorEl=document.getElementById("changeHeadColor") as HTMLHeadElement
const selectBarEl=document.getElementById("selectBar") as HTMLElement
const showSelectBarEl=document.getElementById("showSelectBar") as HTMLElement
window.addEventListener("scroll",()=>{
//تغییر رنگ بک گراند هدر
if(window.pageYOffset>=100){
    changeHeadColorEl.classList.add("black")

}else{
    changeHeadColorEl.classList.remove("black")
}})

selectBarEl.addEventListener("mouseover",()=>{
    showSelectBarEl.classList.toggle("show")
})