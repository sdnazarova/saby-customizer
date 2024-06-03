// ==UserScript==
// @name          SABY Summer Dragon Alcoholic
// @namespace     saby-customizer
// @version       1.0.2
// @author        SvetlanaNazarova sd.nazarova@tensor.ru
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

    .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/alcoholic/alcoholic.png') !important;
      background-repeat: no-repeat !important;
      background-position-y: calc(100% - -3px) !important;
      background-position-x: calc(100% - -14px) !important;
      background-size: 220px;
    }
    #nav-drawer {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/alcoholic/alcoholic.png') !important;
      background-repeat: no-repeat !important;
      background-position-y: calc(100% - -1px) !important;
      background-position-x: calc(100% - -14px) !important;
      background-size: 237px;
    }
  `

  document.head.append(style);
})(
  // @ts-ignore
  unsafeWindow
)
