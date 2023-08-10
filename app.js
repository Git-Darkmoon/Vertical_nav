const burgerBtn = document.getElementById("burgerBtn")
const navList = document.querySelector(".list")

burgerBtn.addEventListener("click", () => {
  navList.classList.toggle("showNav")
  burgerBtn.classList.toggle("showX")
})
