// Smooth scroll to sections
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuModal = document.getElementById('mobileMenuModal');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    const headerMenuLinks = document.querySelectorAll('.header__menu-link[href^="#"]');
    const footerMenuLinks = document.querySelectorAll('.footer__menu-link[href^="#"]');
    
    // Open mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close mobile menu
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenuModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close mobile menu when clicking outside
    mobileMenuModal.addEventListener('click', function(e) {
        if (e.target === mobileMenuModal) {
            mobileMenuModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking on links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Smooth scroll function
    function smoothScroll(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
    
    // Add click events to mobile menu links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
        });
    });
    
    // Add click events to header menu links
    headerMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
        });
    });
    
    // Add click events to footer menu links
    footerMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
        });
    });
    
    // Update header links with correct hrefs
    const headerLinks = document.querySelectorAll('.header__menu-item a');
    if (headerLinks.length >= 5) {
        headerLinks[0].href = "#children";
        headerLinks[1].href = "#about-fund";
        headerLinks[2].href = "#how-it-works";
        headerLinks[3].href = "#faq";
        headerLinks[4].href = "#contacts";
    }
    
    // Update footer links with correct hrefs
    const footerLinks = document.querySelectorAll('.footer__menu-item a');
    if (footerLinks.length >= 5) {
        footerLinks[0].href = "#children";
        footerLinks[1].href = "#about-fund";
        footerLinks[2].href = "#how-it-works";
        footerLinks[3].href = "#faq";
        footerLinks[4].href = "#contacts";
    }
    
    // Add IDs to sections for navigation
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
    
    // Child modal functionality
    const childModal = document.getElementById('childModal');
    const childModalClose = document.getElementById('childModalClose');
    const childCards = document.querySelectorAll('.child-card');
    
    // Open child modal
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
    
    // Close child modal
    if (childModalClose) {
        childModalClose.addEventListener('click', function() {
            childModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close child modal when clicking outside
    childModal.addEventListener('click', function(e) {
        if (e.target === childModal) {
            childModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (mobileMenuModal.classList.contains('active')) {
                mobileMenuModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (childModal.classList.contains('active')) {
                childModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Add hover effect to mobile menu button
    mobileMenuBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    mobileMenuBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Make donate buttons functional
    const donateButtons = document.querySelectorAll('.header__menu-btn, .mobile-menu-btn-donate');
    donateButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Функция пожертвования будет реализована в бэкенде');
            // Здесь можно добавить редирект на страницу оплаты
        });
    });
    
    // Make all "Подарить подарок" buttons functional
    const giftButtons = document.querySelectorAll('.child-card__button, .child-modal__actions .button_primary');
    giftButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent opening modal when clicking the button inside card
            const childName = this.closest('.child-card')?.querySelector('.child-card__name')?.textContent || 
                            document.getElementById('childName')?.textContent || 'ребенку';
            alert(`Вы выбрали подарок для ${childName}. Функция оплаты будет реализована в бэкенде.`);
            // Здесь можно добавить редирект на страницу оплаты
        });
    });
    
    // Make "Помочь всем детям" buttons functional
    const helpAllButtons = document.querySelectorAll('.button_secondary:not(.child-modal__actions .button_secondary)');
    helpAllButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Функция помощи всем детям будет реализована в бэкенде');
            // Здесь можно добавить редирект на общую страницу пожертвований
        });
    });
});