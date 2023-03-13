const iconMenu = document.getElementById("icon-menu")
const menuBar = document.getElementById("menu-bar")
const closeMenuBar = document.getElementById("close-menu-bar")
const container = document.getElementById("container")
const arrowDownFeatures = document.getElementById("arrow-down-features")
const menuFeatures = document.getElementById("menu-features")
const arrowDownCompany = document.getElementById("arrow-down-company")
const menuCompany = document.getElementById("menu-company")

iconMenu.addEventListener("click",()=> {
  menuBar.classList.remove("hidden")
  container.classList.add("opacity")
})

closeMenuBar.addEventListener("click",()=> {
  menuBar.classList.add("hidden")
  container.classList.remove("opacity")
})

let replaced = false;

arrowDownFeatures.addEventListener("click", ()=> {
  menuFeatures.classList.toggle("hidden")
  arrowDownFeatures.src = replaced? "./images/icon-arrow-down.svg" : "./images/icon-arrow-up.svg"
  replaced = !replaced
})

arrowDownCompany.addEventListener("click", ()=> {
  menuCompany.classList.toggle("hidden")
  arrowDownCompany.src = replaced? "./images/icon-arrow-down.svg" : "./images/icon-arrow-up.svg"
  replaced = !replaced
})
