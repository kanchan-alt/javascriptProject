const lightBtn = document.querySelector('.light')
const darkBtn = document.querySelector('.dark')
const wraper  = document.querySelector('.wraper')

wraper.addEventListener("click", changeTheme)

function changeTheme(e){
// console.log(e.target.innerText);
 
 if(e.target.innerText === "Light Theme"){
    document.body.style.background = "white"
    wraper.style.color = "red"
 }else if(e.target.innerText === "Dark Theme"){
    document.body.style.background = "black"
    wraper.style.color = "white"
 }
 

}