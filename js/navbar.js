document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const navMenu = document.querySelector('.navbar ul');
    const navLinks = document.querySelectorAll('.navbar ul li a');
    
    function isMobile() {
        return window.innerWidth <= 768;
    }

    function toggleMenu(show) {
        if (isMobile()) {
            if (show) {
                navMenu.style.display = 'flex';
                navMenu.classList.add('active');
                document.body.classList.add('menu-open');
                closeMenu.style.display = 'block';
                
                setTimeout(() => {
                    navMenu.querySelectorAll('li').forEach((item, index) => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                        item.style.transitionDelay = `${index * 0.1}s`;
                    });
                }, 10);
            } else {
                navMenu.querySelectorAll('li').forEach(item => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                });
                closeMenu.style.display = 'none';
                
                setTimeout(() => {
                    navMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    navMenu.style.display = 'none';
                }, 300);
            }
        }
    }

    menuToggle.addEventListener('click', () => {
        toggleMenu(true);
    });

    closeMenu.addEventListener('click', () => {
        toggleMenu(false);
    });

    // Handle navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobile()) {
                toggleMenu(false);
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMobile() && 
            navMenu.classList.contains('active') &&
            !e.target.closest('.navbar ul') &&
            !e.target.closest('.menu-toggle')) {
            toggleMenu(false);
        }
    });

    // Reset menu state on window resize
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            navMenu.style.display = '';
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            closeMenu.style.display = 'none';
            navMenu.querySelectorAll('li').forEach(item => {
                item.style.opacity = '';
                item.style.transform = '';
                item.style.transitionDelay = '';
            });
        }
    });

    // Open menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.add('open');
        menuToggle.style.display = 'none';
        closeMenu.style.display = 'block';
    });

    // Close menu
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.style.display = 'block';
        closeMenu.style.display = 'none';
    });
});
