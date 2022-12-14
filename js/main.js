$(function () {
  // 비주얼 슬라이드 -------------------------------
  var swiper = new Swiper('.mySwiper', {
    // loop: true,
    autoplay: {
      //자동슬라이드 (false-비활성화)
      delay: 5000, // 시간 설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
  });

  // 비주얼 슬라이드 텍스트 ---------------------

  let text1 = document.querySelector('.swiper-text1');
  let text2 = document.querySelector('.swiper-text2');
  let text3 = document.querySelector('.swiper-text3');
  let text4 = document.querySelector('.swiper-text4');
  let text5 = document.querySelector('.swiper-text5');
  let text6 = document.querySelector('.swiper-text6');
  let observer = new IntersectionObserver((e) => {
    console.log('E', e);

    e.forEach((박스) => {
      if (박스.isIntersecting) {
        박스.target.style.bottom = 220 + 'px';
        박스.target.style.opacity = 1;
      } else {
        박스.target.style.opacity = 0;
        박스.target.style.bottom = 0;
      }
    });
  });

  observer.observe(text1);
  observer.observe(text2);
  observer.observe(text3);
  observer.observe(text4);
  observer.observe(text5);
  observer.observe(text6);
});

// ----------------비주얼 슬라이드 끝
