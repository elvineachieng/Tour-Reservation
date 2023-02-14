const acountIcon = document.querySelector('div.accounts > i');
const sidebar = document.querySelector('aside.hide-sidebar');
acountIcon.addEventListener('click', () =>{
    sidebar.classList.remove('hide-sidebar');
    sidebar.classList.add('sidebar');
})