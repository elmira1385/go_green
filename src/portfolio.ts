import '/src/style.css'
const changeHeadColorEl=document.getElementById("changeHeadColor") as HTMLHeadElement
const selectBarEl=document.getElementById("selectBar") as HTMLElement
const showSelectBarEl=document.getElementById("showSelectBar") as HTMLElement
const All=document.getElementById("ALL") as HTMLDivElement
const webDesign=document.getElementById("WEBDESIGN") as HTMLDivElement
const webDevelopment=document.getElementById("WEBDEVELOPMENT") as HTMLDivElement
const appDesign=document.getElementById("APPDESIGN") as HTMLDivElement
const appdevelopment=document.getElementById("APPDEVELOPMENT") as HTMLDivElement
const addThemEl=document.getElementById("addthem") as HTMLDivElement
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



const products=[
    {
    
        title:"Lorem ipsum dolor",
        description:"WEB DESIGN",
        image:'/img/portfolio-1.jpg'

    },
    {
        title:"Nulla ullamcorper pharetra",
        description:"WEB DEVELOPMENT",
        image:'/img/portfolio-2.jpg'

    },
    {
        title:"Phasellus eget dictum",
        description:"APP DESIGN",
        image:'/img/portfolio-3.jpg'

    },
    {
        title:"Donec mattis vestibulum",
        description:"APP DEVELOPMENT",
        image:'/img/portfolio-4.jpg'

    },
    {
        title:"Pellentesque ullamcorper",
        description:"WEB DESIGN",
        image:'/img/portfolio-5.jpg'

    },
    {
        title:"Sed pretium sapien",
        description:"WEB DEVELOPMENT",
        image:'/img/portfolio-6.jpg'

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