# Шаблон lint-staged

![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Less](https://img.shields.io/badge/less-2B4C80?style=for-the-badge&logo=less&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

## Описание проекта

Проект представляет собой готовый шаблонный репозиторий, созданный с учетом максимальной эффективности и комфорта при старте нового проекта. Он включает в себя набор инструментов, предназначенных для автоматизации разработки и поддержки кодовой базы.

В основе данного проекта лежит совместное использование трех мощных инструментов: Husky, lint-staged и Commitlint, работающих в тесной интеграции. Husky позволяет автоматизировать запуск сценариев Git (hooks), lint-staged обеспечивает применение линтеров и автоматическую правку кода перед каждым коммитом, а Commitlint гарантирует соблюдение структурированности и информативности сообщений коммитов. Это дает возможность поддерживать код в едином стандарте и повышает качество и читаемость кодовой базы.

## Реализованный функционал

### 1. Линтинг и автоматическая правка

В данном проекте установлена и настроена автоматическая система правки кода при каждом коммите, используя инструмент под названием lint-staged. Это означает, что перед фиксацией изменений в репозиторий, все файлы проходят через процесс автоматической коррекции согласно заранее установленным правилам.

lint-staged работает таким образом, что он применяет линтеры (специальные инструменты для анализа и исправления кода) к файлам, которые подлежат коммиту. Это гарантирует, что в репозиторий попадут только файлы, соответствующие установленным стандартам кодирования.

Такой подход позволяет обеспечить высокую читаемость и качество кода в проекте, что существенно улучшает его поддержку и развитие в долгосрочной перспективе.

```json
// package.json
{
 // * * * другие настройки package.json * * *
 "lint-staged": {
    "*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{css,scss,sass,less}": [
      "stylelint --fix",
      "prettier --write"
    ],
    "*.{json,ya?ml,md}": [
      "prettier --write"
    ],
    "*.html": [
      "htmlhint",
      "prettier --write"
    ]
  }
}
```

### 2. Проверка текста коммита

Внедрена автоматизированная система проверки сообщений коммитов с применением Commitlint. Этот мощный инструмент предназначен для обеспечения высокой информативности и структурированности истории изменений в проекте.

Commitlint позволяет определить набор правил, которым должны соответствовать сообщения коммитов. Эти правила могут включать в себя, например, указание типа коммита (фикс, новая функциональность, улучшение, исправление бага и т.д.) и краткое описание изменений.

Такой подход обеспечивает четкость и наглядность в истории изменений проекта, что делает ее более доступной и понятной для всех участников команды. Благодаря Commitlint, мы можем быть уверены, что каждый коммит несет в себе ясную информацию о внесенных изменениях, что важно для эффективной работы и обслуживания проекта.

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

### 3. Сборка многостраничного сайта

В этом проекте предусмотрена четкая структура расположения страниц. Согласно этой структуре, все страницы находятся в особой директории, названной src/pages. Каждая из этих директорий представляет собой отдельную страницу.

Внутри каждой такой директории содержатся три обязательных файла:

1. `index.html`: Этот файл предназначен для разметки страницы. Здесь размещаются все необходимые элементы, начиная от заголовков и текстовых блоков, и заканчивая изображениями и элементами управления.
2. `script.js`: В этом файле размещается JavaScript-код, отвечающий за логику и взаимодействие элементов на странице. Здесь могут быть реализованы различные функции, обработчики событий и многое другое.
3. `style.scss`: Файл предназначен для описания стилей страницы с использованием препроцессора Sass. Здесь определяются все визуальные аспекты страницы, включая цвета, шрифты, расположение элементов и многое другое.

Такая структура обеспечивает четкое и организованное размещение всех компонентов каждой страницы проекта, что значительно облегчает работу с ними и поддержку проекта в целом.

```
src
├── pages
│   ├── page1
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.scss
│   ├── page2
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.scss
│   ├── page3
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.scss
│   └── ...
└── ...
```

### 3. WebPack сборка

В данном проекте в качестве основного инструмента автоматизации сборки применяется WebPack. WebPack предоставляет мощные средства для эффективной организации сборки приложения, обеспечивая оптимальное сочетание всех его компонентов в единое работоспособное целое.

Не ограничиваясь стандартными форматами js и css, WebPack умеет обрабатывать файлы с расширениями js, jsx, ts, tsx, css, scss, less. Он преобразует эти файлы в формат, который может быть легко интерпретирован и исполнен браузером, что обеспечивает плавную и эффективную работу приложения.

Кроме того, WebPack раскрывает свой потенциал и в области работы с мультимедийными ресурсами. Этот инструмент способен не только обрабатывать изображения, шрифты и мультимедийные файлы, но и преобразовывать их в оптимизированные элементы, пригодные для встроенного использования в приложении.

Благодаря WebPack в проекте реализован эффективный механизм сборки, что позволяет существенно повысить производительность и функциональность веб-приложения.

```js
// webpack.config.js
module.exports = {
  // * * * другие настройки webpack.config.js * * *
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(sass|scss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'resolve-url-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'resolve-url-loader', 'postcss-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.(mp4|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              outputPath: 'media/',
            },
          },
        ],
      },
    ],
  }
};
```

### 4. Скрипты WebPack

```bash
npm run build
```

Этот скрипт используется для сборки проекта в режиме разработки. Он запускает Webpack, который занимается сборкой всех необходимых файлов. В результате работы этого скрипта, создается версия проекта, готовая к разработке.

```bash
npm run production
```

Этот скрипт предназначен для создания production-версии проекта. Запуская данный скрипт, Webpack производит сборку, оптимизированную для продакшн среды. Полученные файлы готовы к выкладыванию на сервер для публичного доступа.

```bash
npm run serve
```

Данный скрипт используется для запуска веб-сервера в режиме разработки. Он автоматически обновляет страницу при внесении изменений в исходный код. Это обеспечивает комфортное и быстрое тестирование изменений в режиме реального времени.

```bash
npm run msg-commit
```

Этот скрипт запускает Commitlint для проверки сообщений коммитов на соответствие установленным правилам. Commitlint гарантирует, что сообщения коммитов содержат информацию о внесенных изменениях и имеют четкую структуру.

```bash
npm run pre-commit
```

Данный скрипт запускает lint-staged перед каждым коммитом. Lint-staged применяет линтеры к измененным файлам, что позволяет удостовериться, что код соответствует установленным стандартам перед фиксацией изменений.

```bash
npm run husky-inst
```

Данный скрипт предназначен для установки Husky, который позволяет автоматизировать запуск сценариев Git (hooks). В частности, он настраивает pre-commit и commit-msg хуки для запуска соответствующих проверок перед фиксацией изменений.

```bash
npm run deploy
```

Этот скрипт используется для развертывания проекта с использованием GitHub Pages. Он отправляет содержимое папки dist (которая представляет собой результат сборки) на удаленный репозиторий, что позволяет быстро публиковать проект в интернете.

```json
// package.json
{
  // * * * другие настройки package.json * * *
  "scripts": {
    "build": "webpack --mode development",
    "production": "webpack --mode production",
    "serve": "webpack serve",
    "msg-commit": "commitlint -E HUSKY_GIT_PARAMS",
    "pre-commit": "lint-staged",
    "husky-inst": "npx husky install && chmod +x .husky/pre-commit .husky/commit-msg",
    "deploy": "gh-pages -d dist"
  }
}
```

### 5. Husky, lint-staged и Commitlint

Когда Husky, lint-staged и Commitlint используются вместе, это позволяет создать эффективную систему автоматической предкоммитной проверки и автокоррекции файлов перед фиксацией изменений. Например, при попытке сделать коммит, Husky может запустить lint-staged, который в свою очередь применит линтеры к измененным файлам. Затем Commitlint может проверить сообщение коммита на соответствие заданным стандартам.

Этот подход обеспечивает высокий уровень качества кода и структурированности истории изменений, что значительно улучшает процесс разработки и поддержки проекта.

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
