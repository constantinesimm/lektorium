const navToggler = document.querySelector('.nav-toggler');
navToggler.onclick = function() {
    this.classList.toggle('active');
    document.querySelector(this.dataset.target).classList.toggle('active');
}