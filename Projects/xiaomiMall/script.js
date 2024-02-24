var mySwiper = new Swiper('.swiper', {
    loop: true, // 循环模式选项
    autoplay: {
        disableOnInteraction:false,
        stopOnLastSlide: false,
    },
    
    effect: 'fade',
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})        