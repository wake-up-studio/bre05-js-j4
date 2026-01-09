let hide = document.querySelector("#hide")
let show = document.querySelector("#show")
let text = document.querySelector("#text")

hide.addEventListener("click", (event) =>{
    text.style.visibility = "hidden"
})

show.addEventListener("click", (event) =>{
    text.style.visibility = "visible"
})