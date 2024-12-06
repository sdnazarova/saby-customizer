// ==UserScript==
// @name          SABY NewYear Snake Tangerines
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

        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar{
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_tangerines/1.png');
          background-repeat: no-repeat !important;
          background-position-y: calc(100% - 5px) !important;
          background-position-x: calc(100% - +15px) !important;
          background-size: 190px;
        }
    `
    document.head.append(style);

    document.addEventListener('mousemove', function(e){
      if (e.target && e.target.classList.contains("NavigationPanels-Accordion__container")) {

        let pict=document.querySelector('.sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar')
            pict.style.backgroundImage="url('https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/tangerines.gif')";
            setTimeout (function(){
                pict.style.backgroundImage="url('https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_tangerines/9.png";
                pict.style.backgroundSize="190px"
            },3000);
      }})
})(
    // @ts-ignore
    unsafeWindow
)