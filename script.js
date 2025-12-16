document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuModal = document.getElementById('mobileMenuModal');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    const headerMenuLinks = document.querySelectorAll('.header__menu-link[href^="#"]');
    const footerMenuLinks = document.querySelectorAll('.footer__menu-link[href^="#"]');
    
    // Функция для управления мобильным меню
    function toggleMobileMenu() {
        if (mobileMenuModal.classList.contains('active')) {
            // Закрываем меню
            mobileMenuModal.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            // Открываем меню
            mobileMenuModal.classList.add('active');
            mobileMenuBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeMobileMenu() {
        mobileMenuModal.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    mobileMenuModal.addEventListener('click', function(e) {
        if (e.target === mobileMenuModal) {
            closeMobileMenu();
        }
    });
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    function smoothScroll(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
        });
    });
    
    headerMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
        });
    });
    
    footerMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
        });
    });
    
    const headerLinks = document.querySelectorAll('.header__menu-item a');
    if (headerLinks.length >= 5) {
        headerLinks[0].href = "#children";
        headerLinks[1].href = "#about-fund";
        headerLinks[2].href = "#how-it-works";
        headerLinks[3].href = "#faq";
        headerLinks[4].href = "#contacts";
    }
    
    const footerLinks = document.querySelectorAll('.footer__menu-item a');
    if (footerLinks.length >= 5) {
        footerLinks[0].href = "#children";
        footerLinks[1].href = "#about-fund";
        footerLinks[2].href = "#how-it-works";
        footerLinks[3].href = "#faq";
        footerLinks[4].href = "#contacts";
    }
    
    const childrenSection = document.querySelector('.children');
    const aboutSection = document.querySelector('.about');
    const fundInfoSection = document.querySelector('.fund-info');
    const helpProcessSection = document.querySelector('.help-process');
    const footerSection = document.querySelector('.footer');
    
    if (childrenSection) childrenSection.id = "children";
    if (aboutSection) aboutSection.id = "about-fund";
    if (fundInfoSection) fundInfoSection.id = "how-it-works";
    if (helpProcessSection) helpProcessSection.id = "faq";
    if (footerSection) footerSection.id = "contacts";
    
    const childModal = document.getElementById('childModal');
    const childModalClose = document.getElementById('childModalClose');
    const childCards = document.querySelectorAll('.child-card');
    
    childCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const childName = this.querySelector('.child-card__name')?.textContent || 'Ребенок';
            const childTagline = this.querySelector('.child-card__tagline')?.textContent || '';
            const childPrice = this.querySelector('.child-card__price')?.textContent || 'СТОИМОСТЬ 0 ₽';
            const childDescription = this.querySelector('.child-card__description')?.innerHTML || '';
            const buttonText = this.querySelector('.child-card__button')?.textContent || 'Подарить подарок';
            
            document.getElementById('childName').textContent = childName;
            document.getElementById('childTagline').textContent = childTagline;
            document.getElementById('childPrice').textContent = childPrice;
            document.getElementById('childDescription').innerHTML = childDescription;
            
            const modalButton = document.querySelector('.child-modal__actions .button_primary');
            if (modalButton) {
                modalButton.textContent = buttonText;
            }
            
            childModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    if (childModalClose) {
        childModalClose.addEventListener('click', function() {
            childModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    childModal.addEventListener('click', function(e) {
        if (e.target === childModal) {
            childModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (mobileMenuModal.classList.contains('active')) {
                closeMobileMenu();
            }
            if (childModal.classList.contains('active')) {
                childModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Обновляем анимацию при наведении на кнопку
    mobileMenuBtn.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'scale(1.1)';
        }
    });
    
    mobileMenuBtn.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'scale(1)';
        }
    });
    
    const donateButtons = document.querySelectorAll('.header__menu-btn, .mobile-menu-btn-donate');
    donateButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Функция пожертвования будет реализована в бэкенде');
        });
    });
    
    const giftButtons = document.querySelectorAll('.child-card__button, .child-modal__actions .button_primary');
    giftButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const childName = this.closest('.child-card')?.querySelector('.child-card__name')?.textContent || 
                            document.getElementById('childName')?.textContent || 'ребенку';
            alert(`Вы выбрали подарок для ${childName}. Функция оплаты будет реализована в бэкенде.`);
        });
    });
    
    const helpAllButtons = document.querySelectorAll('.button_secondary:not(.child-modal__actions .button_secondary)');
    helpAllButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Функция помощи всем детям будет реализована в бэкенде');
        });
    });
});