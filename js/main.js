new Swiper('.news-slides .swiper', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //슬라이드 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.news-slides .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.news-slides .swiper-prev',
    nextEl: '.news-slides .swiper-next'
  }
})