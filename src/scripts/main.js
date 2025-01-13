document.addEventListener("DOMContentLoaded",function(){

    const buttons = document.querySelectorAll("[data-tab-button]");
    const questions = document.querySelectorAll("[data-faq-question]");
    const hero = document.querySelector(".hero");
    const heroHeight = hero.clientHeight;

    window.addEventListener('scroll', function(){
        const currentPos = window.scrollY;
        if(currentPos < heroHeight){
            remover()
            console.log("foi")
        }else{
            hider()
        }
    })

    for (let i = 0; i<buttons.length;i++){
        buttons[i].addEventListener("click",function(button){
            const targetTab = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            tabHider();
            tab.classList.add("shows__list--is-active");
            buttonHider();
            button.target.classList.add("shows__tabs__button--is-active");
        })
    }
    for (let i = 0; i<questions.length;i++){
        questions[i].addEventListener("click",switcher);
    }

})

function hider(e){
    const header = document.querySelector("header");
    header.classList.add("header--is-hidden");
}
function remover(e){
    const header = document.querySelector("header");
    header.classList.remove("header--is-hidden");
}

function switcher(e) {
    const tag = 'faq__questions__item--is-open'
    const eFather = e.target.parentNode;

    eFather.classList.toggle(tag);
}

function buttonHider(){
    const button = document.querySelectorAll("[data-tab-button]");
    for(let i = 0;i<button.length;i++){
        button[i].classList.remove("shows__tabs__button--is-active");
    }
}
function tabHider(){
    const tabs = document.querySelectorAll("[data-tab-id]");
    for(let i = 0;i<tabs.length;i++){
        tabs[i].classList.remove("shows__list--is-active");
    }
}