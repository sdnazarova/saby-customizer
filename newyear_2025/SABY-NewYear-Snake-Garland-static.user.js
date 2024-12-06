// ==UserScript==
// @name          SABY NewYear Snake Garland static
// @namespace     saby-customizer
// @version       1.0.2
// @author        ArinaIvanova aa.ivanova3@tensor.ru
// @description   Персональная настройка saby приложений для решения повседневных задач, и не только...
// @include       https://online.sbis.ru/*
// @include       https://online.saby.ru/*
// @include       https://new-edu.sbis.ru/
// @include       https://fix-new-edu.sbis.ru/
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
    #nav-drawer {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/garland.png')!important;
      background-repeat: no-repeat !important;
      background-position-y: calc(100% - 8px) !important;
      background-position-x: calc(100% - 2px) !important;
      background-size: 206px;
    }

    .NavigationPanels-Sidebar {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/garland.png')!important;
      background-repeat: no-repeat !important;
      background-position-y: calc(100% - 8px) !important;
      background-position-x: calc(100% - 2px) !important;
      background-size: 206px;
    }
  `

  document.head.append(style);
})(
  // @ts-ignore
  unsafeWindow
)