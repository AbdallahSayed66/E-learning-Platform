// مؤشر التحميل
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        onComplete: function() {
            loader.style.display = 'none';
            animatePage();
        }
    });
});

// تحريك الصفحة بعد التحميل
function animatePage() {
    // تحريك النافبار
    gsap.from('.modern-nav', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // تحريك عناصر الهيرو
    gsap.from('.title-word', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.3,
        ease: 'back.out'
    });
    
    gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power2.out'
    });
    
    gsap.from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1.1,
        ease: 'power2.out'
    });
    
    gsap.from('.stat-item', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        delay: 1.4,
        ease: 'power2.out'
    });
    
    // تحريك البطاقات العائمة
    gsap.to('.math-card', {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'elastic.out(1, 0.5)'
    });
    
    gsap.to('.physics-card', {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8,
        ease: 'elastic.out(1, 0.5)'
    });
    
    gsap.to('.chemistry-card', {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.1,
        ease: 'elastic.out(1, 0.5)'
    });
    
    // تحريك الأشكال
    gsap.to('.shape-circle', {
        x: 20,
        y: -20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    gsap.to('.shape-triangle', {
        x: -30,
        y: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    gsap.to('.shape-square', {
        rotation: 90,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // تأثيرات التمرير
    gsap.utils.toArray('.grade-card').forEach((card, i) => {
        ScrollTrigger.create({
            trigger: card,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(card, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'back.out'
                });
            }
        });
    });
    
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        ScrollTrigger.create({
            trigger: card,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(card, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: 'back.out'
                });
            }
        });
    });
    
    // عدادات الأرقام
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
        
        function updateCounter() {
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        }
    });
    
    // قائمة الهاتف
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // تأثيرات hover للروابط
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // تأثيرات hover للبطاقات
    const gradeCards = document.querySelectorAll('.grade-card');
    
    gradeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // تأثيرات hover لأيقونات المميزات
    const featureIcons = document.querySelectorAll('.feature-icon');
    
    featureIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            gsap.to(this.querySelector('i'), {
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        icon.addEventListener('mouseleave', function() {
            gsap.to(this.querySelector('i'), {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// تأثير التمرير للنافبار
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.modern-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        gsap.to('.nav-logo', { scale: 0.9, duration: 0.3 });
    } else {
        nav.classList.remove('scrolled');
        gsap.to('.nav-logo', { scale: 1, duration: 0.3 });
    }
});

// تأثيرات النموذج
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        const label = this.nextElementSibling;
        gsap.to(label, {
            y: -20,
            color: '#4361ee',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '') {
            const label = this.nextElementSibling;
            gsap.to(label, {
                y: 0,
                color: '#8d99ae',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
    });
});