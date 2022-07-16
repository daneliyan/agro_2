let header = document.querySelector('.header');

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

(function () {
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');
    const menuItems = document?.querySelectorAll('[data-menu-item]');
    const overlay = document?.querySelector('[data-menu-overlay]');

    burger?.addEventListener('click', (e) => {
        burger?.classList.toggle('burger--active');
        menu?.classList.toggle('menu--active');

        if (menu?.classList.contains('menu--active')) {
            burger?.setAttribute('aria-expanded', 'true');
            burger?.setAttribute('aria-label', 'Закрыть меню');
            disableScroll();
        } else {
            burger?.setAttribute('aria-expanded', 'false');
            burger?.setAttribute('aria-label', 'Открыть меню');
            enableScroll();
        }
    });

    overlay?.addEventListener('click', () => {
        burger?.setAttribute('aria-expanded', 'false');
        burger?.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--active');
        enableScroll();
    });

    menuItems?.forEach(el => {
        el.addEventListener('click', () => {
            burger?.setAttribute('aria-expanded', 'false');
            burger?.setAttribute('aria-label', 'Открыть меню');
            burger.classList.remove('burger--active');
            menu.classList.remove('menu--active');
            enableScroll();
        });
    });
})();



let center = [48.8866527839977, 2.34310679732974];

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 17
    });
}

ymaps.ready(init);