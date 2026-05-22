const overlay = document.getElementById('welcome-overlay');
const bar = document.getElementById('progress-bar');

bar.style.transition = 'width 10s linear';
bar.style.width = '100%';

setTimeout(function() {
  bar.style.width = '0%';
}, 50);

setTimeout(function() {
  overlay.style.transition = 'opacity 0.5s ease';
  overlay.style.opacity = '0';

  setTimeout(function() {
    overlay.remove();
  }, 500);
}, 10000);

overlay.addEventListener('click', function() {
  overlay.remove();
});
