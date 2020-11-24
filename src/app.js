import { Swiper, Autoplay, EffectFade } from 'swiper'
import {
  BUTTON_VISIBLE_CLASS,
  CONTENT_VISIBLE_CLASS,
  SLIDER_VISIBLE_CLASS
} from './js/const'

class PageController {
  constructor () {
    this.targetObject = window || document.documentElement || document.body;
    this.button = document.querySelector('[data-button-scroll]');

    this._setDefaultScrollPosition = this._setDefaultScrollPosition.bind(this);
    this._toggleClasses = this._toggleClasses.bind(this);
    this._handleClickButton = this._handleClickButton.bind(this);
  }

  _renderSlider () {
    Swiper.use([Autoplay, EffectFade]);

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

    this.button && this.button.classList.add(BUTTON_VISIBLE_CLASS);
    content.classList.add(CONTENT_VISIBLE_CLASS);
    slider.classList.add(SLIDER_VISIBLE_CLASS);
    slider.style.height = `${window.innerHeight}px`

    this._setDefaultScrollPosition();
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

  init () {
    this._renderSlider();
    this._setButtonClickHandler();
    this._applyInitialTransitions()
  }
}

const page = new PageController();
page.init();
