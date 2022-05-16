const overlay = document.getElementById('overlay')
const menuBars = document.getElementById('menu-bars');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

function toggleNav (){
    // Toggle Menu Bars Open and Close 
    menuBars.classList.toggle('change');

    // Toggle Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        // Animate in -Nav items
        navItems.forEach((num, i)=>{
            num.classList.replace(`slide-out-${i+1}`, `slide-in-${i+1}`);
        })
    }else{
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        // Animate out - Nav items
        navItems.forEach((num, i)=>{
            num.classList.replace(`slide-in-${i+1}`, `slide-out-${i+1}`);
        })
    }
}

//Event listerens
menuBars.addEventListener('click', toggleNav);
navItems.forEach((num)=>{
    num.addEventListener('click', toggleNav);
})

