// GSAP Animation for Card Coming Towards User from Top and Going Back on Hover
document.querySelectorAll('.card').forEach(card => {
    // Card moves toward the user from the top
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            translateY: 0,       // Move the card down to its original position
            translateZ: 50,      // Move towards the user (closer on the Z-axis)
            rotateX: 20,          // Ensure no rotation on hover
            duration: 0.3,       // Duration of animation
            ease: 'power3.out',  // Smooth easing
        });
    });

    // Card moves back to its original position when hover ends
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            translateY: -50,     // Move the card back upwards (as if going back to the top)
            translateZ: 40,       // Reset Z-axis movement (move back away from the user)
            rotateX: 0,          // Keep rotation neutral
            duration: 0.3,       // Duration of animation
            ease: 'power3.out',  // Smooth easing
        });
    });
});

// Grow effect on paragraph (`<p>`) and button when hovered or clicked
document.querySelectorAll('.box-content p, .button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(el, {
            scale: 1.1,
            duration: 0.1,
            ease: 'power2.out',
        });
    });

    el.addEventListener('mouseleave', () => {
        gsap.to(el, {
            scale: 1,
            duration: 0.1,
            ease: 'power2.out',
        });
    });

    // Optional: You can add an additional animation for click
    el.addEventListener('click', () => {
        gsap.to(el, {
            scale: 1.2,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
        });
    });
});
