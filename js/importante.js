const sliders = document.querySelectorAll('.slider');
const nextBtns = document.querySelectorAll('.slider #next');
const prevBtns = document.querySelectorAll('.slider #prev');
const dotLists = document.querySelectorAll('.slider .dots');

function setupSlider(slider, nextBtn, prevBtn, dotsList) {
    const list = slider.querySelector('.list');
    const items = slider.querySelectorAll('.list .item');
    const dots = dotsList.querySelectorAll('li');

    let lengthItems = items.length - 1;
    let active = 0;

    function reloadSlider() {
        list.style.left = -items[active].offsetLeft + 'px';
        let lastActiveDot = dotsList.querySelector('li.active');
        if (lastActiveDot) lastActiveDot.classList.remove('active');
        dots[active].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => nextBtn.click(), 3000);
    }

    let refreshInterval = setInterval(() => nextBtn.click(), 3000);

    nextBtn.onclick = () => {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    };

    prevBtn.onclick = () => {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    };

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            active = key;
            reloadSlider();
        });
    });

    window.onresize = () => reloadSlider();
}

sliders.forEach((slider2, index) => {
    setupSlider(slider2, nextBtns[index], prevBtns[index], dotLists[index]);
});

const container = document.querySelector('.container2');
document.querySelector('.slider2').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})



