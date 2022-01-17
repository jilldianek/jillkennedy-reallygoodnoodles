const mobileMenu = document.getElementById('mobileMenu'); 
const navList = document.getElementById('navList');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});