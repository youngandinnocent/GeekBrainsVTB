class Popup {
  constructor({ popup, overlay }) {
    this.popup = popup;
    this.overlay = overlay;
  }

  show() {
    this._togglePopup(true);
  }

  hide() {
    this._togglePopup(false);
  }

  _togglePopup(isShow) {
    if (isShow) {
      this.popup.classList.add('show');
      this.overlay.classList.add('show');
      this.popup.classList.remove('hide');
      this.overlay.classList.remove('hide');
    } else {
      this.popup.classList.add('hide');
      this.overlay.classList.add('hide');
      this.popup.classList.remove('show');
      this.overlay.classList.remove('show');
    }
  }
}
