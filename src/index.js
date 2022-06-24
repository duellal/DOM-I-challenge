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
// Delete once aNavLinkArray and navLinks are doing what these did
//const navServices = document.querySelectorAll('nav a')[0]
// const navProduct = document.querySelectorAll('nav a')[1]
// const navVision = document.querySelectorAll('nav a')[2]
// const navFeatures = document.querySelectorAll('nav a')[3]
// const navAbout = document.querySelectorAll('nav a')[4]
// const navContact = document.querySelectorAll('nav a')[5]
// Via Jessica's comment on previous pull
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
// Adding Class to nav
for(let i=0; i < navLinks.length; i++){
  navLinks[i].className = 'italic'
}

// Adding Text to Navigation
navLinks.forEach(function (element, index) {
  element.textContent = aNavLinkArray[index];
})

//Adding Text to CTA section
title.textContent = Object.values(siteContent.cta)[0]
bigBtn.textContent = siteContent.cta.button

//Add images
logo.src = 'http://localhost:5500/mocks/img/logo.png'
codeImg.src = 'http://localhost:5500/mocks/img/cta.png'
middleImg.src = 'http://localhost:5500/mocks/img/accent.png'

//Adding Text to main-content area
mainContent.forEach(function(element, index){
  element.textContent = mainContentArray[index];
})

// Add text to footer
contactHeader.textContent = 'Contact'
contactStreet.textContent = '123 Way 456 Street Somewhere, USA'
contactPhone.textContent = '1 (888) 999-9999'
contactEmail.textContent = 'sales@greatidea.io'

//Adding text and class to footer
footerLink.classList.add('bold')
footerLink.textContent = 'Copyright Great Idea! 2022'

//Styling Features and About to make paragraphs more spaced out like in the design file
// topContentP.style.paddingRight = '20px'
featureP.style.padding = '0px 30px 0px 0px'