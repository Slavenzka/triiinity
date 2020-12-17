class BoneController {
  constructor (id) {
    this.el = document.getElementById(id);
    this._handleClickButton = this._handleClickButton.bind(this);
  }

  _createModalLayout () {
    let wrapper = document.createElement('div');
    wrapper.classList.add('bone__wrapper');
    wrapper.dataset.boneWrapper = 'true';
    let button = document.createElement('button');
    button.type = 'button';
    button.classList.add('bone__close');
    button.dataset.boneClose = 'true';
    button.innerHTML = `Close bone exchanger<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496.096 496.096" >
\t\t<path d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686
\t\t\tL13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342
\t\t\tc-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31
\t\t\tl234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"/>
</svg>
`;
    let content = document.createElement('div');
    content.classList.add('bone__content');
    content.innerHTML = `<iframe scrolling="no" src="http://bone.exchange" style="position: absolute; top: 0; left: -5rem; border: none; width: 128rem; height: 100rem;">`
    wrapper.appendChild(button);
    wrapper.appendChild(content);

    document.body.appendChild(wrapper);
  }

  _handleClickClose () {
    const button = document.querySelector('[data-bone-close]');
    console.log(button);
    button.addEventListener('click', () => {
      console.log('Close!');
      const wrapper = document.querySelector('[data-bone-wrapper]');
      console.log(wrapper);
      wrapper.remove();
    })
  }

  _handleClickButton (evt) {
    evt.preventDefault();
    console.log('click');

    this._createModalLayout();
    this._handleClickClose();
  }

  _applyClickHandler () {
    if (this.el) {
      this.el.addEventListener('click', this._handleClickButton)
    }
  }

  init () {
    this._applyClickHandler();
  }
}
