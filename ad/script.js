// GSAP Animation for Container and Text
gsap.fromTo('.container', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });

// Stagger animation for paragraphs and button
gsap.from('.text p, .button', {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.out',
    delay: 0.5
});

// GSAP scroll-triggered animation for the video
gsap.from('.video', {
    scrollTrigger: {
        trigger: '.video',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
    },
    scale: 0.9,
    duration: 1,
    ease: 'power1.inOut'
});

// Hover effect using GSAP
document.querySelectorAll('.text h2').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(el, { color: '#ff6347', duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(el, { color: '#333', duration: 0.3 });
    });
});
