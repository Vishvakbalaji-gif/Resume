// Simple theme toggle and smooth scroll
(function(){
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  // restore
  if(localStorage.getItem('theme') === 'light') root.classList.add('light');

  btn.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    btn.textContent = isLight ? '☀️' : '🌙';
  });

  // smooth in-page link behavior
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });
})();