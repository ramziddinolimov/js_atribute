const img = document.querySelector("#img")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")

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

btn3.addEventListener("click", event => {
    has = img.setAttribute("width", "200px")
    console.log(has);
    // Bor bolsa atributni valuesini ozgartirib qoyadi 
})

btn4.addEventListener("click", event => {
    has = img.removeAttribute("src")
    console.log(has);
    // Bor bolsa atributni yoqotadi 
})