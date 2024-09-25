const btn = document.querySelector(".btn")
const close = document.querySelector(".close_btn")
const trailerContainer = document.querySelector(".trailer_container")
btn.addEventListener("click",()=>{
    trailerContainer.classList.remove("active")
})

close.addEventListener("click",()=>{
    trailerContainer.classList.add("active")
})