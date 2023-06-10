let isToggle = false;

const element = document.getElementById("hamburger_link");
element?.addEventListener("click", toggle);
const stacked = document.getElementById('stacked_image_wrapper');

function toggle() {
    isToggle = !isToggle;
    const body = document.getElementById('body');
    const nav = document.getElementById('hamburger_menu');
    const menu = document.getElementById('mobile_navigation');

    if(isToggle) {
        body?.classList.add('scroll-lock');
        nav?.classList.add('active');
        menu?.classList.add('active');
    } else {
        body?.classList.remove('scroll-lock');
        nav?.classList.remove('active');
        menu?.classList.remove('active');
    }

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
