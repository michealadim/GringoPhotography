$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
  
   
  });

  // gsap.to(".bottomArrow", {duration: 2, y:30, backgroundColor: "#33AA09" , borderRadius: "15%", border: "1px solid white", ease: elastic});
    gsap.from(".bottomArrow", {duration: 2, y:30,  delay: 1.5, ease: 'elastic'});