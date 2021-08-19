window.onload = function(){
 
  $('#onload').fadeOut();
  $('body').addClass('hidden');
}


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

//display mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');


};
menu.addEventListener('click', mobileMenu);

console.log("work");


var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop,
  isVisible = true;

function show(){
  if(!isVisible){
    TweenLite.to(".navbar", 1, { y: "0%" }, 0);
    isVisible = true;
  }
}

function hide(){
  if(isVisible){
    TweenLite.to(".navbar", 1, { y: "-100%" }, 0);
    isVisible = false;
  }
}

function refresh() {
  var newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (newScrollTop > currentScrollTop) {
    hide();
  } else if (newScrollTop < currentScrollTop) {
    show();
  }
  currentScrollTop = newScrollTop;
}

window.addEventListener("scroll", refresh, {
  passive: true
});
refresh();




window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const pageContainer = document.querySelector(".container");
  pageContainer.setAttribute("data-scroll-container", "");

  const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    getDirection: true });


  scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });

  scroller.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length ?
      scroller.scrollTo(value, 0, 0) :
      scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight };

    },
    pinType: pageContainer.style.transform ? "transform" : "fixed" });


  /* COLOR CHANGER */

  // Pinning and horizontal scrolling

  let horizontalSections = document.querySelectorAll(".horizontal-scroll");

  horizontalSections.forEach(horizontalSection => {
    let pinWrap = horizontalSection.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    gsap.to(pinWrap, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        scrub: true,
        trigger: horizontalSection,
        pin: true,
        start: "top top",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true },

      x: -horizontalScrollLength,
      ease: "none" });

  });

  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");

  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

    ScrollTrigger.create({
      trigger: colorSection,
      scroller: "[data-scroll-container]",
      start: "top 50%",
      onEnter: () =>
      gsap.to("body", {
        backgroundColor: colorSection.dataset.bgcolor,
        color: colorSection.dataset.textcolor,
        overwrite: "auto" }),

      onLeaveBack: () =>
      gsap.to("body", {
        backgroundColor: prevBg,
        color: prevText,
        overwrite: "auto" }) });


  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());

  ScrollTrigger.refresh();
});

const button = document.querySelector("button");

/** 
Customize the options to change the content of modal or get exact code from github repositary
**/

button.addEventListener("click", () => {
  const options = {
    title: "Modal",
    icon: "info",
    text: " Lorem Ipsum is simply dummy text of the printing  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing ind ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum ustry. Lorem Ipsum typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing ind ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum ustry. Lorem Ipsum typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L  of the printing and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. L and  ing industry.  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing ind ing industry. Lorem Ipsum  ing industry. Lorem Ipsum  ing industry. Lorem Ipsum ustry. Lorem Ipsum typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    confirmButtonText: "Ver menos",
    width:"90%",
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  };
  Swal.fire(options);
});


/*const pinturaH = document.querySelector('.pinturaH');
pinturaH.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/2-LazaroGalicia/Pintura 2-min-vista.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMH">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>El inicio. Expresa la pobreza de los primeros habitantes de los años 60´s, mostrando a un niño montado en los hombros y su padre.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});

const pinturaHF = document.querySelector('.pinturaHF');
pinturaHF.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/2-LazaroGalicia/1 fragmentacion de pintura2-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoH">'+
          '   <div class="textoMH">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>El inicio. Expresa la pobreza de los primeros habitantes de los años 60´s, mostrando a un niño montado en los hombros y su padre.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/2-LazaroGalicia/Pintura 2-min-vista.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});

const pinturaV = document.querySelector('.pinturaV');
pinturaV.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/Pintura1-min-vista.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>El inicio. Expresa la pobreza de los primeros habitantes de los años 60´s, mostrando a un niño montado en los hombros y su padre.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});

const pinturaVF = document.querySelector('.pinturaVF');
pinturaVF.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/Pintura1-min-vista.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>El inicio. Expresa la pobreza de los primeros habitantes de los años 60´s, mostrando a un niño montado en los hombros y su padre.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/2-LazaroGalicia/Pintura 2-min-vista.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});*/

//______MODALES CAROUSEL PASADO-ORIGEN_____________

