document.addEventListener('DOMContentLoaded', function() {

   
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn'); 

  
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="close-btn" id="close-lightbox">&times;</button>
            <img id="lightbox-image" src="" alt="Full size product image">
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('close-lightbox');

    
    function openLightbox(src) {
        lightboxImage.src = src;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }


    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'visible';
    }

    function makeImagesClickable() {
        const allImages = document.querySelectorAll('.product-card img');
        
        allImages.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function() {
                openLightbox(this.src);
            });
        });
    }

    const header = document.querySelector('.header');
    
    function handleStickyHeader() {
        if (window.scrollY > 80) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const headerHeight = header.offsetHeight + 20;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });


    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });

    function initialize() {
        console.log('%c✅ Stylco Group Catalogue 2026 Loaded Successfully', 
            'color: #1a5f38; font-weight: bold; font-size: 14px;');

        makeImagesClickable();
        window.addEventListener('scroll', handleStickyHeader);
        
        // Initial header check
        handleStickyHeader();
    }
    initialize();

});