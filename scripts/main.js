window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
  
    const progressBar = document.querySelector('.scroll-progress');
    progressBar.style.width = scrollPercent + '%';
  });
  