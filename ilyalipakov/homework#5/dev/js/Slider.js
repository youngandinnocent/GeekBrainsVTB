//=include ./popup.js

class Slider {
  constructor({
    root,
    sliderWrapper,
    slider,
    slides,
    slide,
    indicatorsBlock,
    overlay,
  }) {
    this.currentSlide = 1;

    this.root = root;
    this.sliderWrapper = sliderWrapper;
    this.slider = slider;
    this.slides = slides;
    this.slide = slide;

    this.indicatorsBlock = indicatorsBlock;

    this._renderStartIndicators();
    this._resize();
    this._reresize();
    this._indicatorTaped();

    this._showPopup();
    this._closePopup();

    this.popup = new Popup({ slides, overlay });
  }

  next() {
    if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 1;
    } else {
      this.currentSlide += 1;
    }

    this._renderSlide();
    this._rerenderIndicator(this.currentSlide);
  }

  prev() {
    if (this.currentSlide <= 1) {
      this.currentSlide = this.slides.length;
    } else {
      this.currentSlide -= 1;
    }

    this._renderSlide();
    this._rerenderIndicator(this.currentSlide);
  }

  _renderSlide() {
    this.slider.style.left =
      -(this.currentSlide - 1) * this.slide.offsetWidth + 'px';
  }

  _renderStartIndicators() {
    this._clearIndicators();

    for (let i = 0; i < this.slides.length; i++) {
      const indicator = document.createElement('li');
      indicator.classList.add('slider__indicator');

      if (i === 0) {
        indicator.classList.add('slider__indicator_active');
      }

      indicator.setAttribute('data-indicator-id', i + 1);

      this.indicatorsBlock.append(indicator);
    }
  }

  _rerenderIndicator(currentSlider) {
    const indicators = this.indicatorsBlock.children;

    for (let i = 0; i < indicators.length; i++) {
      const indicator = indicators[i];
      const classIndicator = `slider__indicator_active`;

      if (indicator.getAttribute('data-indicator-id') == currentSlider) {
        indicator.classList.add(classIndicator);
      } else {
        indicator.classList.remove(classIndicator);
      }
    }
  }

  _clearIndicators() {
    this.indicatorsBlock.textContent = '';
  }

  _resize() {
    slides.forEach(slide => {
      slide.style.width = this.sliderWrapper.offsetWidth + 'px';
    });
  }

  _reresize() {
    this.root.addEventListener('resize', this._resize.bind(this));
  }

  _indicatorTaped() {
    const indicators = this.indicatorsBlock.children;

    for (let i = 0; i < indicators.length; i++) {
      const indicator = indicators[i];
      const currentIndex = indicator.getAttribute('data-indicator-id');

      indicator.addEventListener('click', () => {
        this.currentSlide = parseInt(currentIndex);

        this._renderSlide();
        this._rerenderIndicator(this.currentSlide);
      });
    }
  }

  _showPopup() {
    slides.forEach(slide => {
      slide.addEventListener('click', () => this.popup.showModal(slide));
    });
  }

  _closePopup() {
    overlay.addEventListener('click', e => {
      this.popup.closeModal(e);
    });
  }
}
