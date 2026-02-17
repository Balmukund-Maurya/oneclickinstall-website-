// ========================================
// OneClickInstall Website JavaScript
// Interactive Features & Platform Detection
// ========================================

// Platform Detection
function detectPlatform() {
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    if (platform.includes('mac') || userAgent.includes('mac')) {
        return 'macos';
    } else if (platform.includes('win') || userAgent.includes('win')) {
        return 'windows';
    } else if (platform.includes('linux') || userAgent.includes('linux')) {
        return 'linux';
    }
    return 'macos'; // Default fallback
}

// Update UI based on platform
function updatePlatformUI() {
    const platform = detectPlatform();
    const platformName = document.getElementById('platform-name');
    const downloadPrimary = document.getElementById('download-primary');

    // Platform names mapping
    const platformNames = {
        'macos': 'macOS',
        'windows': 'Windows',
        'linux': 'Linux'
    };

    // Update hero download button
    if (platformName) {
        platformName.textContent = platformNames[platform];
    }

    // Add click handlers for download buttons
    const macosBtn = document.querySelector('[data-platform="macos"]');
    const windowsBtn = document.querySelector('[data-platform="windows"]');

    if (macosBtn) {
        macosBtn.addEventListener('click', () => {
            handleDownload('macos');
        });
    }

    if (windowsBtn) {
        windowsBtn.addEventListener('click', () => {
            handleDownload('windows');
        });
    }

    if (downloadPrimary) {
        downloadPrimary.addEventListener('click', () => {
            handleDownload(platform);
        });
    }
}

// Handle download button clicks
function handleDownload(platform) {
    const downloadUrls = {
        'macos': 'mysoftware/OneClickInstall-1.0.0-arm64.dmg',
        'windows': 'mysoftware/OneClickInstall Setup 1.0.0.exe'
    };

    const filenames = {
        'macos': 'OneClickInstall.dmg',
        'windows': 'OneClickInstall-Setup.exe'
    };

    const url = downloadUrls[platform];
    const filename = filenames[platform];

    if (url) {
        console.log(`Download initiated for ${platform}`);

        // Create a temporary link to force the filename
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Download not available for this platform yet.');
    }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Handle navbar scroll effect
function initNavbarScroll() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 15, 0.95)';
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(10, 10, 15, 0.8)';
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// Handle image loading with fallback
function initImageHandling() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        // Add loading placeholder
        img.style.backgroundColor = 'rgba(26, 26, 36, 0.4)';

        img.addEventListener('error', function () {
            // Hide broken image icon
            this.style.display = 'none';

            // Create placeholder
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(26, 26, 36, 0.4);
                color: #9ca3af;
                font-size: 0.875rem;
                text-align: center;
                padding: 2rem;
            `;
            placeholder.textContent = 'Screenshot coming soon';

            // Replace image with placeholder
            this.parentNode.appendChild(placeholder);
        });

        img.addEventListener('load', function () {
            this.style.backgroundColor = 'transparent';
        });
    });
}

// Add typing effect to hero title (optional enhancement)
function initTypingEffect() {
    const gradientText = document.querySelector('.hero-title .gradient-text');
    if (!gradientText) return;

    const text = gradientText.textContent;
    gradientText.textContent = '';
    gradientText.style.borderRight = '2px solid var(--primary)';

    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            gradientText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            gradientText.style.borderRight = 'none';
        }
    }

    // Uncomment to enable typing effect
    // setTimeout(type, 500);
}

// Handle Easter eggs (optional fun feature)
function initEasterEggs() {
    let rocketClicks = 0;
    const logoIcon = document.querySelector('.logo-icon');

    if (logoIcon) {
        logoIcon.addEventListener('click', () => {
            rocketClicks++;

            if (rocketClicks === 5) {
                // Create confetti effect or fun animation
                console.log('🚀 OneClickInstall is awesome!');
                logoIcon.style.animation = 'spin 0.5s ease-in-out';
                setTimeout(() => {
                    logoIcon.style.animation = '';
                    rocketClicks = 0;
                }, 500);
            }
        });
    }
}

// Add keyframe for spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updatePlatformUI();
    initSmoothScroll();
    initScrollAnimations();
    initNavbarScroll();
    initImageHandling();
    initEasterEggs();

    // Log initialization
    console.log('%c🚀 OneClickInstall Website', 'color: #3b82f6; font-size: 24px; font-weight: bold;');
    console.log('%cStreamlining your dev environment setup', 'color: #8b5cf6; font-size: 14px;');
});

// Handle window resize for responsive adjustments
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate any necessary layout adjustments
        console.log('Window resized');
    }, 250);
});

// Preload critical images (optional performance optimization)
function preloadImages() {
    const imagesToPreload = [
        'assets/hero-mockup.png',
        'assets/screenshot-grid.png',
        'assets/screenshot-list.png'
    ];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload on page load
window.addEventListener('load', preloadImages);
