/* SCRIPT - obras.html*/ 
/* CARGA DE PAGINA */
window.onload = function(){
    $('#onload').fadeOut();
    $('body').addClass('hidden');
}  
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');
//display 
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);
/* CARGA DEL CONTENIDO - DESPLAZAMINETO HORIZONTAL CON LOCOMOTIVESCROLL Y GSAP */
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
  /* DIV HORIZONTALES - CAMBIOS DE COLOR */
  // DIV DE REFERENCIA (WRAP)
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
/*EVITAR CLIC DERECHO*/
  document.oncontextmenu = function(){return false}
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>El inicio.<br>La pobreza de los primeros habitantes de los a??os sesenta, se muestra a un ni??o montado en los hombros de su padre.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alfredo Arcos</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Proyecto de mural en Ciudad Neza</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  L??zaro Galicia</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  3</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Los primeros habitantes que llegaron a Ciudad Nezahualc??yotl, provenientes de diferentes estados de la Rep??blica Mexicana.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  L??zaro Galicia</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  1/3</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/2-LazaroGalicia/2 fragmentaci??n de pintura2-min.jpg" alt=""></img>'+  
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
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Las primeras avenidas: Texcoco, Pantitl??n, Chimalhuac??n, Cuarta Avenida, y Bordo de Xochiaca que cruzan con la Av. L??pez Mateos, Nezahualc??yotl, Riva palacio, Cuauht??moc, y la Avenida 7.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  L??zaro Galicia</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  2/3</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/2-LazaroGalicia/3 fragmentaci??n de pintura3-min.jpg" alt=""></img>'+  
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
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>La creaci??n de la identidad en los primeros habitantes de la Ciudad ya consolidada.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  L??zaro Galicia</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  3/3</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>El triunfo de las personas donde no hab??a nada, que es acompa??ada por los insectos representativos de esa ciudad naciente, los ???caballitos del diablo???.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  L??zaro Galicia</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>???La ventana del querer aprender todo???<br>Se muestra la primera exposici??n de pintura que se hizo en Ciudad Neza en los escalones del Palacio Municipal.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  L??zaro Galicia</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>La mujer dando un nuevo aliento a la ciudad frente al coyote de Sebasti??n. Un nuevo milenio que contrasta con los problemas sociales.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  L??zaro Galicia</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Es el presente enmarcado por L??zaro Galicia a finales de la d??cada pasada y a inicios de esta d??cada. Expresa que los j??venes tienen una venda en los ojos que no les permite ver a las personas que interact??an con ellos.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  L??zaro Galicia</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>La creaci??n del fuego</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Mauricio Vega</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre tela</TD>'+
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
            '         <TH>Ficha T??cnica:</TH>'+
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
            '         <TD>T??cnica:  Acr??lico sobre tela</TD>'+
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
            '   <img src="../images/3-mauricio-vega/Tr??ptico completo-min.png" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
      '     <TABLE class="DES">'+
      '       <TR>'+
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Es una referencia a Ciudad Nezahualc??yotl, agua arriba y agua abajo, el cuerpo en movimiento y de d??nde venimos.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Tr??ptico</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Mauricio Vega</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  Acr??lico sobre tela</TD>'+
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Ismael Ponce plasma en una serie de 3 cuadros, im??genes del fot??grafo H??ctor Garc??a.<br>Las im??genes se colocaron sobre una madera con lienzos quemados, con el fin de representar que para hacer algo nuevo, otra cosa tiene que ser destruida.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
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
            '         <TD>T??cnica:  ??leo sobre tela y madera</TD>'+
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
      '         <TH>Descripci??n:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Serie 2.<br>3 mujeres lavando ropa en la parte central, en complemento con su extremo izquierdo por postes de luz, y el derecho con torres de alta tensi??n, lo que significa un progreso.</TD>'+
      '       </TR>'+
      '     </TABLE>'+
      '     <TABLE class="FT">'+
      '       <TR>'+
      '         <TH>Ficha T??cnica:</TH>'+
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
      '         <TD>T??cnica:  ??leo sobre tela y madera</TD>'+
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie 3.<br>*La ciudad se qued?? sumida en el miedo debido al llamado ???ah?? vienen???ah?? vienen???.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
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
            '         <TD>T??cnica:  ??leo sobre tela y madera</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>El nacimiento de Francisco Javier en situaci??n de pobreza. muestra la precariedad de los habitantes que vivi??n en casas de cart??n, cuyo ingreso econ??mico part??a de la venta y crianza de cerdos.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alfredo Arcos</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  2</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/13-alfredo-arcos/2 fragmentaci??n de pintura 46-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="fragmentoV">'+
            '   <div class="textoFMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alfredo Arcos</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmento:  1/2</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/13-alfredo-arcos/1 fragmentaci??n de pintura 46-min.jpg" alt=""></img>'+  
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Alfredo Arcos</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  2/2</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Francisco Javier, el ni??o que naci?? sumergido en la pobreza y desigualdad sobre los techos de cart??n, se convirti?? en un drogadicto.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alfredo Arcos</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  3</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/13-alfredo-arcos/1 fragmentaci??n de pintura 47-min.jpg" alt=""></img>'+  
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Alfredo Arcos</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  1/3</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alfredo Arcos</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmento:  2/3</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alfredo Arcos</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmento:  3/3</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Discusi??n entre los padres de Francisco Javier que lo corren de su casa.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alfredo Arcos</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/13-alfredo-arcos/1 fragmentaci??n de pintura 49-min.jpg" alt=""></img>'+  
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Alfredo Arcos</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  1/2</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/13-alfredo-arcos/2 fragmentaci??n de pintura 49-min.jpg" alt=""></img>'+  
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Alfredo Arcos</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  1/2</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Francisco Javier es encontrado en un mercado, semi devorado por ratas.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alfredo Arcos</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  2</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/5-juan-orozco-palmerin/1 fragmentaci??n de pintura 14-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="fragmentoV">'+
            '   <div class="textoFMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmento:  1/1</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  1</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/5-juan-orozco-palmerin/1 fragmentaci??n de la pintura 15-min.jpg" alt=""></img>'+  
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  1/1</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  1</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/5-juan-orozco-palmerin/1 fragmentaci??n de la pintura 16-min.jpg" alt=""></img>'+  
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  1/1</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  1</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmento:  1/2</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  2/2</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  2</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/5-juan-orozco-palmerin/1 fragmentaci??n de pintura 18-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="fragmentoV">'+
            '   <div class="textoFMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmento:  1/2</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/5-juan-orozco-palmerin/2 fragmentaci??n de pintura 18-min.jpg" alt=""></img>'+  
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  2/2</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  2</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Juan Orozco Palmer??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Mart??n Cuaya</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  1</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Mart??n Cuaya</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  1/1</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '   <img src="../images/6-martin-cuaya/1 fragmentaci??n de pintura 21-min.jpg" alt=""></img>'+  
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Mart??n Cuaya</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmento:  1/1</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Mart??n Cuaya</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  1</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Mart??n Cuaya</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Mart??n Cuaya</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Mart??n Cuaya</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
      '         <TH>Ficha T??cnica:</TH>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Sin T??tulo</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Artista:  Pablo Mor??n</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>Fragmentaciones:  Ninguna</TD>'+
      '       </TR>'+
      '       <TR>'+
      '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Autorretrato de Epitafio ??lvarez de Le??n ???Tacho??? y conocido como el pintor del pueblo.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Epitafio ??lvarez de Le??n</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Pluma sobre papel</TD>'+
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
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Autorretrato de Epitafio ??lvarez de Le??n ???Tacho??? y conocido como el pintor del pueblo.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Epitafio ??lvarez de Le??n</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Pluma sobre papel</TD>'+
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
  //___________Carousel FUTURO-IDENTIDAD____________
  const pintura32 = document.querySelector('.pintura32');
  pintura32.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/8-cuaya-rest-tren77-chez/imagen completa-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Los inicios del grafiti y la m??sica Ska, dentro de Ciudad Neza, se muestra el pasado, presente y futuro de este tipo de expresi??n art??stica.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artistas:  Cuaya, Rest, Tren 77 y Chez Uno</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  1</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grafiti</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  244x488cm</TD>'+
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
  const pintura32F1 = document.querySelector('.pintura32F1');
  pintura32F1.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/8-cuaya-rest-tren77-chez/Fragmentaci??n-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="fragmentoV">'+
            '   <div class="textoFMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artistas:  Cuaya, Rest, Tren 77 y Chez Uno</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmento:  1/1</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grafiti</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '   </div>'+
            '   <div class="fragPintura">'+
            '     <img src="../images/fragmentos/imagen completa-1.jpg" alt="" ></img>'+  
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
  const pintura33 = document.querySelector('.pintura33');
  pintura33.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/12-lupus/Pintura 41-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Lupus</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  60x90cm</TD>'+
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
  const pintura34 = document.querySelector('.pintura34');
  pintura34.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/12-lupus/Pintura 43-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Lupus</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  60x90cm</TD>'+
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
  const pintura35 = document.querySelector('.pintura35');
  pintura35.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/12-lupus/Pintura 42-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Lupus</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  120x120cm</TD>'+
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
  const pintura36 = document.querySelector('.pintura36');
  pintura36.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/12-lupus/Pintura 44-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Lupus</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  120x120cm</TD>'+
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
  const pintura37 = document.querySelector('.pintura37');
  pintura37.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/12-lupus/Pintura 45-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Lupus</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre madera</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  120x120cm</TD>'+
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
  const pintura38 = document.querySelector('.pintura38');
  pintura38.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 27-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura39 = document.querySelector('.pintura39');
  pintura39.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 28-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura40 = document.querySelector('.pintura40');
  pintura40.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 29-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura401 = document.querySelector('.pintura401');
  pintura401.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 30-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura41 = document.querySelector('.pintura41');
  pintura41.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 31-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura42 = document.querySelector('.pintura42');
  pintura42.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 32-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura43 = document.querySelector('.pintura43');
  pintura43.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 33-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura44 = document.querySelector('.pintura44');
  pintura44.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/9-alejandro-perez-cruz/Pintura 34-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alejandro P??rez Cruz</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Grabado sobre papel</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  21.5x28cm</TD>'+
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
  const pintura45 = document.querySelector('.pintura45');
  pintura45.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/11-duany/Pintura 37-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 4 piezas: ???Makuto vive aqu?????.<br>Serie1.<br>La solidaridad entre las personas que no tienen nada y que est??n inmersos en la pobreza y desigualdad.<br>Se aprecian figuras abstractas de ni??os.</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 4 piezas</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Colecci??n:  ???Ni??os en Neza???</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Duany</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre cartulina</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  45x90cm</TD>'+
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
  const pintura46 = document.querySelector('.pintura46');
  pintura46.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/11-duany/Pintura 38-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie 2.<br>???Makuto vive aqu?????</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 4 piezas</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Colecci??n:  ???Ni??os en Neza???</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Duany</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre cartulina</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  45x90cm</TD>'+
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
  const pintura47 = document.querySelector('.pintura47');
  pintura47.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/11-duany/Pintura 39-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie 3.<br>???Makuto vive aqu?????</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 4 piezas</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Colecci??n:  ???Ni??os en Neza???</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Duany</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre cartulina</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  45x90cm</TD>'+
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
  const pintura48 = document.querySelector('.pintura48');
  pintura48.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalH">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/11-duany/Pintura 40-min.jpg" alt=""></img>'+  
            ' </div>'+
            '</div>',
      showCloseButton: true,
      showConfirmButton: false,
      width:"95%",
      background: "#fff8",
      footer:' <div class="textoMH">'+
            '     <TABLE class="DES">'+
            '       <TR>'+
            '         <TH>Descripci??n:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie 4.<br>???Makuto vive aqu?????</TD>'+
            '       </TR>'+
            '     </TABLE>'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Serie de 4 piezas</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Colecci??n:  ???Ni??os en Neza???</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Duany</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  Acr??lico sobre cartulina</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Medidas:  45x90cm</TD>'+
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
  const pintura49 = document.querySelector('.pintura49');
  pintura49.addEventListener("click", () => {
    const options = {
      html: 
            '<div class="modalV">'+
            ' <div class="pinturaM">'+
            '   <img src="../images/13-alfredo-arcos/Pintura 50-min.jpg" alt=""></img>'+  
            ' </div>'+
            ' <div class="textoMV">'+
            '     <TABLE class="FT">'+
            '       <TR>'+
            '         <TH>Ficha T??cnica:</TH>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Sin T??tulo</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Artista:  Alfredo Arcos</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>Fragmentaciones:  Ninguna</TD>'+
            '       </TR>'+
            '       <TR>'+
            '         <TD>T??cnica:  ??leo sobre tela</TD>'+
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