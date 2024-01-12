import {suggestions} from "./suggestions.js"

let $ = document;
let searchInputWrapper = $.querySelector(".search-input")
let searchInput = $.querySelector(".search-input input")
let autocomBox = $.querySelector(".autocom-box")
// let autocomBoxLi = $.querySelectorAll(".autocom-box li")
let searchInputValue , suggestedWord

searchInput.addEventListener("keyup",()=>{
     searchInputValue = searchInput.value
     suggestedWord = suggestions.filter((word)=>{
        // return  word.toLowerCase().startsWith(searchInputValue.toLowerCase())
        return  word.toLowerCase().includes(searchInputValue.toLowerCase())
    })
    if (searchInputValue) {
        searchInputWrapper.classList.add("active") 
        createLi(suggestedWord)
    }else{
        searchInputWrapper.classList.remove("active") 
    }
})
function createLi(arr) {
    let wordArrLi =  arr.map(item => {
        return `<li>${item}</li>`
    });
    let customeLi
    if(!wordArrLi.length){
        customeLi = `<li>${searchInputValue}</li>`
    }else{
        customeLi = wordArrLi.join("")
    }
    autocomBox.innerHTML = customeLi
    selectItem()
}

function selectItem (){
    let allLiItem = autocomBox.querySelectorAll("li")
    allLiItem.forEach((wordItem)=>{
        wordItem.addEventListener("click",(e)=>{
            searchInput.value = e.target.innerText
            searchInputWrapper.classList.remove("active")
        })
    })
}