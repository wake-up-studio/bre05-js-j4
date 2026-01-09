window.addEventListener("DOMContentLoaded", ()=>{
    let span = document.querySelector("span");
    let section = document.querySelector("section");
    
    span.addEventListener("click", (event)=>{
        section.classList.toggle("closed")
        section.classList.toggle("open")
    });
});