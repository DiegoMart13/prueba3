const p26 = document.querySelector(".p26");
p26.addEventListener("click", () => {
  const options = {
    showCloseButton: true,
    showConfirmButton:  false,
    imageUrl: '../images/8-cuaya-rest-tren77-chez/imagen completa-min.jpg',
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
})
document.oncontextmenu = function(){return false}