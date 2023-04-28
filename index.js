const img = document.querySelector("#img")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")

btn1.addEventListener("click", event => {
    has = img.hasAttribute("width")
    console.log(has);
    // Bor bolsa true chiqaradi bolmasa false
})

btn2.addEventListener("click", event => {
    has = img.getAttribute("width")
    console.log(has);
    // Bor bolsa atributni valuesini ob beradi 
})

btn2.addEventListener("click", event => {
    has = img.getAttribute("width")
    console.log(has);
    // Bor bolsa atributni valuesini ob beradi 
})