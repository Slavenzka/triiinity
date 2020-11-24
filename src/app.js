import { Swiper, Autoplay, EffectFade } from 'swiper'
import {
  BUTTON_VISIBLE_CLASS,
  CONTENT_VISIBLE_CLASS, LIST_VISIBLE_CLASS,
  SLIDER_VISIBLE_CLASS
} from './js/const'

class PageController {
  constructor () {
    this.targetObject = window || document.documentElement || document.body;
    this.button = document.querySelector('[data-button-scroll]');

    this._setDefaultScrollPosition = this._setDefaultScrollPosition.bind(this);
    this._toggleClasses = this._toggleClasses.bind(this);
    this._handleClickButton = this._handleClickButton.bind(this);
    this._setViewportHeight = this._setViewportHeight.bind(this);
    this._updateSwiperSize = null;
  }

  _renderSlider () {
    Swiper.use([Autoplay, EffectFade]);

    const swiper = new Swiper('.swiper-container', {
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

    this._updateSwiperSize = swiper.updateSize();
  }

  _handleClickButton () {
    this.targetObject.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  _setDefaultScrollPosition () {
    this.targetObject.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  _toggleClasses () {
    const wrapper = document.querySelector('[data-wrapper]');
    const content = wrapper.querySelector('[data-content]');
    const slider = wrapper.querySelector('[data-slider]');
    const list = wrapper.querySelector('[data-list-logos]');

    this.button && this.button.classList.add(BUTTON_VISIBLE_CLASS);
    content.classList.add(CONTENT_VISIBLE_CLASS);
    slider.classList.add(SLIDER_VISIBLE_CLASS);
    list.classList.add(LIST_VISIBLE_CLASS);

    this.targetObject.removeEventListener('load', this._toggleClasses);
  }

  _setButtonClickHandler () {
    if (this.button) {
      this.button.addEventListener('click', this._handleClickButton);
    }
  }

  _applyInitialTransitions () {
    this.targetObject.addEventListener('load', this._toggleClasses);
  }

  _setViewportHeight () {
    const updateViewportHeight = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
    }

    updateViewportHeight();
    this.targetObject.addEventListener('resize', updateViewportHeight);
  }

  init () {
    this._setDefaultScrollPosition();
    this._renderSlider();
    this._setButtonClickHandler();
    this._applyInitialTransitions()
  }
}

const page = new PageController();
page.init();
