document.addEventListener('click', function(e) {
    e.target.classList.toggle('active');
    document.querySelector(e.target.dataset.target).classList.toggle('active')
})