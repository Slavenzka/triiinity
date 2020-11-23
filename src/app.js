import { Swiper, Autoplay, EffectFade } from 'swiper'

Swiper.use([Autoplay, EffectFade])

new Swiper('.swiper-container', {
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  simulateTouch: false,
  allowTouchMove: false,
})

console.log('Hello webpack');
