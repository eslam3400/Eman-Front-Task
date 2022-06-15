const catImg = document.getElementById("cat-img")

catImg.addEventListener("mouseover", (e) => {
  e.target.style.width = "60%"
})

catImg.addEventListener("mouseleave", (e) => {
  e.target.style.width = "30%"
})