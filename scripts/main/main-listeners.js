var button = document.getElementById('toggle-menu');

button.addEventListener('click', function(event) {
    event.preventDefault();
    var menu = document.getElementById('nav');
    menu.classList.toggle('active');
})