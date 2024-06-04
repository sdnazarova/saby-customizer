// ==UserScript==
// @name         SABY Summer Dragon Carrot
// @namespace     saby-customizer
// @version       1.0.2
// @author        SvetlanaNazarova sd.nazarova@tensor.ru
// @description   Персональная настройка saby приложений для решения повседневных задач, и не только...
// @include       https://*.sbis.ru/*
// @include       https://*.saby.ru/*
// @include       https://new-edu.sbis.ru/*
// @include       https://fix-new-edu.sbis.ru/*
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
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/13.png');
          background-repeat: no-repeat !important;
          background-position-y: calc(100% - -3px) !important;
          background-position-x: calc(100% - 0px) !important;
          background-size: 200px;
        }
        #nav-drawer {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/13.png');
          background-repeat: no-repeat !important;
          background-position-y: calc(100% - -3px) !important;
          background-position-x: calc(100% - 0px) !important;
          background-size: 220px;
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-1 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/1.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-2 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/2.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-3 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/3.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-4 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/4.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-5 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/5.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-6 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/6.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-7 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/7.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-8 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/8.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-9 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/9.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-10 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/10.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-11 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/11.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-12 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/12.png');
        }
        .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-13 {
          background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/13.png');
        }
    `

    document.head.append(style);
        var frames = [
            'picture-changing-1',
            'picture-changing-2',
            'picture-changing-3',
            'picture-changing-4',
            'picture-changing-5',
            'picture-changing-6',
            'picture-changing-7',
            'picture-changing-8',
            'picture-changing-9',
            'picture-changing-10',
            'picture-changing-11',
            'picture-changing-12',
            'picture-changing-13',
            'picture-changing-13',
            'picture-changing-12',
            'picture-changing-11',
            'picture-changing-10',
            'picture-changing-9',
            'picture-changing-8',
            'picture-changing-7',
            'picture-changing-6',
            'picture-changing-5',
            'picture-changing-4',
            'picture-changing-3',
            'picture-changing-2',
            'picture-changing-1'
        ];

      function preloadImages(array) {
          if (!preloadImages.list) {
              preloadImages.list = [];
          }
          var list = preloadImages.list;
          for (var i = 0; i < array.length; i++) {
              var img = new Image();
              img.onload = function() {
                  var index = list.indexOf(this);
                  if (index !== -1) {
                      // remove image from the array once it's loaded
                      // for memory consumption reasons
                      list.splice(index, 1);
                  }
              }
              list.push(img);
              img.src = array[i];
          }
      }

      preloadImages(['https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/1.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/2.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/3.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/4.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/5.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/6.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/7.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/8.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/9.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/10.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/11.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/12.png',
                    'https://new-edu.sbis.ru/tensor/new_year/summer_themes/carrot_grow/13.png'
                    ]);

      function FauxGif(element, frames, speed) {
          this.currentFrame = 0,
          this.domElement   = element,
          this.frames       = frames || null,
          this.speed        = speed  || 200;
          this.interval;
          this.init();
      }

      FauxGif.prototype = {
          init: function() {
              // set the first one to the first image
              this.domElement.classList.add("picture-changing-1");
          },
          pause: function() {
             clearInterval(this.interval);
          },
          resume: function() {
              var that = this;

              that.interval = setInterval(function(){
                  that.currentFrame < that.frames.length - 1 ? that.currentFrame++ : that.currentFrame = 0;
                  that.domElement.classList.remove(that.frames[that.currentFrame - 1]);
                  that.domElement.classList.add(that.frames[that.currentFrame]);
              }, this.speed);
          }
    }
    let usedGif = false;
    let gif;
    let gifStart = false;
    document.addEventListener('mousemove', function(e){
       if (e.target && e.target.className.includes("NavigationPanels")) {
           if (!usedGif) {
               usedGif = true;
               gif = new FauxGif(document.querySelector('.sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar'), frames, 100);
           }
           if (!gifStart) {
               gifStart = true;
               gif.resume();
           }
       } else if (gif) {
           gifStart = false;
           gif.pause();
       }
   })

})(
    // @ts-ignore
    unsafeWindow
)
