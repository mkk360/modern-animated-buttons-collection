// Initialize GSAP
gsap.registerPlugin();

// Variables
let buttons = [];
let isAnimating = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons
    buttons = document.querySelectorAll('.it-btn');
    
    // Initialize animations
    initializeAnimations();
    
    // Add event listeners
    addEventListeners();
    
    // Start entrance animation
    animateButtonsEntrance();
});

// Initialize animations
function initializeAnimations() {
    // Set initial state for buttons
    gsap.set(buttons, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotation: 0
    });
    
    // Add animate-in class to all buttons
    buttons.forEach(button => {
        button.classList.add('animate-in');
    });
}

// Animate buttons entrance
function animateButtonsEntrance() {
    // Create a timeline for staggered entrance
    const tl = gsap.timeline({
        onComplete: () => {
            isAnimating = false;
            // Add visible class to all buttons
            buttons.forEach(button => {
                button.classList.add('visible');
            });
        }
    });
    
    // Animate title first
    tl.from('.display-4', {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: 'power3.out'
    })
    .from('.lead', {
        duration: 0.8,
        opacity: 0,
        y: -30,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.badge', {
        duration: 0.6,
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    }, '-=0.3')
    .to(buttons, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: {
            amount: 2,
            grid: "auto",
            from: "start"
        },
        ease: 'power3.out'
    }, '-=0.2');
    
    isAnimating = true;
}

// Add event listeners
function addEventListeners() {
    buttons.forEach((button, index) => {
        // Mouse enter
        button.addEventListener('mouseenter', () => handleMouseEnter(button, index));
        
        // Mouse leave
        button.addEventListener('mouseleave', () => handleMouseLeave(button, index));
        
        // Click
        button.addEventListener('click', () => handleClick(button, index));
        
        // Touch events for mobile
        button.addEventListener('touchstart', () => handleTouchStart(button, index));
        button.addEventListener('touchend', () => handleTouchEnd(button, index));
    });
    
    // Scroll animations
    window.addEventListener('scroll', handleScroll);
}

// Handle mouse enter
function handleMouseEnter(button, index) {
    if (isAnimating) return;
    
    const style = getButtonStyle(button);
    
    // Different hover animations based on button style
    switch(style) {
        case 'neon':
            animateNeonHover(button);
            break;
        case 'glow':
            animateGlowHover(button);
            break;
        case 'pulse':
            animatePulseHover(button);
            break;
        case 'bounce':
            animateBounceHover(button);
            break;
        case 'shimmer':
            animateShimmerHover(button);
            break;
        case 'transform':
            animateTransformHover(button);
            break;
        case 'circular':
            animateCircularHover(button);
            break;
        case 'glassmorphism':
            animateGlassmorphismHover(button);
            break;
        default:
            animateDefaultHover(button);
    }
    
    // Add floating animation
    gsap.to(button, {
        duration: 0.3,
        y: -3,
        ease: 'power2.out'
    });
}

// Handle mouse leave
function handleMouseLeave(button, index) {
    if (isAnimating) return;
    
    // Reset button position
    gsap.to(button, {
        duration: 0.3,
        y: 0,
        scale: 1,
        rotation: 0,
        ease: 'power2.out'
    });
}

// Handle click
function handleClick(button, index) {
    if (isAnimating) return;
    
    // Click animation
    const tl = gsap.timeline();
    
    tl.to(button, {
        duration: 0.1,
        scale: 0.95,
        ease: 'power2.out'
    })
    .to(button, {
        duration: 0.2,
        scale: 1.05,
        ease: 'back.out(1.7)'
    })
    .to(button, {
        duration: 0.15,
        scale: 1,
        ease: 'power2.out'
    });
    
    // Add ripple effect
    createRippleEffect(button);
    
    // Add success feedback
    showClickFeedback(button);
}

// Handle touch start
function handleTouchStart(button, index) {
    gsap.to(button, {
        duration: 0.1,
        scale: 0.95,
        ease: 'power2.out'
    });
}

// Handle touch end
function handleTouchEnd(button, index) {
    gsap.to(button, {
        duration: 0.2,
        scale: 1,
        ease: 'back.out(1.7)'
    });
}

