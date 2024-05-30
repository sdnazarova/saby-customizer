// ==UserScript==
// @name          SABY Summer Dragon Swimming
// @namespace     saby-customizer
// @version       1.0.0
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
      /*background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/1.png');*/
      background-repeat: no-repeat !important;
      background-position-y: calc(100% - -3px) !important;
      background-position-x: calc(100% - 0px) !important;
      background-size: 200px;
    }
    #nav-drawer {
      /*background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/1.png');*/
      background-repeat: no-repeat !important;
      background-position-y: calc(100% - -3px) !important;
      background-position-x: calc(100% - 0px) !important;
      background-size: 220px;
    }
    .dragon_waves-1 {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/1.png') !important;
    }
    .dragon_waves-2 {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/2.png') !important;
    }
    .dragon_waves-3 {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/3.png') !important;
    }
    .dragon_waves-4 {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/4.png') !important;
    }
    .dragon_waves-5 {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/5.png') !important;
    }
    .dragon_waves-6 {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/6.png') !important;
    }
    .dragon_waves-7 {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/7.png') !important;
    }
    .dragon_waves-8 {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/8.png') !important;
    }
    
  `

  document.head.append(style);
    var frames = [
        'dragon_waves-1',
        'dragon_waves-2',
        'dragon_waves-3',
        'dragon_waves-4',
        'dragon_waves-5',
        'dragon_waves-6',
        'dragon_waves-7',
        'dragon_waves-8',
        'dragon_waves-8',
        'dragon_waves-7',
        'dragon_waves-6',
        'dragon_waves-5',
        'dragon_waves-4',
        'dragon_waves-3',
        'dragon_waves-2',
        'dragon_waves-1'
    ];

    function FauxGif(element, frames, speed) {
		this.currentFrame = 0,
		this.domElement   = element,
		this.frames       = frames || null,
		this.speed        = speed  || 200;
		this.interval;
		this.init();
	}
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

    preloadImages(['https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/1.png',
                   'https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/2.png',
                   'https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/3.png',
                   'https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/4.png',
                   'https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/5.png',
                   'https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/6.png',
                   'https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/7.png',
                   'https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_waves/8.png']);

    FauxGif.prototype = {
		init: function() {
			// set the first one to the first image
			//this.domElement.style.backgroundImage = "url(" + this.frames[0] + ")";
             this.domElement.classList.add("dragon_waves-1");
		},
		pause: function() {
			clearInterval(this.interval);
		},
		resume: function() {
			var that = this;

			that.interval = setInterval(function(){
				that.currentFrame < that.frames.length - 1 ? that.currentFrame++ : that.currentFrame = 0;
				//that.domElement.style.backgroundImage = "url(" + that.frames[that.currentFrame] + ")";
                that.domElement.classList.remove(that.frames[that.currentFrame - 1]);
                that.domElement.classList.add(that.frames[that.currentFrame]);
			}, this.speed);
		}
	}

    setTimeout(() => {
        var elem = document.querySelector('.sabyPage-MainLayout__sidebar .NavigationPanels-Sidebar')
        if (!elem) {
            elem = document.querySelector('#nav-drawer');
        }
        let gif  = new FauxGif(elem, frames, 100);

        elem.addEventListener('mouseenter', function(){
            gif.resume();
        });

        elem.addEventListener('mouseleave', function() {
            gif.pause();
        });
    }, 1000);

})(
  // @ts-ignore
  unsafeWindow
)