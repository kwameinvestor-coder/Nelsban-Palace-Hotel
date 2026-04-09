
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}


if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const scrollHeader = () =>{
   const header = document.getElementById('header')

   window.scrollY >= 50 ? header.classList.add('scroll-header') 
                        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


const swiperWork = new Swiper('.work__swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 24,
  grabCursor: true,

  pagination: {
    el: '.work__data .swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.work__data .swiper-button-next',
    prevEl: '.work__data .swiper-button-prev',
  },
})

const swiperVid = new Swiper('.vid__swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 24,
  grabCursor: true,

  pagination: {
    el: '.vid__data .swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.vid__data .swiper-button-next',
    prevEl: '.vid__data .swiper-button-prev',
  },
  on: {
    init: function () {
      const assets = this.el.querySelectorAll('video');
      const activeSlide = this.slides[this.activeIndex];
      const activeVideo = activeSlide ? activeSlide.querySelector('video') : null;
      if (!activeVideo) return;

      activeVideo.muted = true;
      assets.forEach(video => {
        video.pause();
        video.currentTime = 0;
      });
      activeVideo.play();
    },
    slideChange: function () {
      const assets = this.el.querySelectorAll('video');
      const activeSlide = this.slides[this.activeIndex];
      const activeVideo = activeSlide ? activeSlide.querySelector('video') : null;
      if (!activeVideo) return;

      activeVideo.muted = true;
      assets.forEach(video => {
        video.pause();
        video.currentTime = 0;
      });
      activeVideo.play();
    },
  },
})


const swiperTestimonial = new Swiper('.service__swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 56,
  grabCursor: true,

  pagination: {
    el: '.service__swiper .swiper-pagination',  
  },

  navigation: {
    nextEl: '.service__swiper .swiper-button-next',
    prevEl: '.service__swiper .swiper-button-prev',
  },
})


const scrollUp = () =>{
   const scrollUp = document.getElementById('scroll-up')

   window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')


const scrollActive = () => {

   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id, 
            top = section.offsetTop - 50, 
            height = section.offsetHeight, 
            link = document.querySelector('.nav__menu a[href*=' + id + ']') 

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)


const reveal = (selector, options = {}) => {
   gsap.from(selector,{
      trigger: selector,
      opacity:0,
      duration: 1,
      y: 100,
      delay: .3,
      ease: 'power2.out',
      ...options
   })
}


const tl = gsap.timeline({})
tl.fromTo(
'.home__bg, .home__shadow',
{
   y: -800,
   scale: .3,
   opacity: 0
}, 
{
   y: 0,
   scale: .3,
   opacity: 1,
   duration: 1,
   ease: 'power3.out'
} 
)
tl.to(
   '.home__bg, .home__shadow',
   {
      scale: 1,
      duration:1,
      ease: 'back.out(0.5)'
   }
)


tl.to(
   '.home__bg',
   {
     scale: 1.08,
     duration: 8,
     ease: 'power1.inOut',
     repeat: -1,
     yoyo: true,
     transformOrigin: 'center center'
      }
)
reveal('.home__logo', {y: 0, scale: .3, delay: 1.9, ease: 'elastic.out(0.8,0.5)'})
reveal('.home__title', {delay: 2.2})
reveal('.home__description', {delay: 2.5})
reveal('.home__data .button', {delay: 2.8})


if(window.scrollY < 100){
reveal('.nav > *', {delay: 1.6, y: -30})
} else{
gsap.set('.nav > *', {opacity: 1, y: 0})
}

reveal('.about__data > *', {stagger: .3, scrollTrigger: {trigger: '.about__data'}})
reveal('.about__img', {delay: .9, scrollTrigger: {trigger: '.about__img'}})

const aboutCounter = document.querySelectorAll('.about__counter')
aboutCounter.forEach(el =>{
   gsap.from(el, {
      textContent: 0,
      duration: 3,
      ease: 'power1.out',
      snap:{textContent: 1},
      scrollTrigger: {trigger: el, once: true}
   })
})

reveal('.work__data .section__title', {scrollTrigger: {trigger: '.work__data .section__title'}})
reveal('.work__description', {delay: .6, scrollTrigger: {trigger: '.work__description'}})
reveal('.work__swiper', {delay: .9, scrollTrigger: {trigger: '.work__swiper'}})
reveal('.work__data .swiper-pagination', {delay: .9, scrollTrigger: {trigger: '.work__data .swiper-pagination'}})
reveal('.work__data :is(.swiper-button-prev, .swiper-button-next)', {delay: 1.2, scrollTrigger: {trigger: '.work__data'}})

reveal('.vid__data .section__title', {scrollTrigger: {trigger: '.vid__data .section__title'}})
reveal('.vid__description', {delay: .6, scrollTrigger: {trigger: '.vid__description'}})
reveal('.vid__swiper', {delay: .9, scrollTrigger: {trigger: '.vid__swiper'}})
reveal('.vid__data .swiper-pagination', {delay: .9, scrollTrigger: {trigger: '.vid__data .swiper-pagination'}})
reveal('.vid__data :is(.swiper-button-prev, .swiper-button-next)', {delay: 1.2, scrollTrigger: {trigger: '.vid__data'}})

reveal('.service__data .section__title', {scrollTrigger: {trigger: '.service__data .section__title'}})
reveal('.service__plan', {delay: .6, stagger: .2, scrollTrigger: {trigger: '.service__plan'}})
reveal('.service__swiper', {delay: .9, stagger: .2, scrollTrigger: {trigger: '.service__swiper'}})

reveal('.expert .section__title', {scrollTrigger: {trigger: '.expert .section__title'}})
reveal('.expert__description', {delay: .6, scrollTrigger: {trigger: '.expert__description'}})
reveal('.expert__card', {delay: .9, stagger: .2, scrollTrigger: {trigger: '.expert__card'}})

reveal('.contact__data .section__title', {scrollTrigger: {trigger: '.contact__data .section__title'}})
reveal('.contact__description', {delay: .6, scrollTrigger: {trigger: '.contact__description'}})
reveal('.contact__data .button', {delay: .9, y: 0, scale: 0, scrollTrigger: {trigger: '.contact__data .button'}})
reveal('.contact__map', {delay: .9, scrollTrigger: {trigger: '.contact__map'}})
reveal('.contact__card', {delay: 1.2, stagger: .2, scrollTrigger: {trigger: '.contact__card'}})

reveal('.footer__container', {scrollTrigger: {trigger: '.footer__container'}})
