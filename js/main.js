 
 
 
 
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
inicio();
scroll();



