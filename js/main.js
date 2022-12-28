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
  $('.menu-btn').click(function (e) {
    $('.menu-modal-wrap').fadeToggle();
    $('.menu-modal-wrap').css({ position: 'fixed' });

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
    $('.search-wrap').css({ position: 'fixed' });
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

  // section3 animation

  let text = document.querySelector('.section3-contain');

  let observer2 = new IntersectionObserver((e) => {
    console.log('E', e);

    e.forEach((박스) => {
      if (박스.isIntersecting) {
        박스.target.style.opacity = 1;
      } else {
        박스.target.style.opacity = 0;
      }
    });
  });

  observer2.observe(text);

  // scrioll 에 따른 헤더 컨트롤
  var scroll_pos = 0;

  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();

    if (scroll_pos > 500) {
      $('header').css({
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(12px)',
        paddingBottom: 0,
      });
      $('.header-wrap').css({
        padding: '0 2% 10px 2%',
      });
      $('header ul').css({
        opacity: 0,
        transition: 'all 1s',
        visibility: 'hidden',
      });
      $('.menu-list').hover(
        function () {
          $('header').css({
            backgroundColor: 'rgba(255, 255, 255, 0)',
            backdropFilter: 'blur(0px)',
          });
        },
        function () {
          $('header').css({
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(12px)',
          });
        }
      );
    } else {
      $('header ul').css({ opacity: 1, visibility: 'visible' });
      $('header').css({
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(0)',
        paddingBottom: '50px',
      });

      $('.menu-list').hover(
        function () {
          $('header ul').css({ opacity: 1, visibility: 'visible' });
          $('header').css({
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(12px)',
          });
        },
        function () {
          $('header ul').css({ opacity: 1, cursor: 'none' });
          $('header').css({
            backgroundColor: 'rgba(255, 255, 255, 0)',
            backdropFilter: 'blur(0px)',
          });
        }
      );
    }
  });
  // section4 상품 hover 시 이미지 변경
  // $('.product-img').hover(
  //   function () {
  //     $('.product-hover').fadeIn();
  //     $('.product-hover img').css({
  //       transition: 'all 1s',
  //       transform: 'scale(1.2, 1.2)',
  //     });
  //   },
  //   function () {
  //     $('.product-hover').fadeOut();
  //     $('.product-hover img').css({
  //       transition: 'all 1s',
  //       transform: 'scale(1, 1)',
  //     });
  //   }
  // );

  // section7 배너 자동 슬라이드
  var $banner = $('.section7-instagram-banner').find('ul');

  var $bannerWidth = $banner.children().outerWidth(); //이미지의 폭
  var $bannerHeight = $banner.children().outerHeight(); // 높이
  var $length = $banner.children().length; //이미지의 갯수
  var rollingId;

  //정해진 초마다 함수 실행
  rollingId = setInterval(function () {
    rollingStart();
  }, 3000); //다음 이미지로 롤링 애니메이션 할 시간차

  function rollingStart() {
    $banner.css('width', $bannerWidth * $length + 'px');
    $banner.css('height', $bannerHeight + 'px');

    //alert(bannerHeight);
    //배너의 좌측 위치를 옮겨 준다.
    $banner.animate({ left: -$bannerWidth + 'px' }, 2500, function () {
      //숫자는 롤링 진행되는 시간이다.
      //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
      $(this).append('<li>' + $(this).find('li:first').html() + '</li>');
      //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
      $(this).find('li:first').remove();
      //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
      $(this).css('left', 0);
      //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
    });
  }
});