const pintura1 = document.querySelector('.pintura1');
pintura1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/Pintura1-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>El inicio. Expresa la pobreza de los primeros habitantes de los años 60´s, mostrando a un niño montado en los hombros y su padre.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura2 = document.querySelector('.pintura2');
pintura2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/2-LazaroGalicia/Pintura 2-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="textoMH">'+
    '     <TABLE class="DES">'+
    '       <TR>'+
    '         <TH>Descripción:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Proyecto de mural en Ciudad Neza</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Lázaro Galicia</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  3</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  90x120cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura2F1 = document.querySelector('.pintura2F1');
pintura2F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/2-LazaroGalicia/1 fragmentacion de pintura2-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="DES">'+
    '       <TR>'+
    '         <TH>Descripción:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Representa los primeros habitantes que llegaron a Ciudad Nezahualcóyotl, provenientes de diferentes estados de la República Mexicana.</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Lázaro Galicia</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/3</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura2-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura2F2 = document.querySelector('.pintura2F2');
pintura2F2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/2-LazaroGalicia/2 fragmentación de pintura2-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer: ' <div class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="DES">'+
    '       <TR>'+
    '         <TH>Descripción:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Representa las avenidas Texcoco, Pantitlán, Chimalhuacán, Cuarta Avenida, y Bordo de Xochiaca que cruzan con la Av. López Mateos, Nezahualcóyotl, Riva palacio, Cuauhtémoc, y la Avenida 7.</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Lázaro Galicia</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  2/3</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura2-2.jpg" alt=""></img>'+  
    '   </div>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura2F3 = document.querySelector('.pintura2F3');
pintura2F3.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/2-LazaroGalicia/3 fragmentación de pintura3-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="DES">'+
    '       <TR>'+
    '         <TH>Descripción:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Muestra la identidad que se generó en los primeros habitantes de la Ciudad ya consolidada.</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Lázaro Galicia</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  3/3</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos//Pintura2-3.jpg" alt=""></img>'+  
    '   </div>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura3 = document.querySelector('.pintura3');
pintura3.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/2-LazaroGalicia/Pintura 3-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Expresa el triunfo de las personas donde no había nada, y se acompaña con los insectos representativos de esa ciudad naciente, los “caballitos del diablo”</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Lázaro Galicia</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  120x120cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura4 = document.querySelector('.pintura4');
pintura4.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/2-LazaroGalicia/Pintura 4-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>La ventana del querer aprender todo.<br>Se muestra la primera exposición de pintura que se hizo en Ciudad Neza en los escalones del Palacio Municipal</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Lázaro Galicia</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  120x120cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura5 = document.querySelector('.pintura5');
pintura5.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/2-LazaroGalicia/Pintura 5-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="DES">'+
    '       <TR>'+
    '         <TH>Descripción:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>La mujer dando un nuevo aliento a la ciudad frente al coyote de Sebastián, lo que representa en nuevo milenio que contrasta con los problemas sociales, se puede observar en el recolector de basura así como las aguas residuales.</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Lázaro Galicia</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  120x120cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura6 = document.querySelector('.pintura6');
pintura6.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/2-LazaroGalicia/Pintura 6-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Es el presente que marca Lázaro Galicia a finales de la década pasada y a inicios de esta década, donde, expresa que los jóvenes tienen una venda en los ojos que no les permite ver a las personas que interactúan con ellos.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Lázaro Galicia</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  120x120cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura7 = document.querySelector('.pintura7');
pintura7.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/3-mauricio-vega/Pintura 7-min.JPG" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>La creación del fuego</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Mauricio Vega</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Acrílico sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  100x160cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura8 = document.querySelector('.pintura8');
pintura8.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/3-mauricio-vega/Pintura 8-min.JPG" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Arcano</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Mauricio Vega</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Acrílico sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  100x160cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura9 = document.querySelector('.pintura9');
pintura9.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/3-mauricio-vega/Tríptico completo-min.png" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="DES">'+
    '       <TR>'+
    '         <TH>Descripción:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Es una referencia a Ciudad Nezahualcóyotl, agua arriba y agua abajo, el cuerpo en movimiento y de dónde venimos.</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Tríptico</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Mauricio Vega</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Acrílico sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  180x360cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura10 = document.querySelector('.pintura10');
