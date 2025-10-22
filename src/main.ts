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
const All=document.getElementById("ALL") as HTMLDivElement
const webDesign=document.getElementById("WEBDESIGN") as HTMLDivElement
const webDevelopment=document.getElementById("WEBDEVELOPMENT") as HTMLDivElement
const appDesign=document.getElementById("APPDESIGN") as HTMLDivElement
const appdevelopment=document.getElementById("APPDEVELOPMENT") as HTMLDivElement
const addThemEl=document.getElementById("addthem") as HTMLDivElement
const flashEl=document.getElementById("flash") as HTMLDivElement
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
if(window.pageYOffset>=100){
    changeHeadColorEl.classList.add("black")

}else{
    changeHeadColorEl.classList.remove("black")
}

if(window.pageYOffset>=200){
  flashEl.classList.remove("flash")
}else{
  flashEl.classList.add("flash")
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

flashEl.addEventListener("click",()=>{
  window.scrollTo({top:0,behavior:'smooth'})
})


const products=[
    {
    
        title:"Lorem ipsum dolor",
        description:"WEB DESIGN",
        image:'src/img/portfolio-1.jpg'

    },
    {
        title:"Nulla ullamcorper pharetra",
        description:"WEB DEVELOPMENT",
        image:'src/img/portfolio-2.jpg'

    },
    {
        title:"Phasellus eget dictum",
        description:"APP DESIGN",
        image:'src/img/portfolio-3.jpg'

    },
    {
        title:"Donec mattis vestibulum",
        description:"APP DEVELOPMENT",
        image:'src/img/portfolio-4.jpg'

    },
    {
        title:"Pellentesque ullamcorper",
        description:"WEB DESIGN",
        image:'src/img/portfolio-5.jpg'

    },
    {
        title:"Sed pretium sapien",
        description:"WEB DEVELOPMENT",
        image:'src/img/portfolio-6.jpg'

    },
]

let activeTab:
  | "All"
  | "WEB DESIGN"
  | "APP DEVELOPMENT"
  | "APP DESIGN"
  | "APP DEVELOPMENT" = "All";

const initialLoadProducts = () => {
  products.forEach((element) => {
    addThemEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
    
    `;
  });
};

initialLoadProducts();



All.addEventListener("click", () => {
  activeTab = "All";
  All.style.backgroundColor="#1dbf73"
  webDevelopment.style.backgroundColor="#353535"
  appdevelopment.style.backgroundColor="#353535"
  appDesign.style.backgroundColor="#353535"
  webDesign.style.backgroundColor="#353535"
  addThemEl.innerHTML = "";
  products.forEach((element) => {
    addThemEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
    
    `;
    
  });
  
});



webDesign.addEventListener("click", () => {
  activeTab = "WEB DESIGN";
  All.style.backgroundColor="#353535"
  webDevelopment.style.backgroundColor="#353535"
  appdevelopment.style.backgroundColor="#353535"
  appDesign.style.backgroundColor="#353535"
  webDesign.style.backgroundColor="#1dbf73"
  let webDesigns = products.filter(
    (products) => products.description === "WEB DESIGN"
  );

  addThemEl.innerHTML = "";


  webDesigns.forEach((element) => {
    addThemEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
    
    `;
  });
});


webDevelopment.addEventListener("click", () => {
  activeTab = "APP DEVELOPMENT";
  All.style.backgroundColor="#353535"
  webDevelopment.style.backgroundColor="#1dbf73"
  appdevelopment.style.backgroundColor="#353535"
  appDesign.style.backgroundColor="#353535"
  webDesign.style.backgroundColor="#353535"
  let webDesigns = products.filter(
    (products) => products.description === "APP DEVELOPMENT"
  );

  addThemEl.innerHTML = "";

  webDesigns.forEach((element) => {
    addThemEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
    
    `;
  });
});



appDesign.addEventListener("click", () => {
  activeTab = "APP DESIGN";
  All.style.backgroundColor="#353535"
  webDevelopment.style.backgroundColor="#353535"
  appdevelopment.style.backgroundColor="#353535"
  appDesign.style.backgroundColor="#1dbf73"
  webDesign.style.backgroundColor="#353535"
  let webDesigns = products.filter(
    (products) => products.description === "APP DESIGN"
  );

  addThemEl.innerHTML = "";

  webDesigns.forEach((element) => {
    addThemEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
    
    `;
  });
});


appdevelopment.addEventListener("click", () => {
  activeTab = "APP DEVELOPMENT";
  All.style.backgroundColor="#353535"
  webDevelopment.style.backgroundColor="#353535"
  appdevelopment.style.backgroundColor="#1dbf73"
  appDesign.style.backgroundColor="#353535"
  webDesign.style.backgroundColor="#353535"
  let webDesigns = products.filter(
    (products) => products.description === "APP DEVELOPMENT"
  );

  addThemEl.innerHTML = "";

  webDesigns.forEach((element) => {
    addThemEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
    
    `;
  });
});

if (activeTab === "All") {
  All.style.backgroundColor="#1dbf73"
} 

