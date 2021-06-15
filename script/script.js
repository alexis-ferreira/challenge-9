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






// ************** ANIMATION HOVER ***************

// VARIABLES

let hoverLinkTransform = document.getElementById('btnLink');
// console.log(hoverLinkTransform);

let hoverLinkAudience = document.getElementById('btnLink2');
// console.log(hoverLinkAudience)

let borderTransform = document.getElementById('borderBtn');
// console.log(borderBtn);

let borderAudience = document.getElementById('borderBtn2');
// console.log(borderAudience);

let btnContact = document.getElementById('btnContact');
// console.log(btnContact);

let btnMenuFooter = document.getElementsByClassName('hoverFooter');
// console.log(btnMenuFooter);

let btnSocialNetworkFooter = document.getElementsByClassName('logoSocialNetwork');
// console.log(btnSocialNetworkFooter);



// HOVER CONTACT

btnContact.addEventListener('mouseenter', function(){

    btnContact.style.backgroundColor = "rgba(255, 255, 255, 0.418)";
    btnContact.style.color = "white";
})

btnContact.addEventListener('mouseleave', function(){

    btnContact.style.backgroundColor = "white";
    btnContact.style.color = "black";
})





// HOVER MENU FOOTER

for (let i = 0; i < btnMenuFooter.length; i++){

    btnMenuFooter[i].addEventListener('mouseenter', function(){

        btnMenuFooter[i].style.color = "white";
    })

    btnMenuFooter[i].addEventListener('mouseleave', function(){

        btnMenuFooter[i].style.color = "hsl(167, 40%, 24%)";
    })
}






// HOVER SOCIAL NETWORK FOOTER

let hoverSocialNetwork = document.getElementsByClassName('hoverSocialNetwork');
console.log(hoverSocialNetwork);

for (let i = 0; i < hoverSocialNetwork.length; i++){

    hoverSocialNetwork[i].addEventListener('mouseenter',function(){

        btnSocialNetworkFooter[i].style.fill = "white";
    })

    hoverSocialNetwork[i].addEventListener('mouseleave',function(){

        btnSocialNetworkFooter[i].style.fill = "hsl(167, 40%, 24%)";
    })
}







// HOVER LEARN MORE

hoverLinkTransform.addEventListener('mouseenter', function(){

    borderTransform.style.backgroundColor = 'hsl(51, 100%, 49%)';
})

hoverLinkTransform.addEventListener('mouseleave', function(){

    borderTransform.style.backgroundColor = 'hsl(48, 100%, 90%)';
})

hoverLinkAudience.addEventListener('mouseenter', function(){

    borderAudience.style.backgroundColor = 'hsl(7, 99%, 70%)';
})

hoverLinkAudience.addEventListener('mouseleave', function(){

    borderAudience.style.backgroundColor = 'hsl(6, 100%, 88%)';
})