pintura10.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/4-ismael-ponce/Pintura 10-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Él artista plasma en una serie de 3 cuadros, imágenes del fotógrafo Héctor García que se colocan sobre una madera con lienzos quemados, con el fin de representar que para hacer algo nuevo, otra cosa tiene que ser destruida.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Serie de 3</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Ismael Ponce</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela y madera</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  60x90cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura11 = document.querySelector('.pintura11');
pintura11.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/4-ismael-ponce/Pintura 11-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="DES">'+
    '       <TR>'+
    '         <TH>Descripción:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Continuando con la misma técnica, en este cuadro se aprecian 3 mujeres lavando ropa en la parte central, acompañado en su extremo izquierdo por postes de luz y torres de alta tensión, en su lado derecho, lo que significa, un progreso, donde las cosas van a cambiar.</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Serie de 3</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Ismael Ponce</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela y madera</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura12 = document.querySelector('.pintura12');
pintura12.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/4-ismael-ponce/Pintura 12-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>*La ciudad se quedó sumida en el miedo debido al llamado “ahí vienen…ahí vienen”</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Serie de 3</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Ismael Ponce</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela y madera</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  60x90cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura13 = document.querySelector('.pintura13');
pintura13.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 13-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
//___________Carousel PRESENTE-DESARROLLLO____________
const pintura14 = document.querySelector('.pintura14');
pintura14.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/Pintura 46-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Representación del nacimiento de un niño (Francisco Javier) en situación de pobreza, que muestra la precariedad de los habitantes que vivián en casas de cartón, cuyo ingreso económico partía de la venta y crianza de cerdos.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  2</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura14F1 = document.querySelector('.pintura14F1');
pintura14F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/2 fragmentación de pintura 46-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  1/2</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 46-2.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura14F2 = document.querySelector('.pintura14F2');
pintura14F2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/1 fragmentación de pintura 46-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Alfredo Arcos</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  2/2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 46-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura15 = document.querySelector('.pintura15');
pintura15.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/Pintura 47-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Francisco Javier, el niño que nació sumergido en la pobreza y desigualdad sobre los techos de cartón, inmerso en su situación se convirtió en un drogadicto.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  3</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura15F1 = document.querySelector('.pintura15F1');
pintura15F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/1 fragmentación de pintura 47-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Alfredo Arcos</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/3</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 47-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura15F2 = document.querySelector('.pintura15F2');
pintura15F2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/2 fragmentacion pintura 47-min.JPG" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  2/3</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 47-2.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura15F3 = document.querySelector('.pintura15F3');
pintura15F3.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/3 fragmentacion pintura 47-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  3/3</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 47-3.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura16 = document.querySelector('.pintura16');
pintura16.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/Pintura 48-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Discusión por parte de los padres que corren a Francisco Javier de su casa.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura16F1 = document.querySelector('.pintura17F1');
pintura16F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/1 fragmentación de pintura 49-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Alfredo Arcos</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 49-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura16F2 = document.querySelector('.pintura17F2');
pintura16F2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/2 fragmentación de pintura 49-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Alfredo Arcos</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 49-2.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura17 = document.querySelector('.pintura17');
pintura17.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/13-alfredo-arcos/Pintura 49-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Francisco Javier es encontrado en un mercado, semi devorado por ratas.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Alfredo Arcos</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  2</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Medidas:  65x100cm</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura18F1 = document.querySelector('.pintura18F1');
pintura18F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/1 fragmentación de pintura 14-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  1/1</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 14-1.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura18 = document.querySelector('.pintura18');
pintura18.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 14-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura19F1 = document.querySelector('.pintura19F1');
pintura19F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/1 fragmentación de la pintura 15-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 15-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura19 = document.querySelector('.pintura19');
pintura19.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 15-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura20F1 = document.querySelector('.pintura20F1');
pintura20F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/1 fragmentación de la pintura 16-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 16-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura20 = document.querySelector('.pintura20');
pintura20.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 16-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura21F1 = document.querySelector('.pintura21F1');
pintura21F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/2 fragmentacion de la pintura 17-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  1/2</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 17-2.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura21F2 = document.querySelector('.pintura21F2');
pintura21F2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/1 fragmentacion de la pintura 17-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  2/2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 17-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura21 = document.querySelector('.pintura21');
pintura21.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 17-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura22F1 = document.querySelector('.pintura22F1');
pintura22F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/1 fragmentación de pintura 18-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="fragmentoV">'+
          '   <div class="textoFMV">'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmento:  1/2</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Óleo sobre tela</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '   </div>'+
          '   <div class="fragPintura">'+
          '     <img src="../images/fragmentos/Pintura 18-1.jpg" alt=""></img>'+  
          '   </div>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura22F2 = document.querySelector('.pintura22F2');
