//header nav menu toggler button
const navToggler = document.querySelector('.nav-toggler');
navToggler.onclick = function() {
    this.classList.toggle('active');
    document.querySelector(this.dataset.target).classList.toggle('active');
};

//remove after
const percentFrom = (part, full) => ((part / full) * 100).toFixed(2);

