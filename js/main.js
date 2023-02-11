let searchForm = document.querySelector('.search-form');
let cart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

//검색버튼 
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('on');
    cart.classList.remove('on');
    loginForm.classList.remove('on');
    navbar.classList.remove('on');
}
//장바구니버튼
document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('on');
    searchForm.classList.remove('on');
    loginForm.classList.remove('on');
    navbar.classList.remove('on');
}
//로그인버튼
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('on');
    searchForm.classList.remove('on');
    cart.classList.remove('on');
    navbar.classList.remove('on');
}
//메뉴바버튼
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('on');
    searchForm.classList.remove('on');
    cart.classList.remove('on');
    loginForm.classList.remove('on');
}
//스크롤시 자동 리무브
window.onscroll = () => {
    searchForm.classList.remove('on');
    cart.classList.remove('on');
    loginForm.classList.remove('on');
    navbar.classList.remove('on');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('on');
    index = (index + 1) % slides.length;
    /*
    첫 슬라이드는 0인덱스에서 넥스트를 눌렀을때 인덱스는 +1 이므로 1에서 %는 나눠서 나머지이므로 1이되고
    그다음 클릭시 인덱스는 1에서 +1 이되서 2가되는데 %로 나눠서 나머지는 2이므로 2인덱스
    그다음은 +1이되서 3이므로 나누면 나머지는 0이되므로 처음인 0인덱스로 되돌아간다
    */
    console.log(index);
    slides[index].classList.add('on');
}

function prev() {
    slides[index].classList.remove('on');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('on');
}