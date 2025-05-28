// Script principal para o site Loberiam Shop

// Função para inicializar o carrossel de banners
function initBannerCarousel() {
    const bannerSlides = document.querySelectorAll('.banner-slide');
    const bannerDots = document.querySelectorAll('.banner-dot');
    let currentSlide = 0;
    
    // Função para mostrar um slide específico
    function showSlide(index) {
        // Esconde todos os slides
        bannerSlides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Remove a classe active de todos os dots
        bannerDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Mostra o slide atual e ativa o dot correspondente
        bannerSlides[index].style.display = 'block';
        bannerDots[index].classList.add('active');
        currentSlide = index;
    }
    
    // Inicializa com o primeiro slide
    showSlide(0);
    
    // Adiciona evento de clique aos dots
    bannerDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide();
        });
    });
    
    // Função para avançar para o próximo slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= bannerSlides.length) {
            next = 0;
        }
        showSlide(next);
    }
    
    // Função para voltar para o slide anterior
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = bannerSlides.length - 1;
        }
        showSlide(prev);
    }
    
    // Adiciona eventos aos botões de navegação
    const nextButton = document.querySelector('.banner-next');
    const prevButton = document.querySelector('.banner-prev');
    
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });
        
        prevButton.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });
    }
    
    // Troca automática de slides
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Reseta o intervalo quando há interação manual
    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Pausa a troca automática quando o mouse está sobre o banner
    const bannerContainer = document.querySelector('.banner-container');
    if (bannerContainer) {
        bannerContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        bannerContainer.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
}

// Função para inicializar o carrossel de produtos
function initProductCarousel() {
    const productCarousels = document.querySelectorAll('.product-carousel');
    
    productCarousels.forEach(carousel => {
        const container = carousel.querySelector('.product-carousel-container');
        const prevBtn = carousel.querySelector('.product-carousel-prev');
        const nextBtn = carousel.querySelector('.product-carousel-next');
        
        if (!container || !prevBtn || !nextBtn) return;
        
        const scrollAmount = 300; // Quantidade de pixels para rolar
        
        nextBtn.addEventListener('click', () => {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        prevBtn.addEventListener('click', () => {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        
        // Verifica se os botões devem ser exibidos com base na rolagem
        function checkScrollButtons() {
            if (container.scrollLeft <= 0) {
                prevBtn.classList.add('hidden');
            } else {
                prevBtn.classList.remove('hidden');
            }
            
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                nextBtn.classList.add('hidden');
            } else {
                nextBtn.classList.remove('hidden');
            }
        }
        
        // Verifica inicialmente e adiciona evento de rolagem
        checkScrollButtons();
        container.addEventListener('scroll', checkScrollButtons);
    });
}

// Função para inicializar o menu mobile
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMain = document.querySelector('.nav-main');
    
    if (menuToggle && navMain) {
        menuToggle.addEventListener('click', () => {
            navMain.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

// Função para inicializar o contador de produtos
function initQuantityCounter() {
    const quantityContainers = document.querySelectorAll('.quantity-container');
    
    quantityContainers.forEach(container => {
        const minusBtn = container.querySelector('.quantity-minus');
        const plusBtn = container.querySelector('.quantity-plus');
        const input = container.querySelector('.quantity-input');
        
        if (!minusBtn || !plusBtn || !input) return;
        
        minusBtn.addEventListener('click', () => {
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
            }
        });
        
        plusBtn.addEventListener('click', () => {
            let value = parseInt(input.value);
            input.value = value + 1;
        });
        
        input.addEventListener('change', () => {
            let value = parseInt(input.value);
            if (isNaN(value) || value < 1) {
                input.value = 1;
            }
        });
    });
}

// Função para inicializar as abas nas páginas de conta e produto
function initTabs() {
    // Abas da página de conta
    const accountMenuItems = document.querySelectorAll('.account-menu-item');
    
    accountMenuItems.forEach(item => {
        if (item.getAttribute('href') === '#') {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all menu items
                document.querySelectorAll('.account-menu-item').forEach(menuItem => {
                    menuItem.classList.remove('active');
                });
                
                // Add active class to clicked menu item
                this.classList.add('active');
                
                // Hide all tab contents
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Show selected tab content
                const tabId = this.getAttribute('data-tab');
                const tabContent = document.getElementById(tabId);
                if (tabContent) {
                    tabContent.classList.add('active');
                }
            });
        }
    });
    
    // Abas da página de produto
    const productTabs = document.querySelectorAll('.product-tab');
    
    productTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            document.querySelectorAll('.product-tab').forEach(t => {
                t.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents
            document.querySelectorAll('.product-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected tab content
            const tabContentId = this.getAttribute('data-tab');
            const tabContent = document.getElementById(tabContentId);
            if (tabContent) {
                tabContent.classList.add('active');
            }
        });
    });
}

// Função para inicializar o zoom de imagem do produto
function initProductImageZoom() {
    const productImage = document.querySelector('.product-image-main img');
    const productImageZoom = document.querySelector('.product-image-zoom');
    
    if (productImage && productImageZoom) {
        productImage.addEventListener('mousemove', function(e) {
            // Calcula a posição relativa do cursor na imagem
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = x / rect.width * 100;
            const yPercent = y / rect.height * 100;
            
            // Mostra a imagem ampliada
            productImageZoom.style.backgroundImage = `url(${this.src})`;
            productImageZoom.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
            productImageZoom.style.display = 'block';
        });
        
        productImage.addEventListener('mouseleave', function() {
            productImageZoom.style.display = 'none';
        });
    }
}

// Função para inicializar a galeria de imagens do produto
function initProductGallery() {
    const thumbnails = document.querySelectorAll('.product-image-thumbnail');
    const mainImage = document.querySelector('.product-image-main img');
    
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Remove a classe active de todas as miniaturas
                thumbnails.forEach(t => {
                    t.classList.remove('active');
                });
                
                // Adiciona a classe active à miniatura clicada
                this.classList.add('active');
                
                // Atualiza a imagem principal
                const imgSrc = this.querySelector('img').getAttribute('src');
                mainImage.setAttribute('src', imgSrc);
            });
        });
    }
}

