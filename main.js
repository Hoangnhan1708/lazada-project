const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var isShowHeaderDownload = false;
var isShowCustomerCare = false;
var isShowCheckOrder = false;
var isShowChangeLanguage = false;

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
};
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
