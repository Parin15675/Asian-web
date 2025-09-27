
// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navmenu a[href^="#"]');
const backTop = document.querySelector('.backtop');

function onScroll(){
  const y = window.scrollY + 120;
  sections.forEach(sec => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight){
      const id = sec.getAttribute('id');
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }
  });
  if (window.scrollY > 500){ backTop.classList.add('show'); } else { backTop.classList.remove('show'); }
}
document.addEventListener('scroll', onScroll);
onScroll();