// Handle scroll
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
    buttons.forEach((button, index) => {
        const rect = button.getBoundingClientRect();
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        
        if (isVisible && !button.classList.contains('scroll-animated')) {
            button.classList.add('scroll-animated');
            
            // Add subtle scroll animation
            gsap.from(button, {
                duration: 0.6,
                opacity: 0.5,
                y: 20,
                ease: 'power3.out',
                delay: index * 0.02
            });
        }
    });
}

// Get button style type
function getButtonStyle(button) {
    const className = button.className;
    
    if (className.includes('style21') || className.includes('style22') || 
        className.includes('style23') || className.includes('style24')) {
        return 'neon';
    } else if (className.includes('style57') || className.includes('style58') || 
               className.includes('style59') || className.includes('style60')) {
        return 'glow';
    } else if (className.includes('style65') || className.includes('style66') || 
               className.includes('style67') || className.includes('style68')) {
        return 'pulse';
    } else if (className.includes('style69') || className.includes('style70') || 
               className.includes('style71') || className.includes('style72')) {
        return 'bounce';
    } else if (className.includes('style61') || className.includes('style62') || 
               className.includes('style63') || className.includes('style64')) {
        return 'shimmer';
    } else if (className.includes('style53') || className.includes('style54') || 
               className.includes('style55') || className.includes('style56')) {
        return 'transform';
    } else if (className.includes('style41') || className.includes('style42') || 
               className.includes('style43') || className.includes('style44')) {
        return 'circular';
    } else if (className.includes('style17') || className.includes('style18') || 
               className.includes('style19') || className.includes('style20')) {
        return 'glassmorphism';
    }
    
    return 'default';
}

// Animation functions for different button types
function animateNeonHover(button) {
    gsap.to(button, {
        duration: 0.3,
        scale: 1.05,
        ease: 'power2.out'
    });
}

function animateGlowHover(button) {
    gsap.to(button, {
        duration: 0.3,
        scale: 1.1,
        ease: 'back.out(1.7)'
    });
}

function animatePulseHover(button) {
    gsap.to(button, {
        duration: 0.3,
        scale: 1.15,
        ease: 'elastic.out(1, 0.3)'
    });
}

function animateBounceHover(button) {
    gsap.to(button, {
        duration: 0.3,
        y: -8,
        ease: 'bounce.out'
    });
}

function animateShimmerHover(button) {
    gsap.to(button, {
        duration: 0.3,
        scale: 1.08,
        rotation: 2,
        ease: 'power2.out'
    });
}

function animateTransformHover(button) {
    gsap.to(button, {
        duration: 0.3,
        rotationX: 10,
        rotationY: 10,
        ease: 'power2.out'
    });
}

function animateCircularHover(button) {
    gsap.to(button, {
        duration: 0.5,
        rotation: 180,
        ease: 'power2.out'
    });
}

function animateGlassmorphismHover(button) {
    gsap.to(button, {
        duration: 0.3,
        scale: 1.12,
        ease: 'back.out(1.7)'
    });
}

function animateDefaultHover(button) {
    gsap.to(button, {
        duration: 0.3,
        scale: 1.05,
        ease: 'power2.out'
    });
}

