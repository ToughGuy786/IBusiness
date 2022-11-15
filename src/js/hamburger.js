/*
|--------------------------------------------------------------------------
| Navigation Mobile Menu
|--------------------------------------------------------------------------
*/

const burgerButton = document.querySelector('.js-menu-toggle');

window.addEventListener('click',(e)=>{
    if (!e.target.closest('.js-menu-toggle')) {
        let mobNavigation = e.target.closest('.mob-menu');
        let mobNavigationWrapper = e.target.closest('.mob-menu__wrapper');
        if (!mobNavigation && !mobNavigationWrapper) {
            if (document.body.classList.contains('mob-menu--open')) {
                document.body.classList.remove('mob-menu--open');
                burgerButton.setAttribute('aria-expanded',false);
            }
        }
    }
});

let openMobNavMenu = (e) => {
    e.preventDefault();
    document.body.classList.add('mob-menu--open');
    burgerButton.setAttribute('aria-expanded',true);
};

let closeMobNavMenu = (e) => {
    e.preventDefault();
    document.body.classList.remove('mob-menu--open');
    burgerButton.setAttribute('aria-expanded',false);
};

burgerButton && burgerButton.addEventListener('click',(e) => {
    if(document.body.classList.contains('mob-menu--open')){
        closeMobNavMenu(e)
    } else {
        openMobNavMenu(e)
    }
});