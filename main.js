document.addEventListener("DOMContentLoaded", () => {
    const smoother = ScrollSmoother.get();
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    const mobileBtn = document.querySelector('.btn-mobile');
    const btnImg = mobileBtn?.querySelector('img');
    const navList = document.querySelector('.header-menu');
    const heroBody = document.querySelector('.hero-body');

    const iconMenu = "assets/img/icon/icon-mobile-menu.svg";
    const iconClose = "assets/img/icon/icon-mobile-close.svg";

    const desktopBreakpoint = window.matchMedia("(min-width: 1025px)");

    function handleDesktopChanges(e) {
        if (e.matches) {
            heroBody?.classList.add('zindex-behind');
        } else {
            heroBody?.classList.remove('zindex-behind');
        }
    }

    handleDesktopChanges(desktopBreakpoint);

    desktopBreakpoint.addEventListener("change", handleDesktopChanges);

    /* ------------------------------------------------ */
    mobileBtn?.addEventListener('click', () => {
        navList.classList.toggle('show');

        const isMenuOpen = btnImg.getAttribute('src') === iconMenu;
        btnImg.setAttribute('src', isMenuOpen ? iconClose : iconMenu);
    });

    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            if (targetId !== "#" && targetId.startsWith('#')) {
                e.preventDefault();

                smoother.scrollTo(targetId, true, "top top");

                if (navList.classList.contains('show')) {
                    navList.classList.remove('show');
                    btnImg.setAttribute('src', iconMenu);
                }
            }
        });
    });
});