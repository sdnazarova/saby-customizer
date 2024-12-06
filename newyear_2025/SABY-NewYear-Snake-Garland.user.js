// ==UserScript==
// @name         SABY NewYear Snake Garland
// @namespace     saby-customizer
// @version       1.0.1
// @author        ArinaIvanova aa.ivanova3@tensor.ru
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
        background-image: url('https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_garland/4.png');
        background-repeat: no-repeat !important;
        background-position-y: calc(100% - 4px) !important;
        background-position-x: calc(100% - 2px) !important;
        background-size: 206px;
      }
      #nav-drawer {
        background-image: url('https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_garland/4.png');
        background-repeat: no-repeat !important;
        background-position-y: calc(100% - 4px) !important;
        background-position-x: calc(100% - 2px) !important;
        background-size: 206px;
      }
      .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-1 {
        background-image: url('https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_garland/2.png');
      }
      .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-2 {
        background-image: url('https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_garland/3.png');
      }
      .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-3 {
        background-image: url('https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_garland/1.png');
      }
      .sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar.picture-changing-4 {
        background-image: url('https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_garland/4.png');
      }
  `

    document.head.append(style);
      var frames = [
          'picture-changing-1',
          'picture-changing-2',
          'picture-changing-3',
          'picture-changing-4'
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
    preloadImages(['https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_garland/1.png',
                  'https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_garland/2.png',
                  'https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_garland/3.png',
                  'https://new-edu.sbis.ru/tensor/new_year/newyear2025_themes/snake_garland/4.png'
                  ]);
    function FauxGif(element, frames, speed) {
        this.currentFrame = 0,
        this.removeFrame = 0,
        this.domElement   = element,
        this.frames       = frames || null,
        this.speed        = speed  || 100;
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
            that.interval = setInterval(function(){;
                if (that.currentFrame < that.frames.length - 1) {
                    that.currentFrame++;
                    that.removeFrame = that.currentFrame - 1;
                } else {
                    that.currentFrame = 0;
                    that.removeFrame = that.frames.length - 1;
                }
                that.domElement.classList.remove(that.frames[that.removeFrame]);
                that.domElement.classList.add(that.frames[that.currentFrame]);
            }, this.speed);
        }
  }
  let usedGif = false;
  let gif;
  let gifStart = false;
  document.addEventListener('mousemove', function(e){
    if (e.target && e.target.classList.contains("NavigationPanels-Accordion__container")) {
         if (!usedGif) {
             usedGif = true;
             gif = new FauxGif(document.querySelector('.sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar'), frames, 400);
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