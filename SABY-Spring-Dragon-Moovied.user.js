// ==UserScript==
// @name          SABY Spring Dragon Moovied
// @namespace     saby-customizer
// @version       1.0.0
// @author        SvetlanaNazarova sd.nazarova@tensor.ru
// @description   Персональная настройка saby приложений для решения повседневных задач, и не только...
// @include       https://online.sbis.ru/*
// @include       https://online.saby.ru/*
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {

    if (location.hostname == "online.sbis.ru" || location.hostname == "online.saby.ru") {
        const style = document.createElement('style')

        style.type = 'text/css'
        style.innerHTML = `
    .dragon-and-sleigh {
        position: fixed;
        background: url(https://new-edu.sbis.ru/tensor/new_year/spring_themes/transpontDragon.png);
        width: 300px;
        height: 211px;
        background-repeat: no-repeat;
        right: -300px;
        bottom: 0;
        background-size: 100%;
        z-index: 10;
        cursor: pointer;
        transform: scale(-1, 1);

        transition-duration: 0.5s, 1.5s;
        transition-property: transform, right;
        transition-timing-function: linear;
        -webkit-transition-duration: 0.5s, 1.5s;
        -webkit-transition-property: transform, right;
        -webkit-transition-timing-function: linear;
    }
    `;

        document.head.append(style);
        let sleigh = document.createElement('div');
        sleigh.className = 'dragon-and-sleigh';
        document.querySelector('body').insertAdjacentElement('afterbegin', sleigh);

        if (document.cookie.indexOf('drsl') < 0) {
            document.cookie = 'drsl=' + new Date().getTime() + ';path=/;Domain=' + location.hostname + ";";
            get_dragon_sleigh()
        } else {
            let timeout = (+cookieParser('drsl') + 1800000) - new Date().getTime()
            console.log(timeout)
            if (timeout < 0) timeout = 1800000
            setTimeout(() => {
                document.cookie = 'drsl=' + new Date().getTime() + ';path=/;Domain=' + location.hostname + ";";
                get_dragon_sleigh()
            }, timeout);
        }
    }
    function get_dragon_sleigh() {
        if (document.querySelector('.dragon-and-sleigh')) {
            if (document.querySelector('.dragon-and-sleigh').style.right == "") {
                setTimeout(() => {
                    document.querySelector('.dragon-and-sleigh').style.right = "50px"
                }, 700)

                document.querySelector('.dragon-and-sleigh').style.transform = ""
                setTimeout(() => {
                    get_dragon_sleigh();
                }, 5000) // задержка пока его видно
            } else {
                setTimeout(() => {
                    document.querySelector('.dragon-and-sleigh').style.right = ""

                }, 700)
                document.querySelector('.dragon-and-sleigh').style.transform = "scale(1, 1)"
                setTimeout(() => {
                    get_dragon_sleigh();
                }, 1800000) //задержка пока его не видно
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
                console.log(result)
            }
        }
        return result;
    }
})(
    // @ts-ignore
    unsafeWindow
)
