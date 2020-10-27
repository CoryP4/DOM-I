const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//circle code snippet

const codeImg = document.querySelector("#cta-img")
codeImg.setAttribute('src', "img/header-img.png")

//Nav bar 

const links1 = document.querySelector("header nav a:nth-of-type(1)")
links1.textContent = "Services"

const links2 = document.querySelector("header nav a:nth-of-type(2)")
links2.textContent = "Product"

const links3 = document.querySelector("header nav a:nth-of-type(3)")
links3.textContent = "Vision"

const links4 = document.querySelector("header nav a:nth-of-type(4)")
links4.textContent = "Features"

const links5 = document.querySelector("header nav a:nth-of-type(5)")
links5.textContent = "About"

const links6 = document.querySelector("header nav a:nth-of-type(6)")
links6.textContent = "Contact"


//bold text heading & button

const ctaText = document.querySelector(".cta-text h1")
ctaText.innerHTML = `DOM<br> Is<br> Awesome`

const ctaButton = document.querySelector(".cta-text button")
ctaButton.textContent = "Get Started"

//top content 

const topText1 = document.querySelector(".top-content .text-content:nth-of-type(1) h4")
topText1.textContent = "Features"

const topPara1 = document.querySelector(".top-content .text-content:nth-of-type(1) p")
topPara1.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const topText2 = document.querySelector(".top-content .text-content:nth-of-type(2) h4")
topText2.textContent = "About"

const topPara2 = document.querySelector(".top-content .text-content:nth-of-type(2) p")
topPara2.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."