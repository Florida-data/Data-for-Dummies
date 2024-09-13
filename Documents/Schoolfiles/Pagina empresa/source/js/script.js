gsap.registerPlugin(ScrollTrigger);


$(window).on('beforeunload', function() {

  window.setTimeout(function() {
   $(window).scrollTop(0); 
}, 0);  

});
gsap.from("#navbar-titulo",{
    
    ease: "slow",
    
    x: "25.9rem",
    y:-460,
    fontSize:90,
    fontWeight:"bolder",
    scrollTrigger:{
        trigger:"#navbar-titulo",
        start:"top top",
        end: "bottom 10%",
        scrub:2,
        toggleActions: "restart none reverse none"
    }
    
})
gsap.from("#texto-inventa",{
    duration: 1,
    y: -100,
    opacity: 0,
    scrollTrigger:{
        trigger:"#texto-inventa",
        start:"bottom bottom",
        end: "top -90%",
        scrub:2,
        toggleActions: "restart none reverse none"
    },

    ease: "back.out(.5)"
})
gsap.from("#texto-innova",{
    duration: 1,
    y: -100,
    opacity: 0,
    scrollTrigger:{
        trigger:"#texto-innova",
        start:"bottom bottom",
        end: "top -90%",
        scrub:2,
        
        toggleActions: "restart none reverse none"
    },

    ease: "back.out(.5)"
})
gsap.from("#texto-ingenio",{
    duration: 1,
    y: -100,
    opacity: 0,
    scrollTrigger:{
        trigger:"#texto-ingenio",
        start:"bottom 90%",
        end: "center -90%",
        scrub:2,
        toggleActions: "restart none reverse none"
    },

    ease: "back.out(.5)"
})

const linea = gsap.timeline({})

linea.from("#container-logo-dfd", {
    scale: 1,
    x:-300,
    opacity: 0,
    duration: 7,
    ease: "slowMotion",
    scrollTrigger: {
        trigger: "#container-logo-dfd",
        start: "center bottom",
        end: "center bottom",
        scrub: 8,
        
        toggleActions: "restart none reverse none"
    }
})


linea. to("#navBar",{
    y: -100,
    duration:5,
    ease: "slowMotion",
    delay: 5.5,
    scrollTrigger:{
        trigger: "#wrapperHorizontalScrolling",
        start: "top top",
        end: "bottom top",
        scrub:1,
        
    }
})


$("#title-dfd-wrapper").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("#title-dfd");
    
    let tl = gsap.timeline({
        scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "center bottom",
        
        
        end: "-30% top",
        scrub: 5,
        
        }
    });
    tl.from(targetElement, {
        x: -100,
        opacity:0,
        duration: 3,
        delay: 3,
    });
    });
    function setupHorizontalScroll() {
        let sections = gsap.utils.toArray("#wrapperHorizontalScrolling #container > section");
        let spaceBetweenSections = "15vw";
      
        let scrollTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1) - parseFloat(spaceBetweenSections) * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: "#wrapperHorizontalScrolling",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + (document.querySelector("#wrapperHorizontalScrolling").offsetWidth + (parseFloat(spaceBetweenSections) / 100 * window.innerWidth) * (sections.length - 1)),
            
          }
        });
      
        
        sections.forEach((section, i) => {
          let title = section.querySelector('.title-p');
          let content = section.querySelector('.col');
      
          if (title && content) {
            gsap.from(title, {
              opacity: 0,
              y: 50,
              
              duration: 1,
              scrollTrigger: {
                trigger: section,
                containerAnimation: scrollTween,
                start: "left center",
                toggleActions: "play none none reverse"
              }
            });
      
            gsap.from(content, {
              opacity: 0,
              y: 50,
              duration: 1,
              delay: 0.2,
              scrollTrigger: {
                trigger: section,
                containerAnimation: scrollTween,
                start: "left center",
                toggleActions: "play none none reverse"
              }
            });
          }
        });
      }
      
      
      document.addEventListener("DOMContentLoaded", setupHorizontalScroll);


















