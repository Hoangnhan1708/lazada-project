const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var isShowHeaderDownload = false;
var isShowCustomerCare = false;
var isShowCheckOrder = false;
var isShowChangeLanguage = false;
var isShowHistorySearch = false;

// Handle show/hide header download
$(".js-header__download-btn").onclick = function() {
    if(!isShowHeaderDownload){
        $('.js-header__download').classList.add('open');
        isShowHeaderDownload = true
    }
    else{
        $('.js-header__download').classList.remove('open');
        isShowHeaderDownload = false
    }
    
};

//Handle show/hide header customer care
$(".js-header__customerCare-btn").onclick = function() {
    if(!isShowCustomerCare){
        $('.js-header__customerCare').classList.add('open');
        isShowCustomerCare = true
    }
    else{
        $('.js-header__customerCare').classList.remove('open');
        isShowCustomerCare = false
    }
};

//Handle show/hide header check order
$(".js-header__checkOrder-btn").onclick = function() {
    if(!isShowCheckOrder){
        $('.js-header__checkOrder').classList.add('open');
        isShowCheckOrder = true
    }
    else{
        $('.js-header__checkOrder').classList.remove('open');
        isShowCheckOrder = false
    }
};

//Handle show/hide header change language
$(".js-header__changeLanguage-btn").onclick = function() {
    if(!isShowChangeLanguage){
        $('.js-header__changeLanguage').classList.add('open');
        isShowChangeLanguage = true
    }
    else{
        $('.js-header__changeLanguage').classList.remove('open');
        isShowChangeLanguage = false
    }
};

$(".header__search-input").onfocus = function(){
    if(!isShowHistorySearch){
        $('.header__search-history').classList.add('open');
        isShowHistorySearch = true
    }
    else{
        $('.header__search-history').classList.remove('open');
        isShowHistorySearch = false
    }
}


window.onclick = function(event) {
    if(isShowHeaderDownload && event.target !== $('.js-header__download-btn') && event.target !== $('.js-header__download')){
        $('.js-header__download').classList.remove('open');
        isShowHeaderDownload = false
    }

    if(isShowCustomerCare && event.target !== $('.js-header__customerCare-btn') && event.target !== $('.js-header__customerCare')){
        $('.js-header__customerCare').classList.remove('open');
        isShowCustomerCare = false
    }

    if(isShowCheckOrder && event.target !== $('.js-header__checkOrder-btn') && event.target !== $('.js-header__checkOrder')){
        $('.js-header__checkOrder').classList.remove('open');
        isShowCheckOrder = false
    }

    if(isShowChangeLanguage && event.target !== $('.js-header__changeLanguage-btn') && event.target !== $('.js-header__changeLanguage')){
        $('.js-header__changeLanguage').classList.remove('open');
        isShowChangeLanguage = false
    }

    if(isShowHistorySearch && event.target !== $(".header__search-input") && event.target !== $('.header__search-history')){
        $('.header__search-history').classList.remove('open');
        isShowHistorySearch = false
    }
};

// Stop pagination
$('.js-header__download').addEventListener('click',function(event){
    event.stopPropagation()
})

$('.js-header__customerCare').addEventListener('click',function(event){
    event.stopPropagation()
})

$('.js-header__checkOrder').addEventListener('click',function(event){
    event.stopPropagation()
})

$('.js-header__changeLanguage').addEventListener('click',function(event){
    event.stopPropagation()
})

$('.header__search-history').addEventListener('click',function(event){
    event.stopPropagation()
})


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = $(".header-content");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}