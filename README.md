# Сайт визитка C-Works

![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

## Описание проекта

Создание информативного и привлекательного одностраничного веб-ресурса, посвященного услугам по ремонту плёночных фотоаппаратов. Проект направлен на привлечение целевой аудитории и предоставление полной и понятной информации о предлагаемых услугах.

## Реализованный функционал

### 1. Адаптивная верстка

Адаптивная верстка обеспечивает корректное отображение веб-страницы на различных устройствах (десктопы, планшеты, смартфоны) и разных разрешениях экранов. Это достигается путем применения медиа-запросов и гибких CSS-стилей, которые позволяют адаптировать контент и структуру страницы под конкретные параметры устройства.

### 2. Валидация формы по отправке почты

Функционал валидации формы гарантирует, что пользователь введет корректный адрес электронной почты перед отправкой уведомления. Это предотвращает отправку пустых или некорректных данных.

```js
// FormValidator.js
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
```

### 3. Использование EJS-шаблонов

EJS (Embedded JavaScript templates) - это механизм шаблонизации, позволяющий встроить JavaScript код в HTML-разметку для динамической генерации контента на сервере. EJS-шаблоны упрощают создание и поддержку динамических веб-страниц.

![EJS-шаблоны](https://github.com/NotACat1/business-card-site-C-Works/assets/113008873/2899fd59-99f7-4b54-9dab-76e317e211fd)


```ejs
// services.ejs
<section class="services">
  <ul class="services__container">
    <% servicesData.forEach(({ name, description, minPrice, warranty }) => { %>
    <li class="services__card">
      <p class="services__card-subtitle"><%= warranty %></p>
      <h2 class="services__card-title"><%= name %>.</h2>
      <p class="services__card-text"><%= description %>.</p>
      <p class="services__card-price">от <%= minPrice %></p>
    </li>
    <% }) %>
  </ul>
</section>
```

### 4. Скрипты

`npm run build`: Этот скрипт используется для сборки проекта в режиме разработки (development). Он запускает Webpack с указанием режима разработки.

`npm run production`: Скрипт `production` используется для сборки проекта в режиме продакшн (production). Он запускает Webpack с указанием режима продакшн.

`npm run serve`: Данный скрипт используется для запуска локального сервера разработки с помощью Webpack. Это удобно для тестирования приложения в реальном времени во время разработки.

`npm run msg-commit`: Скрипт msg-commit используется для проверки сообщения коммита на соответствие заданным правилам с использованием инструмента commitlint.

`npm run pre-commit`: Этот скрипт запускает предварительные проверки перед коммитом с использованием инструмента lint-staged. Обычно включает в себя проверку кода на соответствие стандартам и стиль написания.

`npm run husky-inst`: Скрипт `husky-inst` предназначен для установки и настройки Husky - инструмента для работы с хуками Git. В данном случае, он устанавливает хуки для проверки сообщения коммита и предварительные проверки перед коммитом.

`npm run deploy`: Скрипт `deploy` используется для развертывания проекта на GitHub Pages. Он копирует необходимые файлы из директории сборки в ветку gh-pages репозитория.

## Используемые технологии

### 1. WebPack

[WebPack](https://webpack.js.org/) – мощный инструмент для автоматизации сборки проекта. Он позволяет объединить все компоненты приложения в единое цельное целое, оптимизированное для развертывания и использования в продакшн среде. WebPack поддерживает различные типы файлов (js, jsx, ts, tsx, css, scss, less, изображения и другие), что делает его важным компонентом для организации современных веб-проектов.

### 2. ESLint

[ESLint](https://eslint.org/) – мощный линтер для JavaScript. Он помогает обнаруживать и исправлять ошибки, а также поддерживать соответствие кода установленным стандартам и стилям. Использование ESLint в проекте помогает создать код, который более читаем, консистентен и пригоден для совместной разработки.

```json
// .eslintrc.json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
  "plugins": ["react", "@typescript-eslint"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "indent": ["error", 2],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-console": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

### 3. Prettier

[Prettier](https://prettier.io/) – это инструмент для автоматического форматирования кода. Он обеспечивает единообразие в оформлении, что способствует повышению читаемости и улучшает совместную работу над проектом. Вместе с ESLint, Prettier помогает создавать код, который соответствует высоким стандартам качества.

```json
// .prettierrc.json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2
}
```

### 4. Stylelint

[Stylelint](https://stylelint.io/) – это линтер для CSS. Он помогает выявлять и устранять ошибки в стилях, а также поддерживать соответствие кода установленным стандартам. Использование Stylelint помогает создать стили, которые более читаемы, консистентны и пригодны для совместной разработки.

```json
// .stylelintrc.json
{
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-scss", "stylelint-less"],
  "rules": {
    "indentation": 2,
    "color-no-invalid-hex": true,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["include", "mixin"]
      }
    ]
  }
}
```

### 5. HTMLHint

[HTMLHint](https://htmlhint.com/) – линтер для HTML-кода. Он помогает выявлять и исправлять ошибки в разметке, а также поддерживать соответствие кода установленным стандартам. Использование HTMLHint способствует созданию валидной и качественной разметки, что важно для правильного функционирования веб-приложения.

```json
// htmlhint.json
{
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "doctype-first": false,
  "tag-pair": true,
  "spec-char-escape": true,
  "id-unique": true,
  "src-not-empty": true,
  "attr-no-duplication": true,
  "alt-require": true,
  "doctype-html5": true,
  "id-class-value": "dash",
  "style-disabled": true,
  "space-tab-mixed-disabled": "space",
  "id-class-ad-disabled": true,
  "href-abs-or-rel": false,
  "attr-unsafe-chars": true,
  "head-script-disabled": true,
  "img-alt-require": true,
  "doctype-require": true,
  "id-class-unadorned": true,
  "spec-char-escape": true,
  "tag-self-close": true,
  "style-disabled": true
}
```

### 6. Babel

[Babel](https://babeljs.io/) – это инструмент, который позволяет переводить современный JavaScript код в формат, совместимый со старыми браузерами. Он обеспечивает кросс-браузерность и поддержку новых возможностей языка в старых окружениях.

```json
// .babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

### 7. Commitlint

[Commitlint](https://commitlint.js.org/#/) – инструмент для проверки сообщений коммитов на соответствие установленным правилам и структуре. Это обеспечивает читаемость и информативность истории изменений в репозитории.

```js
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', Infinity],
    'subject-max-length': [2, 'always', Infinity],
  },
};
```

### 8. Husky

[Husky](https://typicode.github.io/husky/getting-started.html) – инструмент для автоматизации запуска сценариев Git (hooks). Это позволяет автоматизировать проверки и действия перед коммитами, что способствует поддержанию единого стиля кодирования и повышает качество кодовой базы.

```bash
# commit-msg
npx --no-install commitlint --edit $1
```

```bash
# pre-commit
npx --no-install lint-staged
```
