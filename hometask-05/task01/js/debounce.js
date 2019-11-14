const source = ['0671111111', '0671111112', '0671111113', '0671111114', '0671111115', '0671111116', '0671111117', '0671111118', '0671111119', '0671111110', '0671111121', '0671111122', '0671111133', '0671111144', '0671111155', '0671111166', '0671111177', '0671111188', '0671111199', '0671111100'];

function addSourceData() {
    return document.querySelector('.source_data').textContent = JSON.stringify(source).split(',').join(',\n');
};
document.addEventListener('DOMContentLoaded', addSourceData);

function debounce(fn, wait, immediate) {
    let timeout;
    return function() {
        let later = function() {
            timeout = null;
            if (!immediate) {
                fn.apply(this, arguments);
            }
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            fn.apply(this, arguments);
        }
    };
};

document.addEventListener('input', function (e) {
    let target = e.target.value;
    function seach() {
        console.log(target)
    }

    return debounce(seach(), 5000, 0)
});