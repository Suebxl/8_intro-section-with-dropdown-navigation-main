const open = document.getElementById("menu-btn")
const nav = document.getElementById("nav")
const exit = document.getElementById("exit-btn")
const body = document.getElementById("body");

const dropdownBtn = document.getElementById("dropdown-btn")
const featuresItems = document.querySelectorAll(".feature-item")
const arrowFeatures = document.getElementById("arrow-features")

const dropdownBtnCompany = document.getElementById("dropdown-btn-company")
const companyItems = document.querySelectorAll(".company-item")
const arrowCompany = document.getElementById("arrow-company")



open.addEventListener("click",()=> {
  nav.classList.add("visible")
  body.classList.add("opacity")
})

exit.addEventListener("click",()=> {
  nav.classList.remove("visible")
  body.classList.remove("opacity")
})

let replaced = false;
dropdownBtn.addEventListener("click", ()=> {
  featuresItems.forEach(item => item.classList.toggle("display"))
  arrowFeatures.src= replaced? "./images/icon-arrow-down.svg" : "./images/icon-arrow-up.svg"
  replaced = !replaced
})


let changed = false
dropdownBtnCompany.addEventListener("click", ()=> {
  companyItems.forEach(item => item.classList.toggle("display"))
  arrowCompany.src= changed? "./images/icon-arrow-down.svg" : "./images/icon-arrow-up.svg"
  changed = !changed
})