// Create ripple effect
function createRippleEffect(button) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 1;
    `;
    
    button.appendChild(ripple);
    
    // Animate ripple
    gsap.to(ripple, {
        duration: 0.6,
        width: '100px',
        height: '100px',
        opacity: 0,
        ease: 'power2.out',
        onComplete: () => {
            ripple.remove();
        }
    });
}

// Show click feedback
function showClickFeedback(button) {
    const feedback = document.createElement('div');
    feedback.textContent = '✓';
    feedback.style.cssText = `
        position: absolute;
        top: -30px;
        right: -10px;
        color: #28a745;
        font-size: 20px;
        font-weight: bold;
        pointer-events: none;
        z-index: 10;
    `;
    
    button.style.position = 'relative';
    button.appendChild(feedback);
    
    // Animate feedback
    gsap.fromTo(feedback, {
        opacity: 0,
        y: 10,
        scale: 0.5
    }, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'back.out(1.7)',
        onComplete: () => {
            gsap.to(feedback, {
                duration: 0.3,
                opacity: 0,
                y: -10,
                delay: 0.5,
                onComplete: () => {
                    feedback.remove();
                }
            });
        }
    });
}

// Utility functions
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedScroll = debounce(handleScroll, 10);
window.addEventListener('scroll', debouncedScroll);

// Special effects for bonus buttons
function initializeBonusEffects() {
    // Lightning effect for style101
    const lightning = document.querySelector('.it-btn--style101');
    if (lightning) {
        setInterval(() => {
            gsap.to(lightning, {
                duration: 0.1,
                boxShadow: '0 0 30px rgba(255, 255, 0, 0.8)',
                ease: 'power2.out',
                yoyo: true,
                repeat: 1
            });
        }, 3000);
    }
    
    // Floating effect for magical buttons
    const magicalButtons = document.querySelectorAll('.it-btn--style107');
    magicalButtons.forEach(button => {
        gsap.to(button, {
            duration: 2,
            y: -5,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1
        });
    });
    
    // Sparkle effect for style104
    const sparkleButton = document.querySelector('.it-btn--style104');
    if (sparkleButton) {
        setInterval(() => {
            createSparkle(sparkleButton);
        }, 1000);
    }
}

// Create sparkle effect
function createSparkle(button) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: absolute;
        top: ${randomBetween(-10, 10)}px;
        right: ${randomBetween(-10, 10)}px;
        font-size: 12px;
        pointer-events: none;
        z-index: 10;
    `;
    
    button.style.position = 'relative';
    button.appendChild(sparkle);
    
    gsap.fromTo(sparkle, {
        opacity: 0,
        scale: 0,
        rotation: 0
    }, {
        duration: 1,
        opacity: 1,
        scale: 1,
        rotation: 360,
        ease: 'power2.out',
        onComplete: () => {
            gsap.to(sparkle, {
                duration: 0.5,
                opacity: 0,
                scale: 0,
                onComplete: () => {
                    sparkle.remove();
                }
            });
        }
    });
}

// Initialize bonus effects after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeBonusEffects, 3000);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        // Add focus ring animation
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('it-btn')) {
            gsap.to(focusedElement, {
                duration: 0.3,
                scale: 1.02,
                ease: 'power2.out'
            });
        }
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Tab') {
        // Remove focus ring animation from previously focused element
        const buttons = document.querySelectorAll('.it-btn');
        buttons.forEach(button => {
            if (button !== document.activeElement) {
                gsap.to(button, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            }
        });
    }
});

// Mouse cursor trail effect
let mouseTrail = [];
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create trail particle
    if (Math.random() > 0.95) {
        createTrailParticle(mouseX, mouseY);
    }
});

function createTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        top: ${y}px;
        left: ${x}px;
        width: 4px;
        height: 4px;
        background: rgba(102, 126, 234, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
    `;
    
    document.body.appendChild(particle);
    
    gsap.to(particle, {
        duration: 1,
        opacity: 0,
        scale: 0,
        ease: 'power2.out',
        onComplete: () => {
            particle.remove();
        }
    });
}

// Intersection Observer for performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe all buttons
buttons.forEach(button => {
    observer.observe(button);
});

// Add CSS for in-view animation
const style = document.createElement('style');
style.textContent = `
    .it-btn.in-view {
        animation: slideInUp 0.6s ease-out;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('🎉 Advanced Button Kit Loaded!');
console.log('✨ 108 Unique Button Styles');
console.log('🚀 GSAP Animations Active');
console.log('💫 Interactive Effects Ready');

// Export functions for external use
window.ButtonKit = {
    animateButton: (selector, animation) => {
        const button = document.querySelector(selector);
        if (button) {
            switch(animation) {
                case 'pulse':
                    animatePulseHover(button);
                    break;
                case 'glow':
                    animateGlowHover(button);
                    break;
                case 'bounce':
                    animateBounceHover(button);
                    break;
                default:
                    animateDefaultHover(button);
            }
        }
    },
    createRipple: (selector) => {
        const button = document.querySelector(selector);
        if (button) {
            createRippleEffect(button);
        }
    },
    showFeedback: (selector) => {
        const button = document.querySelector(selector);
        if (button) {
            showClickFeedback(button);
        }
    }
};