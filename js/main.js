 
 
 
 
function inicio(){
    gsap.to(".hero", {
    scrollTrigger: {
        trigger: ".hero",
        scrub: true,
        pin: true,
        start: "center center",
        end: "bottom -100%",
        toggleClass: "active",
        ease: "power2"
    }
    });
    gsap.to(".hero__image", {
    scrollTrigger: {
        trigger: ".hero",
        scrub: 0.9,
        start: "top bottom",
        end: "bottom -1000%",
        ease: "power2"
    },
    y: "-120%"
    });
    const tl = gsap.timeline();
    tl.to(".animation",{
        y:"-100%",
        duration:1,
        delay:1,
        ease:"Expo.easeInOut"
    })
    gsap.from('.button__index',{
        scrollTrigger: '.button__index',
        duration: 3.9,
        opacity: 0,
        y: 100,
        delay: 2.7,
        stagger:1
    });
} 
function scroll(){
    var windowWidth = window.innerWidth;
    var horLength = document.querySelector(".element-wrapper").scrollWidth;
    var distFromTop = document.querySelector(".horizontal-section").offsetTop;
    var scrollDistance = distFromTop + horLength - windowWidth;
    
    document.querySelector(".horizontal-section").style.height = horLength + "px";
    
    window.onscroll = function(){
      var scrollTop = window.pageYOffset;
      
      if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
      }
    }
} 


/*animacion del modal agregar data-animation-in  data-animation-out*/
// Different effects for showing and closing modal
let fadeIn = 'animate__flipInX';
let fadeOut = 'animate__flipOutX';

// On show
$('#exampleModal').on('show.bs.modal', function () {
    $(this).removeClass(fadeOut);
    $(this).addClass(fadeIn);
});

// On closing
$('#exampleModal').on('hide.bs.modal', function (e) {
    let $this = $(this);

    // Check whether the fade in class still exists in this modal
    // if this class is still exists prevent this modal
    // to close immediately by setting up timeout, and replace
    // the fade in class with fade out class.
    if ($this.hasClass(fadeIn)) {
        $this.removeClass(fadeIn);
        $this.addClass(fadeOut);
        e.preventDefault();

        setTimeout(function () {
            $this.modal('hide');
        }, 1000); // the default delays from animate.css is 1s
    }
});



inicio();
scroll();



