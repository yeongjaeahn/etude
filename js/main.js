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
        박스.target.style.bottom = 15 + '%';
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
  // ------------비주얼 슬라이드 텍스트 끝

  // heade 찾기 , 메뉴 아이콘 close 생성,제거 스위치  로직
  $('.menu-btn').click(function () {
    $('.menu-modal-wrap').fadeToggle();
    $('.search-wrap').css({ display: 'none' });
    var src =
      $('.menu-btn a img').attr('src') === 'img/header/menu.png'
        ? 'img/header/close.png'
        : 'img/header/menu.png';
    $('.menu-btn a img').attr('src', src);
    // menu 버튼 누르고 바로 search 버튼 눌렀을 시 menu 이미지 원래대로변경
    if ($('.search-btn a img').attr('src') === 'img/header/close.png') {
      $('.search-btn a img').attr('src', 'img/header/search.png');
    }
  });

  $('.search-btn').click(function () {
    $('.search-wrap').fadeToggle();
    $('.menu-modal-wrap').css({ display: 'none' });
    var src =
      $('.search-btn a img').attr('src') === 'img/header/search.png'
        ? 'img/header/close.png'
        : 'img/header/search.png';
    $('.search-btn a img').attr('src', src);

    // search 버튼 누르고 바로 menu 버튼 눌렀을 시 search 이미지 원래대로변경
    if ($('.menu-btn a img').attr('src') === 'img/header/close.png') {
      $('.menu-btn a img').attr('src', 'img/header/menu.png');
    }
  });

  // heade 찾기 , 메뉴 아이콘 close 생성,제거 스위치  로직 끝 ------------

  // header hover 시 백그라운드 컬러 변경
  $('.menu-list').hover(
    function () {
      $('header').css({
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(12px)',
      });
    },
    function () {
      $('header').css({
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(0px)',
      });
    }
  );
  // $('.menu-list li ul').hover(
  //   function () {
  //     $('header').css({ backgroundColor: 'rgba(255, 255, 255, 0.65)' });
  //   },
  //   function () {
  //     $('header').css({ backgroundColor: 'rgba(255, 255, 255, 0)' });
  //   }
  // );
});
