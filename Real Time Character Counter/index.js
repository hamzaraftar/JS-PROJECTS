const textArea = document.getElementById("textarea")
const totalCounter =document.querySelector(".total_counter")
const remaningArea = document.querySelector(".remaining_counter")


textArea.addEventListener("keyup",(e)=>{
    updateCounter()    
})

function updateCounter()
{
    totalCounter.innerText =     textArea.value.length

   remaningArea.innerText =  textArea.getAttribute("maxlength")-  textArea.value.length

}