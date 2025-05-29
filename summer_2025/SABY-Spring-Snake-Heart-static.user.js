// ==UserScript==
// @name          SABY Summer Snake Hearts
// @namespace     saby-customizer
// @version       1.0.1
// @author        Nazarova Svetlana sd.nazarova@tensor.ru
// @description   Персональная настройка saby приложений для решения повседневных задач, и не только...
// @include       https://online.sbis.ru/*
// @include       https://online.saby.ru/*
// @include       https://new-edu.sbis.ru/*
// @include       https://fix-new-edu.sbis.ru/*
// @include       https://dev-new-edu.sbis.ru/*
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {
  const style = document.createElement('style')

  style.type = 'text/css'
  style.innerHTML = `
    .NavigationPanels-Accordion__title_level-1::after, .NavigationPanels-Accordion__title_level-2_active::after {
      background: none !important;
    }
    .cloud-holiday_new-year .NavigationPanels-Accordion__container::before {
      background: none !important;
    }
    .NavigationPanels-Accordion__tree {
      background: none !important;
    }

    .NavigationPanels-Sidebar {
      background-image: url(https://new-edu.sbis.ru/tensor/new_year/2025/summer_theme/heart_snake.png) !important;
      background-repeat: no-repeat !important;
      background-position-y: calc(100% + -5px) !important;
      background-position-x: calc(100% - 3px) !important;
      background-size: 190px;
    }
    #nav-drawer {
       background-image: url(https://new-edu.sbis.ru/tensor/new_year/2025/summer_theme/heart_snake.png) !important;
       background-repeat: no-repeat !important;
       background-position-y: calc(100% + -5px) !important;
       background-position-x: calc(100% - 15px) !important;
       background-size: 190px;
      }
  `

  document.head.append(style);
})(
  // @ts-ignore
  unsafeWindow
)