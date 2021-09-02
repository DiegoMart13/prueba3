const p35 = document.querySelector(".p35");
p35.addEventListener("click", () => {
  const options = {
    showCloseButton: true,
    showConfirmButton:  false,
    imageUrl: '../images/10-epitafio-tacho/Pintura 35-min.jpg',
    imageHeight: 'auto',
    width:"60%",
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
})
const p36 = document.querySelector(".p36");
p36.addEventListener("click", () => {
  const options = {
    showCloseButton: true,
    showConfirmButton:  false,
    imageUrl: '../images/10-epitafio-tacho/Pintura 36-min.jpg',
    imageHeight: 'auto',
    width:"60%",
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
})