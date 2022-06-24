const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// Declaring Variables
const navLinks = document.querySelectorAll('nav a')
const aNavLinkArray = Object.values(siteContent.nav)

const logo = document.querySelector('.logo')
const title = document.querySelector('.cta-text h1')
const bigBtn = document.querySelector('.cta-text button')

const codeImg = document.querySelector('#cta-img')

const mainContent = document.querySelectorAll('.text-content h4, .text-content p')
const mainContentArray = Object.values(siteContent["main-content"])
const middleImg = document.querySelector('.middle-img')

const contact = document.querySelectorAll('.contact h4, .contact p')
const contactArray = Object.values(siteContent.contact)

const footerLink = document.querySelector('footer a')

// Adding Text 
// Adding Text and Class to Nav
navLinks.forEach(function (element, index) {
  element.textContent = aNavLinkArray[index];
  navLinks[index].className = 'italic';
})

//Adding Text to CTA section
title.textContent = Object.values(siteContent.cta)[0]
bigBtn.textContent = siteContent.cta.button

//Add images
// Images are not rendering, trying 3 different ways - error: GET http://localhost:9000/img/logo.png net::ERR_CONNECTION_REFUSED
logo.src = siteContent['images']["logo-img"]
codeImg.src = siteContent.images["cta-img"]
middleImg.src = Object.values(siteContent.images)[2]

//Adding Text to main-content area
mainContent.forEach(function(element, index){
  element.textContent = mainContentArray[index];
})

// Add text to footer
contact.forEach((element, index) => {
  element.textContent = contactArray[index];
})

//Adding text and class to footer
footerLink.classList.add('bold')
footerLink.textContent = 'Copyright Great Idea! 2022'
