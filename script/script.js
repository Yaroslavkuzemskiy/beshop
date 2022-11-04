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

 //tabs for product section
// const tabs = document.querySelectorAll(".tabs-header-item")
const tabs = document.querySelectorAll(".tabs-header")


tabs.forEach((tab, index) => {
    const buttons = tab.querySelectorAll('.tabs-header-item')
    const content = tab.nextElementSibling.querySelectorAll('.tabs-content-main')
    
    const firstPageSlider = content[0].querySelector('.products-slider')

    initSlider(firstPageSlider)

    buttons.forEach((btn, i)=> {
        btn.addEventListener("click", () => {
            const targetTab = content[i]

            if(!btn.classList.contains('tabs-active')){
                const targetSlaider = targetTab.querySelector('.products-slider')
                initSlider(targetSlaider)
                buttons.forEach(b => b.classList.remove('tabs-active'))
                content.forEach(c => c.classList.remove('content-active'))
                btn.classList.add('tabs-active')
                targetTab.classList.add('content-active')
            }
            // tabs.forEach((item, i) => {
                
                
            //     if (item.classList.contains('tabs-active')) {
            //         item.classList.remove('tabs-active')
            //         content[i].classList.remove('content-active', 'swiper-wrapper')
            //     }
    
            // })
            // tab.classList.add('tabs-active');
            // content[index].classList.add('content-active')
            // content[index].classList.add('swiper-wrapper')
            // initSlider(contentParts[index]);
        })
    })
   
})


//slider product

function initSlider(element) {
    if (element && !element.classList.contains('swiper-initialized')) {
        const swiper = new Swiper(element, {
            // Optional parameters
            
            loop: true,
            // autoplay: {
            //   delay: 5000,
            // },
            slidesPerView: 4,
            spaceBetween: 30,
        
            breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              // when window width is >= 480px
              1200: {
                slidesPerView: 4,
                spaceBetween: 30
              },
            
             },
            // If we need pagination
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        
        
            
          });
    }
}