pintura22F2.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/2 fragmentación de pintura 18-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  2/2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 18-2.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura22 = document.querySelector('.pintura22');
pintura22.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 18-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  2</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura23 = document.querySelector('.pintura23');
pintura23.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/5-juan-orozco-palmerin/Pintura 19-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Juan Orozco Palmerín</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura24 = document.querySelector('.pintura24');
pintura24.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/Pintura 20-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Martín Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura24F1 = document.querySelector('.pintura24F1');
pintura24F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/1 fragmentacion de pintura 20-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Martín Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 20-1.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura25F1 = document.querySelector('.pintura25F1');
pintura25F1.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/1 fragmentación de pintura 21-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <a class="fragmentoH">'+
    '   <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Martín Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmento:  1/1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    '   </div>'+
    '   <div class="fragPintura">'+
    '     <img src="../images/fragmentos/Pintura 21-2.jpg" alt=""></img>'+  
    '   </div>'+
    ' </a>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura25 = document.querySelector('.pintura25');
pintura25.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/Pintura 21-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Martín Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  1</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura26 = document.querySelector('.pintura26');
pintura26.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/Pintura 22-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Martín Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura27 = document.querySelector('.pintura27');
pintura27.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/Pintura 23-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Martín Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura28 = document.querySelector('.pintura28');
pintura28.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/6-martin-cuaya/Pintura 24-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Martín Cuaya</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  60x90cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura29 = document.querySelector('.pintura29');
pintura29.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalH">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/7-pablo-moran/Pintura 25-min.jpg" alt=""></img>'+  
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    footer:' <div class="textoMH">'+
    '     <TABLE class="FT">'+
    '       <TR>'+
    '         <TH>Ficha Técnica:</TH>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Sin Título</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Artista:  Pablo Morán</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Fragmentaciones:  Ninguna</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Técnica:  Óleo sobre tela</TD>'+
    '       </TR>'+
    '       <TR>'+
    '         <TD>Medidas:  50x60cm</TD>'+
    '       </TR>'+
    '     </TABLE>'+
    ' </div>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura30 = document.querySelector('.pintura30');
pintura30.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/10-epitafio-tacho/Pintura 35-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Autorretrato de Epitafio Álvarez de León “Tacho” y conocido como el pintor del pueblo.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Epitafio Álvarez de León</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Pluma sobre papel</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});
const pintura31 = document.querySelector('.pintura31');
pintura31.addEventListener("click", () => {
  const options = {
    html: 
          '<div class="modalV">'+
          ' <div class="pinturaM">'+
          '   <img src="../images/10-epitafio-tacho/Pintura 36-min.jpg" alt=""></img>'+  
          ' </div>'+
          ' <div class="textoMV">'+
          '     <TABLE class="DES">'+
          '       <TR>'+
          '         <TH>Descripción:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Autorretrato de Epitafio Álvarez de León “Tacho” y conocido como el pintor del pueblo.</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          '     <TABLE class="FT">'+
          '       <TR>'+
          '         <TH>Ficha Técnica:</TH>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Sin Título</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Artista:  Epitafio Álvarez de León</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Fragmentaciones:  Ninguna</TD>'+
          '       </TR>'+
          '       <TR>'+
          '         <TD>Técnica:  Pluma sobre papel</TD>'+
          '       </TR>'+
          '     </TABLE>'+
          ' </div>'+
          '</div>',
    showCloseButton: true,
    showConfirmButton: false,
    width:"95%",
    background: "#fff8",
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  };
  Swal.fire(options);
});