// Função para inicializar o formulário de newsletter
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email === '') {
                alert('Por favor, informe seu e-mail.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Por favor, informe um e-mail válido.');
                return;
            }
            
            // Simulação de envio bem-sucedido
            alert('Obrigado por se cadastrar! Você receberá nossas ofertas em breve.');
            emailInput.value = '';
        });
    }
}

// Função auxiliar para validar e-mail
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Função para inicializar o botão de voltar ao topo
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        // Mostra o botão quando a página é rolada para baixo
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // Rola para o topo quando o botão é clicado
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Função para inicializar o menu de categorias
function initCategoryMenu() {
    const categoryItems = document.querySelectorAll('.category-item-with-submenu');
    
    categoryItems.forEach(item => {
        const submenu = item.querySelector('.category-submenu');
        
        if (submenu) {
            item.addEventListener('mouseenter', function() {
                submenu.classList.add('active');
            });
            
            item.addEventListener('mouseleave', function() {
                submenu.classList.remove('active');
            });
        }
    });
}

// Função para inicializar os filtros na página de categoria
function initCategoryFilters() {
    const filterToggles = document.querySelectorAll('.filter-toggle');
    
    filterToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const filterContent = this.nextElementSibling;
            
            if (filterContent) {
                filterContent.classList.toggle('active');
                this.classList.toggle('active');
            }
        });
    });
    
    // Botão para mostrar/esconder filtros em mobile
    const mobileFilterToggle = document.querySelector('.mobile-filter-toggle');
    const filterSidebar = document.querySelector('.category-filters');
    
    if (mobileFilterToggle && filterSidebar) {
        mobileFilterToggle.addEventListener('click', function() {
            filterSidebar.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Função para inicializar o formulário de contato
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const name = this.querySelector('#contact-name').value.trim();
            const email = this.querySelector('#contact-email').value.trim();
            const subject = this.querySelector('#contact-subject').value.trim();
            const message = this.querySelector('#contact-message').value.trim();
            
            if (name === '' || email === '' || subject === '' || message === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Por favor, informe um e-mail válido.');
                return;
            }
            
            // Simulação de envio bem-sucedido
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }
}

// Inicializa todas as funções quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initBannerCarousel();
    initProductCarousel();
    initMobileMenu();
    initQuantityCounter();
    initTabs();
    initProductImageZoom();
    initProductGallery();
    initNewsletterForm();
    initBackToTop();
    initCategoryMenu();
    initCategoryFilters();
    initContactForm();
});
