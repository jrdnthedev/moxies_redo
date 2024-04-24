let isMenuToggle = false;
let isListToggle = false;
let isMenuListToggle = false;
const element = document.getElementById("hamburger_link");
element?.addEventListener("click", toggleMenu);
const stacked = document.getElementById('stacked_image_wrapper');
const toggle_btn = document.querySelectorAll('#hours .toggle_btn');
const menu_btn = document.getElementById('menu_section_btn');
menu_btn?.addEventListener('click', openMenuToggle);
const links = document.querySelectorAll("#menu_section_dropdown a");
const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

function toggleMenu() {
    isMenuToggle = !isMenuToggle;
    const body = document.getElementById('body');
    const nav = document.getElementById('hamburger_menu');
    const menu = document.getElementById('mobile_navigation');

    if(isMenuToggle) {
        body?.classList.add('scroll-lock');
        nav?.classList.add('active');
        menu?.classList.add('active');
    } else {
        body?.classList.remove('scroll-lock');
        nav?.classList.remove('active');
        menu?.classList.remove('active');
    }
    this.ariaExpanded = isMenuToggle;
    this.ariaHasPopup = isMenuToggle;
}

if(stacked && width >= 768) {
    stacked.addEventListener('mouseover', function(event){
        const target = event.target as HTMLElement;
        if(!target.parentElement) return null
        switch (target.parentElement.id) {     
            case 'stacked_image_1':
                // this.style.gridTemplate = 'min-content auto min-content / 48% 13% 13% 13% 13%';
                this.className = 'stacked_image_1';
                break;
            case 'stacked_image_2':
                // this.style.gridTemplate = 'min-content auto min-content / 13% 48% 13% 13% 13%';
                this.className = 'stacked_image_2';
                break;
            case 'stacked_image_3':
                // this.style.gridTemplate = 'min-content auto min-content / 13% 13% 48% 13% 13%';
                this.className = 'stacked_image_3';
                break;
            case 'stacked_image_4':
                // this.style.gridTemplate = 'min-content auto min-content / 13% 13% 13% 48% 13%';
                this.className = 'stacked_image_4';
                break;
            case 'stacked_image_5':
                // this.style.gridTemplate = 'min-content auto min-content / 13% 13% 13% 13% 48%';
                this.className = 'stacked_image_5';
                break;
            default:
                // this.style.gridTemplate = 'min-content auto min-content / 48% 13% 13% 13% 13%';
                this.className = target.parentElement.id;
                break;
        }
    });
}

if (stacked && width < 768) {
    stacked.addEventListener('click', function (event){
        const target = event.target as HTMLElement;
        if(!target.parentElement) return null
        let img_width = target.parentElement.clientWidth;
        switch (target.parentElement.id) {
            case 'stacked_image_1':
                // this.style.transform = 'translateX(calc(-'+img_width+'px))';
                this.className = 'stacked_image_1';
                break;
            case 'stacked_image_2':
                // this.style.transform = 'translateX(calc(-'+img_width+'px * 2))';
                this.className = 'stacked_image_2';
                break;
            case 'stacked_image_3':
                // this.style.transform = 'translateX(calc(-'+img_width+'px * 3))';
                this.className = 'stacked_image_3';
                break;
            case 'stacked_image_4':
                // this.style.transform = 'translateX(calc(-'+img_width+'px * 4))';
                this.className = 'stacked_image_4';
                break;
            case 'stacked_image_5':
                // this.style.transform = 'translateX(0)';
                this.className = 'stacked_image_5';
                break;
            default:
                this.style.transform = 'translateX(0)';
                break;
        }
    })
}

toggle_btn.forEach( button => {
    button.addEventListener("click", function(){
        isListToggle = !isListToggle;
        if(isListToggle){
            this.nextElementSibling?.classList.add('active');
            this.classList.add('active');
            
        } else {
            this.nextElementSibling?.classList.remove('active');
            this.classList.remove('active');
        }
        this.ariaExpanded = isListToggle;
    });
})

function openMenuToggle() {
    isMenuListToggle = !isMenuListToggle;
    const list = document.getElementById('menu_section_dropdown');

    if(isMenuListToggle) {
        list?.classList.add('active');
    } else {
        list?.classList.remove('active');
    }
    this.ariaExpanded = isMenuListToggle;
    this.ariaHasPopup = isMenuToggle;
}

links.forEach( item =>{
    item.addEventListener("click", clickHandler);
})

function clickHandler(e: Event) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).getBoundingClientRect().top +  window.scrollY;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}