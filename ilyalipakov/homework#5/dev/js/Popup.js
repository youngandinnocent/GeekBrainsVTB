class Popup {
  constructor({ slide, overlay }) {
    this.slide = slide;
    this.overlay = overlay;
  }

  showModal(slide) {
    this.overlay.append(slide.cloneNode(true));
    this.overlay.classList.remove('overlay_hidden');
  }

  closeModal(e) {
    e.stopPropagation();
    if (e.target.classList.contains('overlay')) {
      this.overlay.innerHTML = '';
      this.overlay.classList.add('overlay_hidden');
    }
  }
}
