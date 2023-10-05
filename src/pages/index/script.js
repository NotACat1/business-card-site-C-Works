import './style.scss';

import { configForm } from '@utills/constants.js';
import FormValidator from '@components/FormValidator.js';

[...document.querySelectorAll('.form__element')].forEach((form) => {
  const formValidator = new FormValidator(configForm, form);
  formValidator.enableValidation();
});
