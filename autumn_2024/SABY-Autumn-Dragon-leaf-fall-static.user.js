// ==UserScript==
// @name          SABY Spring Dragon leaf full static
// @namespace     saby-customizer
// @version       1.0.0
// @author        IvanovaArina aa.ivanova3@tensor.ru
// @description   Персональная настройка saby приложений для решения повседневных задач, и не только...
// @include       https://*.sbis.ru/*
// @include       https://*.saby.ru/*
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

      .NavigationPanels-Sidebar {
        background-image: url('https://new-edu.sbis.ru/tensor/new_year/autumn_theme/dragon_leaf_fall/leaf fall static.png') !important;
        background-repeat: no-repeat !important;
        background-position-y: calc(100%) !important;
        background-position-x: calc(100% - 20px) !important;
        background-size: 200px;
      }
    `

    document.head.append(style);
})(
    // @ts-ignore
    unsafeWindow
  )