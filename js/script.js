function page3Animation() {
    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".page3",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      xPercent: -200,
      ease: Power4,
    })
  }
 // Floating hover and cursor movement effect
 const circle = document.getElementById("about-circle");

 // Add mouse move listener
 circle.addEventListener("mousemove", (e) => {
   const rect = circle.getBoundingClientRect();
   const x = e.clientX - rect.left - rect.width / 2;
   const y = e.clientY - rect.top - rect.height / 2;

   gsap.to(circle, {
     x: x * 0.2, // Adjust multiplier for the intensity of movement
     y: y * 0.2,
     duration: 0.3,
     ease: "power3.out",
   });
 });

 // Reset on mouse leave
 circle.addEventListener("mouseleave", () => {
   gsap.to(circle, {
     x: 0,
     y: 0,
     duration: 0.5,
     ease: "power3.out",
   });
 });
  

  // GSAP Animation
  gsap.registerPlugin(ScrollTrigger);

  // Text Animation
  gsap.from(".blur-text p", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".blur-text",
      start: "top 80%", // Adjust the starting point of animation
    },
  });

  // Circle Animation
  gsap.from("#about-circle", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: "#about-circle",
      start: "top 90%", // Adjust the starting point of animation
    },
  });


  page3Animation()