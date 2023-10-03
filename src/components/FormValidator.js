export default class FormValidator {
  constructor({ inputSel, subBtnSel, textBtnSel, iconBtnSel, dataTextSuc }, elemForm) {
    this._elemForm = elemForm;
    this._arrElemsInput = [...this._elemForm.querySelectorAll(inputSel)];
    this._elemSubBtn = this._elemForm.querySelector(subBtnSel);
    this._elemTextBtn = this._elemSubBtn.querySelector(textBtnSel);
    this._elemIconBtn = this._elemSubBtn.querySelector(iconBtnSel);
    this._dataTextSuc = dataTextSuc;
  }

  _hasInvalidInput() {
    return this._arrElemsInput.some((input) => !input.validity.valid);
  }

  _toggleBtnState() {
    if (this._hasInvalidInput()) {
      this._elemSubBtn.disabled = true;
    } else {
      this._elemSubBtn.disabled = false;
    }
  }

  enableValidation() {
    this._toggleBtnState();
    this._arrElemsInput.forEach((input) => {
      input.addEventListener('input', () => {
        this._toggleBtnState();
      });
    });
    this._elemForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const defaultText = this._elemTextBtn.textContent;
      this._elemIconBtn.style.display = 'none';
      this._elemTextBtn.textContent = this._elemTextBtn.dataset[this._dataTextSuc];
      setTimeout(() => {
        this._elemIconBtn.style.display = 'block';
        this._elemTextBtn.textContent = defaultText;
        this._elemForm.reset();
      }, 2 * 1000);
    });
  }
}
