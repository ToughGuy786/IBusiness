const slider = tns({
    container: '.carousel__inner',
    items: 3,
    slideBy: 'page',
    autoplay: true
});

document.querySelector('.prev').addEventListener('click', function ()  {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function ()  {
    slider.goTo('next');
});




