const p1 = document.querySelector(".p1");
p1.addEventListener("click", () => {
  const options = {
    showCloseButton: true,
    showConfirmButton:  false,
    imageUrl: '../images/3-mauricio-vega/Pintura 7-min.JPG',
    imageHeight: 'auto',
    width:"90%",
    height:"80vh",
    backdrop: true,
    background: '#fff0',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  };
  Swal.fire(options);
});
const p2 = document.querySelector(".p2");
p2.addEventListener("click", () => {
  const options = {
    showCloseButton: true,
    showConfirmButton:  false,
    imageUrl: '../images/3-mauricio-vega/Pintura 8-min.JPG',
    imageHeight: 'auto',
    width:"90%",
    height:"80vh",
    backdrop: true,
    background: '#fff',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  };
  Swal.fire(options);
});
const p3 = document.querySelector(".p3");
p3.addEventListener("click", () => {
  const options = {
    showCloseButton: true,
    showConfirmButton:  false,
    imageUrl: '../images/3-mauricio-vega/Tríptico completo-min.png',
    imageHeight: 'auto',
    width:"90%",
    height:"80vh",
    backdrop: true,
    background: '#fff',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  };
  Swal.fire(options);
});