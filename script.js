// brillantini del mouse
document.addEventListener('mousemove', (e) => {
  const s = document.createElement('div');
  s.className = 'sparkle';

  s.style.left = (e.clientX - 4) + 'px';
  s.style.top = (e.clientY - 4) + 'px';
  
  document.body.appendChild(s);
  
  setTimeout(() => s.remove(), 900);
});
