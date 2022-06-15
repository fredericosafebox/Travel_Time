function menuLoader(event){
    const menuList = document.getElementById("nav")
    const button = document.getElementById("btn-mobile")
    nav.classList.toggle("active")
    button.classList.toggle("open")
}  
 


function addMenuLoader(){
    const button = document.getElementById("btn-mobile")
    button.addEventListener("click", menuLoader)
}

addMenuLoader()