// ==UserScript==
// @name          SABY Autumn The best day is today
// @namespace     saby-customizer
// @version       1.0.1
// @author        Michurina Aliona am.michurina@tensor.ru
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

    .lotus-button-link {
      background-image: url(https://new-edu.saby.ru/tensor/new_year/2026/autumn_theme/lotus_button.svg) !important;
      background-repeat: no-repeat !important;
      background-position-y: calc(100% + -5px) !important;
      background-position-x: calc(100%) !important;
      background-size: contain;
      width: 150px;
      height: 105px;
      z-index: 999999;
      cursor: pointer;
    }
    .lotus-button-form {
      display: flex;
      position: fixed;
      left: 0;
      bottom: 0px;
      width: 200px;
      height: 150px;
      z-index: 999999;
      cursor: pointer;
      align-items: center;
      justify-content: center;
    }
  `

  document.head.append(style);
  const element = document.querySelector('.NavigationPanels-Accordion__container');
  if (element) {
    let div = document.createElement('div');
    const link = document.createElement('a');

    div.className = 'lotus-button-form';
    link.className = 'lotus-button-link';
    link.href = 'https://new-edu.saby.ru/calendar_2026/';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const width = element.getBoundingClientRect().width;

    div.style.width = `${width}px`;
    div.append(link);

    document.body.append(div);
  }
})(
  // @ts-ignore
  unsafeWindow
)