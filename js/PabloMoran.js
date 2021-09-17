const p25 = document.querySelector(".p25");
p25.addEventListener("click", () => {
  const options = {
    showCloseButton: true,
    showConfirmButton:  false,
    imageUrl: '../images/7-pablo-moran/Pintura 25-min.jpg',
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
