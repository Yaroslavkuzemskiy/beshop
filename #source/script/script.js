//closed promo header 
const closePromo = document.querySelector('.close-promo')
let promoBlock = document.querySelector('.header-promo')
let button = document.querySelector('.close-promo')
let text = document.querySelector('.header-promo-text')
closePromo.addEventListener('click', closePromoBlock)
function closePromoBlock(){
    promoBlock.style.height = 0
    button.style.display = 'none'
    text.style.display = 'none'
}


// open close mobile menu
const mobileBtn = document.querySelector('.phone-btn')
let mobileBtnOpened = document.querySelector('.phone-btn')
const listMenu = document.querySelector('.header-main-menu')
const additionaltMenu = document.querySelector('.header-main-additional')
const headerGrid = document.querySelector('.header-grid')
const headerMain = document.querySelector('.header-main')
mobileBtn.addEventListener('click', openMenuMobile)
function openMenuMobile(){
    if (mobileBtnOpened.classList.contains('opened')){
        mobileBtnOpened.classList.remove('opened')
        headerGrid.style.left = 110 + '%'
        additionaltMenu.style.right = 106 + '%'
        headerMain.style.boxShadow  =  'none'
        headerMain.style.background  =  'none'
        additionaltMenu.style.transition = 'all .2s ease-in-out';

    } else {
        mobileBtnOpened.classList.add('opened')
        headerGrid.style.left = 0
        additionaltMenu.style.right = 0
        additionaltMenu.style.transition = 'all 1.1s ease-in-out';
        headerMain.style.boxShadow  =  '11px 200px 30px 11px rgb(74 74 76 / 90%)'
        headerMain.style.background  =  '#f5e3e0'
    }
}