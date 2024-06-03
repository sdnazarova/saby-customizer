// ==UserScript==
// @name          SABY Summer Dragon Moovied Waves
// @namespace     saby-customizer
// @version       1.0.2
// @author        SvetlanaNazarova sd.nazarova@tensor.ru
// @description   Персональная настройка saby приложений для решения повседневных задач, и не только...
// @include       https://new-edu.sbis.ru/*
// @include       https://fix-new-edu.sbis.ru/*
// @run-at        document-end
// @grant         unsafeWindow
// @noclassess
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {

    if (location.hostname == "new-edu.sbis.ru") {

        let sleigh = document.createElement('div');
        sleigh.className = 'dragon-and-swim';
        document.querySelector('body').insertAdjacentElement('afterbegin', sleigh);

        const style = document.createElement('style')

        style.type = 'text/css'
        style.innerHTML = `
    .dragon-and-swim {
        position: fixed;
        /*background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/dragon_swims.gif);*/
        width: 355px;
        height: 226px;
        background-repeat: no-repeat !important;
        right: 0px;
        bottom: 0;
        background-size: 355px 226px !important;
        z-index: 1000;
        cursor: pointer;
        transition-duration: 0.5s, 1.5s;
        transition-property: transform, all;
        /*transition-timing-function: linear;*/
        -webkit-transition-duration: 0.5s, 1.5s;
        -webkit-transition-property: transform, all;
        /*-webkit-transition-timing-function: linear;*/
    }
    .dragon-and-swim-1 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/1.png);
    }
    .dragon-and-swim-2 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/2.png);
    }
    .dragon-and-swim-3 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/3.png);
    }
    .dragon-and-swim-4 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/4.png);
    }
    .dragon-and-swim-5 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/5.png);
    }
    .dragon-and-swim-6 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/6.png);
    }
    .dragon-and-swim-7 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/7.png);
    }
    .dragon-and-swim-8 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/8.png);
    }
    .dragon-and-swim-9 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/9.png);
    }
    .dragon-and-swim-10 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/10.png);
    }
    .dragon-and-swim-11 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/11.png);
    }
    .dragon-and-swim-12 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/12.png);
    }
    .dragon-and-swim-13 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/13.png);
    }
    .dragon-and-swim-14 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/14.png);
    }
    .dragon-and-swim-15 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/15.png);
    }
    .dragon-and-swim-16 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/16.png);
    }
    .dragon-and-swim-17 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/17.png);
    }
    .dragon-and-swim-18 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/18.png);
    }
    .dragon-and-swim-19 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/19.png);
    }
    .dragon-and-swim-20 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/20.png);
    }
    .dragon-and-swim-21 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/21.png);
    }
    .dragon-and-swim-22 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/22.png);
    }
    .dragon-and-swim-23 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/23.png);
    }
    .dragon-and-swim-24 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/24.png);
    }
    .dragon-and-swim-25 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/25.png);
    }
    .dragon-and-swim-26 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/26.png);
    }
    .dragon-and-swim-27 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/27.png);
    }
    .dragon-and-swim-28 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/28.png);
    }
    .dragon-and-swim-29 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/29.png);
    }
    .dragon-and-swim-30 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/30.png);
    }
    .dragon-and-swim-31 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/31.png);
    }
    .dragon-and-swim-32 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/32.png);
    }
    .dragon-and-swim-33 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/33.png);
    }
    .dragon-and-swim-34 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/34.png);
    }
    .dragon-and-swim-35 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/35.png);
    }
    .dragon-and-swim-36 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/36.png);
    }
    .dragon-and-swim-37 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/37.png);
    }
    .dragon-and-swim-38 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/38.png);
    }
    .dragon-and-swim-39 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/39.png);
    }
    .dragon-and-swim-40 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/40.png);
    }
    .dragon-and-swim-41 {
        background: url(https://new-edu.sbis.ru/tensor/new_year/summer_themes/dragon_swims/41.png);
    }
    `;

        document.head.append(style);
        var classess = [
            'dragon-and-swim-1',
            'dragon-and-swim-2',
            'dragon-and-swim-3',
            'dragon-and-swim-4',
            'dragon-and-swim-5',
            'dragon-and-swim-6',
            'dragon-and-swim-7',
            'dragon-and-swim-8',
            'dragon-and-swim-9',
            'dragon-and-swim-10',
            'dragon-and-swim-11',
            'dragon-and-swim-12',
            'dragon-and-swim-13',
            'dragon-and-swim-14',
            'dragon-and-swim-15',
            'dragon-and-swim-16',
            'dragon-and-swim-17',
            'dragon-and-swim-18',
            'dragon-and-swim-19',
            'dragon-and-swim-20',
            'dragon-and-swim-21',
            'dragon-and-swim-22',
            'dragon-and-swim-23',
            'dragon-and-swim-24',
            'dragon-and-swim-25',
            'dragon-and-swim-26',
            'dragon-and-swim-27',
            'dragon-and-swim-28',
            'dragon-and-swim-29',
            'dragon-and-swim-30',
            'dragon-and-swim-31',
            'dragon-and-swim-32',
            'dragon-and-swim-33',
            'dragon-and-swim-34',
            'dragon-and-swim-35',
            'dragon-and-swim-36',
            'dragon-and-swim-37',
            'dragon-and-swim-38',
            'dragon-and-swim-39',
            'dragon-and-swim-40',
            'dragon-and-swim-41'
        ];
        async function preloadImages(classes) {
            let elem = document.querySelector('.dragon-and-swim')
            elem.style.display="block";
            elem.style.right="-500px";
            for (let index = 0; index < classes.length; index++) {
                const Class = classes[index];
                elem.classList.add(Class);
		        await sleep(index + 1 * 20);
                elem.classList.remove(Class);
            }
            await sleep(classes.length + 1 * 20);
            elem.style.display = "none";
            elem.style.right="";
        }
        preloadImages(classess);

        setTimeout(() => {
            var elem = document.querySelector('.dragon-and-swim'),
                gif  = new FauxGif(elem, classess, 70);

            if (document.cookie.indexOf('drsl') < 0) {
                document.cookie = 'drsl=' + new Date().getTime() + ';path=/;Domain=' + location.hostname + ";";
                get_dragon_sleigh(gif)
            } else {
                let timeout = (+cookieParser('drsl') + 3600000) - new Date().getTime()
                if (timeout < 0) timeout = 3600000
                setTimeout(() => {
                    document.cookie = 'drsl=' + new Date().getTime() + ';path=/;Domain=' + location.hostname + ";";
                    get_dragon_sleigh(gif)
                }, timeout);
            }
        }, classess.length * 40 + 300);
    }
    function FauxGif(element, classess, speed) {
            this.currentFrame = 0,
                this.domElement   = element,
                this.classess       = classess || null,
                this.speed        = speed  || 200;
            this.interval;
            this.init();
        }

    FauxGif.prototype = {
		init: function() {
			// set the first one to the first image
            this.domElement.classList.add("dragon-and-swim-1");
            this.domElement.style.display = "none";
		},
		pause: function() {
			clearInterval(this.interval);
		},
		resume: function() {
			var that = this;
            that.currentFrame = 0;

			that.interval = setInterval(function(){
				that.currentFrame < that.classess.length - 1 ? that.currentFrame++ : that.currentFrame = 0;
                that.domElement.classList.remove(that.classess[that.currentFrame - 1]);
                that.domElement.classList.remove('dragon-and-swim-41');
                that.domElement.classList.add(that.classess[that.currentFrame]);
                if (that.currentFrame == 0) {
                    clearInterval(that.interval);
                }
			}, this.speed);
		}
	}

    function get_dragon_sleigh(gif) {
        if (document.querySelector('.dragon-and-swim')) {
            if (document.querySelector('.dragon-and-swim').style.display == "none") {
                document.querySelector('.dragon-and-swim').style.display = "block";
                gif.resume();
                document.querySelector('.dragon-and-swim').style.transform = "";

                setTimeout(() => {
                    get_dragon_sleigh(gif);
                }, 5040) // задержка пока его видно
            } else {
                document.querySelector('.dragon-and-swim').style.display = "none";
                gif.pause();

                setTimeout(() => {
                    get_dragon_sleigh(gif);
                }, 3600000) //задержка пока его не видно
            }


        }
    }
    function cookieParser(nameCookie) {
        let c = document.cookie;
        c = c.split(';')
        let result;
        for (let index = 0; index < c.length; index++) {
            const element = c[index];
            if (element.indexOf(nameCookie) >= 0) {
                result = element.split('=')[1]
            }
        }
        return result;
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
})(
    // @ts-ignore
    unsafeWindow
)
