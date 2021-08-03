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
    confirmButtonText: "continuar",
    width:"100%",
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  };
  Swal.fire(options);
});
