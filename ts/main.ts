let isToggle = false;

const element = document.getElementById("hamburger_link");
element?.addEventListener("click", toggle);

function toggle() {
    isToggle = !isToggle;
    const body = document.getElementById('body');
    const nav = document.getElementById('hamburger_menu');

    if(isToggle) {
        body?.classList.add('scroll-lock');
        nav?.classList.add('active');
    } else {
        body?.classList.remove('scroll-lock');
        nav?.classList.remove('active');
    }

}