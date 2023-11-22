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


//INICIO CARROSSEL
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("main__carrossel__conteudo");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}
//FINAL CARROSSEL



//INICIO FORMULARIO
function enviarFormulario() {

  if (document.getElementById("nome").value === "" || document.getElementById("email").value === "" || document.getElementById("telefone").value === "" || document.getElementById("mensagem").value === "") {
  
  alert("Por favor, preencha todos os campos obrigatórios.");
  
  } else{
  
  alert("Formulário Enviado com Sucesso!");
  }
  
}
//FINAL FORMULARIO



//INICIO MENU
function toggleMenu() {
  var navList = document.getElementById("menu");
  navList.classList.toggle('show__menu');
}
//FINAL MENU