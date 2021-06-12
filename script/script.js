 'use strict';

 // ************** MENU RESPONSIVE ***************
 
 // VARIABLES

let btnMenuResponsive = document.getElementById('iconMenuBurger');
//  console.log(btnMenuResponsive);

let menuBurger = document.getElementById('menuBurger');
console.log(menuBurger);

let btnIsOpen = false;

// FUNCTION

function menuBurgerOpen(){

    btnIsOpen = true;

    menuBurger.style.display = "block";

    setTimeout(() => {
        menuBurger.style.opacity = "1";
        menuBurger.style.top = "105px";
    }, 10);
}

function menuBurgerClose(){

    btnIsOpen = false;

    setTimeout(() => {
        menuBurger.style.display = "none";
    }, 1000);

    menuBurger.style.opacity = "0";
    menuBurger.style.top = "85px";
}




// EVENT

btnMenuResponsive.addEventListener('click', function(){

    if (btnIsOpen == false){
        menuBurgerOpen();
    } else {
        menuBurgerClose();
    }
}) 