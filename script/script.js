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

const mainHeader = document.querySelector('.header')
const mobileBtn = document.querySelector('.phone-btn')
let mobileBtnOpened = document.querySelector('.phone-btn')
const listMenu = document.querySelector('.header-main-menu')
const additionaltMenu = document.querySelector('.header-main-additional')
const headerGrid = document.querySelector('.header-grid')
const headerMain = document.querySelector('.header-main')
mobileBtn.addEventListener('click', openMenuMobile)
function openMenuMobile(){
    if (mainHeader.classList.contains('opened')){
        mainHeader.classList.remove('opened')
        
    } else {
        mainHeader.classList.add('opened')
      
    }
}

//menu open close footer menu

const openCloseBtn = document.querySelectorAll('.footer-mobile-opener')
const subMenu = document.querySelectorAll('.footer-submenu')
const subMenuL = document.querySelector('.submenu')
const subMenuItem = document.querySelector('.active')
const liItem = document.querySelectorAll('.footer-mobile-opener svg')

openCloseBtn.forEach((item, i) =>
    item.addEventListener('click', () => {
        
        if (subMenu[i].classList.contains('active')){
            subMenu[i].classList.remove('active')
            subMenu[i].style.height = 0 + 'px'
            liItem[i].style.transform = 'rotate(0deg)'
        } else {
            subMenu.forEach((it) => {
                it.classList.remove('active')
                it.style.height = 0 +'px'
                liItem[i].style.transform = 'rotate(0deg)'
            })
            subMenu[i].classList.add('active')
            let heightSubmenu =  subMenu[i].querySelectorAll('.submenu')
            subMenu[i].style.height = heightSubmenu.length * subMenuL.offsetHeight + 'px'
            liItem[i].style.transform = 'rotate(183deg)'
        }
       
        
    }
    ))
