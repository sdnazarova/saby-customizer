// ==UserScript==
// @name          SABY Spring Dragon
// @namespace     saby-customizer
// @version       2.0.8
// @author        SvetlanaNazarova sd.nazarova@tensor.ru
// @description   Персональная настройка saby приложений для решения повседневных задач, и не только...
// @homepage      https://saby-customizer.github.io
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR42s3TOQvCQBAF4HjggWcnaCF4K1YiaQTvwhiiphBBsBAsLcT/X/gW3sIoum6ZgQ8yJDM77G4cJ2qxgrTIO6QjB3NTgw1kRN4jHXlYmxqcoS7yEelowfZXsRptCguofpmgCQGEnCIli2uwFPkN4qJBEk7i/QEasoH64AJZTqDHVE3HfPZZNIAra95CbdAdhpBgscvVJhADD3amTfQ4RYWFOh5Q5iK+7TEG3PWQ5291jHtOoOMIXZEX/k3whOLHReqLvMRFrK9ym+RVnkXr73sBExASEE+L5FQAAAAASUVORK5CYII=
// @icon64        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAolBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgESU6AAAANXRSTlMAoCAkHAUCCTzsD26NC/v4262dhXESvZN7GMp4UCHnxbekWFNLNSnx1pdjXkY5LuDOQdF/aPChBGIAAAICSURBVFjD7ZbZjqMwEEWLpMEsYQskBBKy71unl/v/vzajxoMhJkhkNK1pifNkm9Kh7ALb1NIiYw7N8kAYlvuDoV0r6KBTHlCUcr+Ll1bw8wS+/5eC/b6ZQB2p5YHFotxnPKCaOLTIsuLHaxBbJwqtwaO3By7m5MMN1GoB6znwaf47gFEFbIhDl4i2CoasSmAmiNIsYFYlWLhn3po4SpVg7qx5a6WQzBuOeduCLgsmsArTlZfS9zTx+HUhC4aFAJovJMGuR4LIkASqG5Cgb0hbEUIShDDvBS84kmAMdl9DjOoFMT5rBfSqSBmWBNouIoEypXsOhnDaRj9X5S3fsEXA7iAJrhCL1HO2fGKbOL7yil0gUoicLkkEGGlZsh98PezAwGoJ44Nl2jwgwJhktAi3JSO2TJBVNPXgr1R14mOffgX0MVvZZJ5uPEBivcc7jeFN+EQMnX+khpcVZekhIY8HVKKfyd5ovMMGxLk4B56lvqG3i0aPGUwrf/ae+2c4LgTUb2nrRC1uZKvGe2LPLWZqjBsLol3pOx01FoxhimHVPTUWbLAsFBidxgK6vat5Asmcmgt0p6/x6ved6xMC+sRs82Wa4fTc0TaZYkaUYLp+9my0j9b5HB7Zdx7vW3TrBVektQIder3ggm1DgTyFfytIkf5vl6zvFsjXfcuSr/stLRK/AOfYMYlvYTomAAAAAElFTkSuQmCC
// @supportURL    https://github.com/saby-customizer/saby-customizer.github.io/issues
// @include       https://sbis.ru/*
// @include       https://*.sbis.ru/*
// @include       https://saby.ru/*
// @include       https://*.saby.ru/*
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
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/spring_themes/DragonFlowers.png') !important;
      background-repeat: no-repeat !important;
      background-position-y: calc(100% - -30px) !important;
      background-position-x: calc(100% - 6px) !important;
      background-size: 250px;
    }
    #nav-drawer {
      background-image: url('https://new-edu.sbis.ru/tensor/new_year/spring_themes/DragonFlowers.png') !important;
      background-repeat: no-repeat !important;
      background-position-y: calc(100% - -40px) !important;
      background-position-x: calc(100% - 6px) !important;
      background-size: 250px;
    }
    .dragon-and-sleigh{
      position: fixed;
      background: url(/tensor/new_year/spring_themes/transpontDragon.png);
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
  `

  document.head.append(style);

  function cookieParser(nameCookie){
    let c = document.cookie;
    c = c.split(';')
    let result;
    for (let index = 0; index < c.length; index++) {
        const element = c[index];
        // console.log(element);
        if (element.indexOf(nameCookie)>=0){
            console.log(element);
            result = element.split('=')[1]
        }
    }
    return result;
}
function get_dragon_sleigh(){
    if (document.querySelector('#page')) {
        if (document.querySelector('.dragon-and-sleigh')) {
			if (document.querySelector('.dragon-and-sleigh').style.right==""){
				setTimeout(() => {
             		document.querySelector('.dragon-and-sleigh').style.right="50px"
            	}, 700)


				document.querySelector('.dragon-and-sleigh').style.transform=""
				setTimeout(() => {
             		get_dragon_sleigh();
            	}, 5000) // задержка пока его видно
			} else {
				setTimeout(() => {
					document.querySelector('.dragon-and-sleigh').style.right=""

				}, 700)
				document.querySelector('.dragon-and-sleigh').style.transform="scale(1, 1)"
				setTimeout(() => {
              		get_dragon_sleigh();
            	}, 1800000) //задержка пока его не видно
			}


        }
    }
}
  if (location.host=="new-edu.sbis.ru" && document.querySelector('div#page-wrapper')) {
     let sleigh = document.createElement('div');
     sleigh.className = 'dragon-and-sleigh';
     document.querySelector('div#page-wrapper').insertAdjacentElement('afterbegin', sleigh);

     if (document.cookie.indexOf('drsl')<0) {
        document.cookie = 'drsl='+new Date().getTime()+';path=/;Domain=new-edu.sbis.ru;';
        get_dragon_sleigh()
    } else {
        let timeout = (+cookieParser('drsl') + 1800000) - new Date().getTime()
        if (timeout<0) timeout = 1800000
        setTimeout(() => {
			document.cookie = 'drsl='+new Date().getTime()+';path=/;Domain=new-edu.sbis.ru;';
        }, timeout);

    }
     /*if (document.querySelector('#page')) {
        if (document.querySelector('.dragon-and-sleigh')) {
			if (document.querySelector('.dragon-and-sleigh').style.right==""){

            }
        }
     }*/
  }
      //document.querySelector('div#page-wrapper').insertAdjacentElement('afterbegin', sleigh) dragon_sleigh();

})(
  // @ts-ignore
  unsafeWindow
)
