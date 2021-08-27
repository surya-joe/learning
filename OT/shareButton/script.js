const btn = document.getElementById('btn');
const container = document.querySelector('.container');

btn.addEventListener('click', (e) => {
    if(e.target.checked) {
        container.style.clipPath = 'polygon( 0 0, 100% 0, 100% 100%, 0% 100%)';
    } else {
        container.style.clipPath = 'polygon(0 81%, 100% 81%, 100% 100%, 0% 100%)';
    }
});