// Modern Buttons JS (optional)

document.addEventListener('DOMContentLoaded', () => {
  // Toggle loading button
  const loadingButtons = document.querySelectorAll('.modern-btn--loading');
  loadingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('loading')) {
        btn.classList.add('loading');
        // Simulate an async action (e.g., fetch)
        setTimeout(() => {
          btn.classList.remove('loading');
        }, 2500);
      }
    });
  });

  // Progress buttons
  const progressButtons = document.querySelectorAll('.modern-btn--progress');
  progressButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      let progress = 0;
      const bar = btn.querySelector('.progress-bar');
      const interval = setInterval(() => {
        progress += 10;
        bar.style.width = progress + '%';
        if (progress >= 100) {
          clearInterval(interval);
          btn.setAttribute('data-progress', '100');
        }
      }, 200);
    });
  });

  // Success buttons
  const successButtons = document.querySelectorAll('.modern-btn--success');
  successButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('success')) {
        btn.classList.add('success');
        setTimeout(() => {
          btn.classList.remove('success');
        }, 2000);
      }
    });
  });
});