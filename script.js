// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 70; // Account for fixed navbar
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }

        // Add shadow to navbar on scroll
        const navbar = document.querySelector('.navbar');
        if (window.pageYOffset > 0) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const recipientEmail = document.getElementById('recipientEmail').value;
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !recipientEmail || !subject || !message) {
            showFormMessage('Please fill in all fields and select a recipient email.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // In a real application, you would send this data to a server
        // For now, we'll just show a success message
        showFormMessage(`Thank you for your message! I will get back to you soon at ${recipientEmail}.`, 'success');
        
        // Reset form
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });

    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.education-item, .project-card, .skill-tag');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Handle profile image error (if image doesn't exist, show placeholder)
    const profileImage = document.getElementById('profileImage');
    profileImage.addEventListener('error', function() {
        // Create a placeholder SVG
        const placeholder = createPlaceholderSVG();
        this.src = placeholder;
    });

    function createPlaceholderSVG() {
        const svg = `data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="#667eea"/>
                <circle cx="100" cy="75" r="30" fill="white" opacity="0.8"/>
                <path d="M 50 150 Q 100 110, 150 150" fill="white" opacity="0.8"/>
                <text x="100" y="185" font-family="Arial" font-size="14" fill="white" text-anchor="middle" opacity="0.8">Profile Photo</text>
            </svg>
        `)}`;
        return svg;
    }

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollPosition = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Initialize
    highlightNavigation();

    // Typing effect for hero subtitle
    const typingText = document.getElementById('typing-text');
    const titles = ['AI Developer', 'Problem Solver', 'Tech Enthusiast'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    function typeEffect() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            currentText = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        typingText.textContent = currentText;

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typeSpeed = 500; // Pause before starting new title
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start typing effect after a short delay
    setTimeout(typeEffect, 1000);
    // Add hover effect to project cards
    const projectCardsHover = document.querySelectorAll('.project-card');
    projectCardsHover.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Projects Carousel - Horizontal Scrollable
    const carousel = document.getElementById('projectsCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const projectCards = document.querySelectorAll('.project-card');
    
    let isScrolling = false;
    
    function scrollCarousel(direction) {
        if (isScrolling) return;
        isScrolling = true;
        
        const cardWidth = 350 + 32; // card width + gap
        const scrollAmount = cardWidth;
        
        if (direction === 'left') {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        } else {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
        
        // Reset scrolling flag after animation
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
    
    function updateButtonStates() {
        const scrollLeft = carousel.scrollLeft;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        
        prevBtn.disabled = scrollLeft <= 0;
        nextBtn.disabled = scrollLeft >= maxScroll - 10; // Small tolerance
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => scrollCarousel('right'));
    prevBtn.addEventListener('click', () => scrollCarousel('left'));
    
    // Trackpad/mouse wheel support
    carousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 1 : -1;
        carousel.scrollLeft += delta * 50; // Adjust scroll speed
    });
    
    // Update button states on scroll
    carousel.addEventListener('scroll', updateButtonStates);
    
    // Initialize button states
    updateButtonStates();

    // Certifications Carousel - Horizontal Scrollable
    const certCarousel = document.getElementById('certificationsCarousel');
    const certPrevBtn = document.getElementById('certPrevBtn');
    const certNextBtn = document.getElementById('certNextBtn');
    const certCards = document.querySelectorAll('.certification-card');
    
    let isCertScrolling = false;
    
    function scrollCertCarousel(direction) {
        if (isCertScrolling) return;
        isCertScrolling = true;
        
        const cardWidth = 300 + 32; // card width + gap
        const scrollAmount = cardWidth;
        
        if (direction === 'left') {
            certCarousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        } else {
            certCarousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
        
        // Reset scrolling flag after animation
        setTimeout(() => {
            isCertScrolling = false;
        }, 500);
    }
    
    function updateCertButtonStates() {
        const scrollLeft = certCarousel.scrollLeft;
        const maxScroll = certCarousel.scrollWidth - certCarousel.clientWidth;
        
        certPrevBtn.disabled = scrollLeft <= 0;
        certNextBtn.disabled = scrollLeft >= maxScroll - 10; // Small tolerance
    }
    
    // Event listeners for certifications
    certNextBtn.addEventListener('click', () => scrollCertCarousel('right'));
    certPrevBtn.addEventListener('click', () => scrollCertCarousel('left'));
    
    // Trackpad/mouse wheel support for certifications
    certCarousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 1 : -1;
        certCarousel.scrollLeft += delta * 50; // Adjust scroll speed
    });
    
    // Update button states on scroll for certifications
    certCarousel.addEventListener('scroll', updateCertButtonStates);
    
    // Initialize certification button states
    updateCertButtonStates();

    // Console message
    console.log('%c👋 Welcome to my portfolio!', 'color: #4a90e2; font-size: 20px; font-weight: bold;');
    console.log('%cInterested in the code? Check out the repository on GitHub!', 'color: #666; font-size: 14px;');
});
