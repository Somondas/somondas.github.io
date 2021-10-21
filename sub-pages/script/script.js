function minimize(){
    var x = document.getElementById("min")
    if(x.style.display === "none"){
        x.style.display = "block"
    }else{
        x.style.display = "none"
    }
    
}

const linkBtn = document.querySelector(".link-btn")
const menu = document.querySelector('.sidenav')


linkBtn.addEventListener("click", function (){
    menu.classList.toggle("show-sidebar")
})

function closeCross(){
   menu.classList.remove("show-sidebar")
}








