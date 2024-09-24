const navbar = document.querySelector(".navbar")
const bottomContainer = document.querySelector(".bottom_container")

window.addEventListener("scroll",(e)=>{
    if(window.scrollY>bottomContainer.offsetTop -navbar.offsetHeight-50 )
    {}
    
})
