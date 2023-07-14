//webp
export function isWebp(){
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        
        testWebP(function (support) {
        
            if (support == true) {
            document.querySelector('body').classList.add('webp');
            }else{
            document.querySelector('body').classList.add('no-webp');
            }
        });

}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
  },
    breakpoints: { // условия для разных размеров окна браузера
      0: { // при 0px и выше
        slidesPerView: 1, // горизонтальная прокрутка
        pagination: true
      },
      768: { // при 768px и выше
        slidesPerView: 3,
        pagination: false // вертикальная прокрутка
      }
    }
  });