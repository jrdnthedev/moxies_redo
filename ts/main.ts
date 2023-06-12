let isMenuToggle = false;
let isListToggle = false;
let isMenuListToggle = false;
const element = document.getElementById("hamburger_link");
element?.addEventListener("click", toggleMenu);
const stacked = document.getElementById('stacked_image_wrapper');
const toggle_btn = document.querySelectorAll('#hours .toggle_btn');
const menu_btn = document.getElementById('menu_section_btn');
menu_btn?.addEventListener('click', openMenuToggle);

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

stacked?.addEventListener('mouseover', function(event){
    const target = event.target as HTMLElement;
    switch (target.parentElement?.id) {
        case 'stacked_image_1':
            this.style.gridTemplate = 'min-content auto min-content / 41% 13% 13% 13% 13%';
            break;
        case 'stacked_image_2':
            this.style.gridTemplate = 'min-content auto min-content / 13% 41% 13% 13% 13%';
            break;
        case 'stacked_image_3':
            this.style.gridTemplate = 'min-content auto min-content / 13% 13% 41% 13% 13%';
            break;
        case 'stacked_image_4':
            this.style.gridTemplate = 'min-content auto min-content / 13% 13% 13% 41% 13%';
            break;
        case 'stacked_image_5':
            this.style.gridTemplate = 'min-content auto min-content / 13% 13% 13% 13% 41%';
            break;
        default:
            this.style.gridTemplate = 'min-content auto min-content / 41% 13% 13% 13% 13%';
            break;
    }
});

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
}