const openMenu = document.querySelector(".header__wrapp")
const closeMenu = document.querySelector(".menu-widget__close");
const menu_widget = document.querySelector(".menu-widget");

openMenu.addEventListener('click', showSub, false)
closeMenu.addEventListener('click', hideSub, false)


function showSub(){
    if (openMenu){
        menu_widget.style.height = "100%";
        menu_widget.style.display = "block";
        menu_widget.style.width = "100%";
        menu_widget.style.left = "0";
        menu_widget.style.right = "0";
    }
    else{
        return false;
    }
}
function hideSub(){
    if (closeMenu){
        menu_widget.style.height = "0";
        menu_widget.style.width = "0";
        menu_widget.style.display = "none";
    }
    else{
        return false;
    }
}