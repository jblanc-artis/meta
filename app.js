// HIDE MENU
let header = document.querySelector('#header');
let lastScrollTop = 0;
window.addEventListener('scroll',()=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        header.style.top="-90px";
    } else{
        header.style.top="0px";

    }
    lastScrollTop = scrollTop
    console.log('test scrolltop');
})

// MENU BURGER
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const links = document.querySelectorAll('.menu a, .logoSite');

burger.addEventListener('click',()=>{
    menu.classList.toggle('menu-open');
    burger.classList.toggle('burger-cross');
    console.log('test');
})

links.forEach(link=>{
    link.addEventListener('click', ()=>{
        burger.classList.remove('burger-cross');
        menu.classList.remove('menu-open');
    })
})

// SCROLL REVEAL
const animations = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{
        if(entry.intersectionRatio > 0){

            entry.target.classList.add('anim-reveal');
        } else{
            
            entry.target.classList.remove('anim-reveal');
        }
    })
})
animations.forEach(animation=>{
    observer.observe(animation);
})


// CAROUSSEL
const items = document.querySelectorAll('.slider .box');
const nbSlide = items.length;
const suivant = document.querySelector('.btn-right');
const precedent = document.querySelector('.btn-left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide -1){
        count++;

    } else{
        count = 0;
    }

    items[count].classList.add('active');
}

suivant.addEventListener('click',slideSuivante);


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;

    }else{
        count = nbSlide -1;
    }

    items[count].classList.add('active');
}

precedent.addEventListener('click', slidePrecedente);

/* GSAP */
gsap.from('#header', {duration : .5, y: '-120%',opacity : 1, delay:.5,ease: "power4.out"})
gsap.from('nav a', {duration : 1.2,opacity : 0, delay:.5, ease: "power4.out", stagger:.2} )
gsap.from('.logoSite', {duration : 1.4,opacity : 0, delay:2, ease: "power3.out", stagger:.2} )
gsap.from('.burger', {duration : 1.4,opacity : 0, delay:2, ease: "power3.out", stagger:.2} )
gsap.from('.titreText h1', {duration : 2.8,opacity : 0, delay:2, ease: "power3.out"} )
gsap.from('.titreText p', {duration : 2.8,opacity : 0, delay:2.6, ease: "power4.out"} )
gsap.from('.titreText video', {duration : 2.8,opacity : 0, delay:3, ease: "power2.out"} )

// CARD 3D
const card = document.querySelector('.vr-text');
const container = document.querySelector('#vr');
const cardTitle = document.querySelector('.titreh2');
const cardPara = document.querySelector('.paraP');

container.addEventListener('mousemove', (e)=>{
    // console.log('hey');
    card.style.transition = "all ease 0.5s";

    let xAxis = (window.innerWidth / 2 - e.pageX) / - 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / - 25;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;

    container.addEventListener('mouseenter', (e)=>{
        card.style.transition = "none";
        cardTitle.style.transform = `translateZ(150px)`;
        cardPara.style.transform = `translateZ(190px)`;
    })
    
    container.addEventListener('mouseleave', (e)=>{
        card.style.transition = "all ease 0.5s";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        cardTitle.style.transform = `translateZ(0px)`;
        cardPara.style.transform = `translateZ(0px)`;

    })
})