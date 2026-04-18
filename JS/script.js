// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Animations
    const heroTl = gsap.timeline();

    heroTl.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
    })
    .from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.hero .btn', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.scroll-indicator', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8');

    // 2. Project Cards Reveal Animation (Individual triggers for reliability)
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.1 * (i % 3) // Stagger cards in each row
        });
    });

    // 3. Header Animation on Scroll
    const header = document.querySelector('.header');
    ScrollTrigger.create({
        start: 'top top',
        onUpdate: (self) => {
            if (self.start < window.scrollY) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        }
    });

    // 4. Section Header Animation
    gsap.from('.section-header', {
        scrollTrigger: {
            trigger: '.section-header',
            start: 'top 85%'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // 5. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
