/*MAURICIO VEGA */
const p7 = document.querySelector(".p7");
p7.addEventListener("click", () => {
  const options = {
    showCloseButton: true,
    showConfirmButton:  false,
    imageUrl: '../images/3-mauricio-vega/Pintura 7-min.JPG',
    imageHeight: 'auto',
    width:"90%",
    height:"80vh",
    backdrop: true,
    background: '#0003',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  };
  Swal.fire(options);
});
const p8 = document.querySelector(".p8");
p8.addEventListener("click", () => {
  const options = {
    showCloseButton: true,
    showConfirmButton:  false,
    imageUrl: '../images/3-mauricio-vega/Pintura 8-min.JPG',
    imageHeight: 'auto',
    width:"90%",
    height:"80vh",
    backdrop: true,
    background: '#0003',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  };
  Swal.fire(options);
});
const pcompleto = document.querySelector(".pcompleto");
pcompleto.addEventListener("click", () => {
  const options = {
    showCloseButton: true,
    showConfirmButton:  false,
    imageUrl: '../images/3-mauricio-vega/Tríptico completo-min.png',
    imageHeight: 'auto',
    width:"90%",
    height:"80vh",
    backdrop: true,
    background: '#0003',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  };
  Swal.fire(options);
});