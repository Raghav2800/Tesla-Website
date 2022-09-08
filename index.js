const sidemenu = document.getElementById('sidemenu')
const close = document.getElementById('close');
const menu = document.getElementById('menu')

menu.addEventListener('click', () => {
    sidemenu.classList.toggle('show');
})

close.addEventListener('click', () => {
    sidemenu.classList.toggle('show');
})