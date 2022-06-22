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
const nav = document.querySelectorAll('nav')
const navLinks = document.querySelectorAll('nav a')
const navServices = document.querySelectorAll('nav a')[0]
const navProduct = document.querySelectorAll('nav a')[1]
const navVision = document.querySelectorAll('nav a')[2]
const navFeatures = document.querySelectorAll('nav a')[3]
const navAbout = document.querySelectorAll('nav a')[4]
const navContact = document.querySelectorAll('nav a')[5]
const logo = document.querySelector('.logo')
const title = document.querySelector('.cta-text h1')
const bigBtn = document.querySelector('.cta-text button')
const codeImg = document.querySelector('.cta-img')
const featureHeader = document.querySelectorAll('.top-content .text-content h4')[0]
const aboutHeader = document.querySelectorAll('.top-content .text-content h4')[1]
const servicesHeader = document.querySelectorAll('.bottom-content .text-content h4')[0]
const productHeader = document.querySelectorAll('.bottom-content .text-content h4')[1]
const visionHeader = document.querySelectorAll('.bottom-content .text-content h4')[2]
const featureP = document.querySelectorAll('.top-content.text-content p')[0]
const middleImg = document.querySelector('.middle-img')
const contactHeader = document.querySelector('.contact h4')
const contactP = document.querySelector('.content p')
const footerLink = document.querySelector('footer a')

// Adding Text 
// Adding Class to nav
for(let i=0; i < navLinks.length; i++){
  navLinks[i].className = 'italic'
}

// Adding Text to Navigation
navServices.textContent = 'Services'
navProduct.textContent = 'Product'
navVision.textContent = 'Vision'
navFeatures.textContent = 'Features'
navAbout.textContent = 'About'
navContact.textContent = 'Contact'

//Adding Text to CTA section
title.textContent = 'DOM Is Awesome'
bigBtn.textContent = 'Get Started'

//Adding Text to main-content area
featureHeader.textContent = 'Features'
aboutHeader.textContent = 'About'
servicesHeader.textContent = 'Services'
productHeader.textContent = 'Product'
visionHeader.textContent = 'Vision'
