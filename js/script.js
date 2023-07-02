let humberger = document.getElementsByClassName('humberger')[0];
let nav = document.getElementsByClassName('nav-writings')[0];

function toggleNavBar() {
    nav.classList.toggle('nav-visible');
}

document.addEventListener('click', function (event) {
    const targetElement = event.target;

    // Check if the clicked element is within the navbar or its contents
    if (targetElement !== humberger && !humberger.contains(targetElement) && nav && !nav.contains(targetElement)) {
        nav.classList.remove('nav-visible');
    }
});

  var scrollToTop = document.querySelector(".nav-writings > p:nth-child(1)");
  var scrollToServices = document.querySelector(".nav-writings > p:nth-child(2)");
  var scrollToSkills = document.querySelector(".nav-writings > p:nth-child(3)");
  var scrollToEvents = document.querySelector(".nav-writings > p:nth-child(4)");
  var scrollToContact = document.querySelector(".nav-writings > p:nth-child(5)")

  let homeSection = document.querySelector('.hero-section')
  let servicesSection = document.querySelector('.services-section')
  let skillsSection = document.querySelector('.skills-section')
  let eventsSection = document.querySelector('.events-section')
  let contactSection = document.querySelector('.contact-section')


  scrollToTop.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  scrollToServices.onclick = function() {
    window.scrollTo({
      top: homeSection.offsetHeight,
      behavior: "smooth"
    });
  };
  
  scrollToSkills.onclick = function() {
    window.scrollTo({
      top: homeSection.offsetHeight + servicesSection.offsetHeight,
      behavior: "smooth"
    });
  };
  
  scrollToEvents.onclick = function() {
    window.scrollTo({
      top: homeSection.offsetHeight + servicesSection.offsetHeight + skillsSection.offsetHeight,
      behavior: "smooth"
    });
  };
  
  scrollToContact.onclick = function() {
    window.scrollTo({
      top: homeSection.offsetHeight + servicesSection.offsetHeight + skillsSection.offsetHeight + eventsSection.offsetHeight,
      behavior: "smooth"
    });
  };
  

  window.onscroll = function() {
    scrollToTop.classList.remove("colored")
    scrollToServices.classList.remove("colored")
    scrollToSkills.classList.remove("colored")
    scrollToEvents.classList.remove("colored")
    scrollToContact.classList.remove("colored")

  if (window.pageYOffset >= homeSection.offsetHeight + servicesSection.offsetHeight + skillsSection.offsetHeight
       + eventsSection.offsetHeight) {
    scrollToContact.classList.add("colored")

  } else if (window.pageYOffset >= homeSection.offsetHeight + servicesSection.offsetHeight + 
      skillsSection.offsetHeight){
    scrollToEvents.classList.add("colored")

  } else if (window.pageYOffset >= homeSection.offsetHeight + servicesSection.offsetHeight){
    scrollToSkills.classList.add("colored")

  } else if(window.pageYOffset >= homeSection.offsetHeight){
    scrollToServices.classList.add("colored")

  } else{
    scrollToTop.classList.add("colored")

  }
  
};