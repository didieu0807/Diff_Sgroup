const startCountingWithTimeout = (counter) => {
    const target = +counter.getAttribute('data-target');
    const duration = 1500; 
    const stepTime = 100;   
    const steps = duration / stepTime;
    const increment = target / steps;
    
    let current = 0;

    const run = () => {
        current += increment;
        
        if (current >= target) {
            counter.innerText = target.toLocaleString('vi-VN');

        } else {
            counter.innerText = Math.floor(current).toLocaleString('vi-VN');
            
            setTimeout(run, stepTime); 
        }
    };

    run(); 
};

const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated', 
        offset: 50,               
        mobile: true,
        live: true,

        callback: function(box) {
            
           
            if (box.classList.contains('counter')) {
                startCountingWithTimeout(box);
            }
        }
    });
    
    wow.init();

document.addEventListener("DOMContentLoaded", () => {
    
    const smallBoxes = document.querySelectorAll('.small-box');

    smallBoxes.forEach(box => {
        box.style.transition = "all 0.3s ease";

        box.addEventListener('mouseenter', () => {
            box.style.setProperty('border', '1px solid rgba(212, 99, 58, 0.8)', 'important');
            box.style.setProperty('background', 'rgba(203, 169, 158, 0.15)', 'important');
            box.style.setProperty('backdrop-filter', 'blur(15px)', 'important');
            box.style.setProperty('-webkit-backdrop-filter', 'blur(15px)', 'important');
            box.style.cursor = "pointer";
        });

        box.addEventListener('mouseleave', () => {
            box.style.setProperty('border', '1px solid rgba(255, 255, 255, 0.12)', 'important');
            box.style.setProperty('background', 'rgba(255, 255, 255, 0.03)', 'important');
            box.style.setProperty('backdrop-filter', 'blur(8px)', 'important');
            box.style.setProperty('-webkit-backdrop-filter', 'blur(8px)', 'important');
        });
    });
});
/* phần cuộn */
document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.querySelector('.calendar-bottom');
    if (calendar) {
        const originalHtml = calendar.innerHTML;
      calendar.innerHTML = originalHtml + originalHtml;
    }
  });
/* chuyển menu thanh navbar */
const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const navOverlay = document.getElementById('none-nav');

openMenuBtn.addEventListener('click', () => {
    navOverlay.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    navOverlay.classList.remove('active');
});
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navOverlay.classList.remove('active');
    });
});