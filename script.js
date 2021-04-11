const btnNav = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__items');


let isNavClose = true , isAnimating = false;

const addClass = ( nodes , className ) =>{

setTimeout(() => {

    nodes.forEach( (node, idx) =>{
        node.style.animationDelay = .2 + ( idx * .1) + 's'
        node.classList.add(className);
    })

}, 6);
}
const removeClass = ( nodes, className ) => {
    nodes.forEach ( node=>{
        node.classList.remove(className);

    })
}

const navigationHandler = () => {

    btnNav.classList.toggle('nav-btn-active');
    nav.classList.toggle('nav-open');


    if(isNavClose){
        removeClass(navItems, 'nav__items__fadeout');
    addClass(navItems, 'nav__items__fadein');
    }else{
        removeClass(navItems, 'nav__items__fadein');
        addClass(navItems, 'nav__items__fadeout');
    }

    isNavClose = !isNavClose;
}

btnNav.addEventListener('click', navigationHandler);

