// ==UserScript==
// @name          SABY Summer Horse Tent
// @namespace     saby-customizer
// @version       1.0.1
// @author        Nazarova Svetlana sd.nazarova@tensor.ru
// @description   Персональная настройка saby приложений для решения повседневных задач, и не только...
// @include       https://online.sbis.ru/*
// @include       https://online.saby.ru/*
// @include       https://hrm.sbis.ru/*
// @include       https://hrm.saby.ru/*
// @include       https://crm.sbis.ru/*
// @include       https://crm.saby.ru/*
// @include       https://new-edu.saby.ru/*
// @include       https://fix-new-edu.saby.ru/*
// @include       https://dev-new-edu.saby.ru/*
// @run-at        document-end
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
      background-image: url(https://new-edu.saby.ru/tensor/new_year/2026/summer_theme/tent_horse.png) !important;
      background-repeat: no-repeat !important;
      background-position-y: calc(100% + -5px) !important;
      background-position-x: calc(100%) !important;
      background-size: contain;
    }
    #nav-drawer {
      background-image: url(https://new-edu.saby.ru/tensor/new_year/2026/summer_theme/tent_horse.png) !important;
      background-repeat: no-repeat !important;
      background-position-y: calc(100% + -5px) !important;
      background-position-x: calc(100%) !important;
      background-size: contain;
    }
  `

  document.head.append(style);
})(
  // @ts-ignore
  unsafeWindow
)