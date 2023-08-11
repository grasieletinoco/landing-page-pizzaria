//INICIO BUTTON BACK TO TOP
var btnTop = document.querySelector('#button_top');

  var btnReveal = function () { 
    if (window.scrollY > 300) {
      btnTop.classList.add('visible-button');
    } else {
      btnTop.classList.remove('visible-button');
    }    
  }  

  var TopscrollTo = function () {
    if(window.scrollY!=0) {
      setTimeout(function() {
        window.scrollTo(0,window.scrollY-30);
        TopscrollTo();
      }, 5);
    }
  }
  window.addEventListener('scroll', btnReveal);
  btnTop.addEventListener('click', TopscrollTo);

  //FINAL BUTTON BACK TO TOP