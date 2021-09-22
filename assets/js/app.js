function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}

window.addEventListener('scroll', scrollHeader)



document.addEventListener('DOMContentLoaded', () =>{

    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1 ,
    {width: '100%'},
    {width: '0%', display: 'none', opacity:0, delay: 6, ease: Expo.easeInOut})

    .fromTo('.logo', 1 ,
    {y:-50, opacity:0},
    {y:0, opacity:1, ease: Expo.easeInOut}, '-=0.5')

   
    .fromTo('.ani1', .5,
    {y:-50, opacity:0},
    {y:0, opacity:1, ease: Expo.easeInOut}, '-=0.2')

    .fromTo('.ani2', .5,
    {y:-50, opacity:0},
    {y:0, opacity:1, ease: Expo.easeInOut}, '-=0.2')

    .fromTo('.ani3', .5,
    {y:-50, opacity:0},
    {y:0, opacity:1, ease: Expo.easeInOut}, '-=0.2')

    .fromTo('.ani4', .5,
    {y:50, opacity:0},
    {y:0, opacity:1, ease: Expo.easeInOut}, '-=0.2')

    .fromTo('.ani5', 1,
    {y:-50, opacity:0},
    {y:0, opacity:1, ease: Expo.easeInOut}, '-=0.1')

    .fromTo('.ani6', 1,
    {y:50, opacity:0},
    {y:0, opacity:1, ease: Expo.easeInOut}, '-=0.2')

    .fromTo('.ani7', 1,
    {x:50, opacity:0},
    {x:0, opacity:1, ease: Expo.easeInOut}, '-=0.2')

    .fromTo('.ani8', 1,
    {x:-50, opacity:0},
    {x:0, opacity:1, ease: Expo.easeInOut}, '-=0.8')
    
})



// MENU MOBILE

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}

showMenu('bx', 'menu-mobile')