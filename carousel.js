document.querySelectorAll('.carousel').forEach(carousel => {
    let items = carousel.querySelectorAll('.carousel-item');
    let currentItem = 0;
    let slideInterval;

    function showCurrentItem() {
        items.forEach((item, idx) => {
            item.style.display = idx === currentItem ? 'block' : 'none';
        });
    }
    carousel.querySelector('.prevButton').addEventListener('click', prevItem);
    carousel.querySelector('.nextButton').addEventListener('click', nextItem);
    function nextItem() {
        currentItem = (currentItem + 1) % items.length;
        showCurrentItem();
    }

    function start_slideshow(){
        slideInterval = setInterval(nextItem, 5000);
    }

    function stop_slideshow(){
    clearInterval(slideInterval);}

    carousel.addEventListener('mouseenter', start_slideshow);
    carousel.addEventListener('mouseleave', stop_slideshow);


    function prevItem() {
        currentItem = (currentItem - 1 + items.length) % items.length;
        showCurrentItem();
    }

    showCurrentItem()
});

