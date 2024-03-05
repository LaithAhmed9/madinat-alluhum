// Check If There is Loacl Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    document.documentElement.style.setProperty("--main-color", mainColors);

    // Remove Active Class From All colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        // Add Active Class On Element with Data-color  === Local Storage Item
        if (element.dataset.color === mainColors) {

            // Add Active Class
            element.classList.add("active")
        }
    });
}

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There is Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === "true") {

        backgroundOption = true;

    }else {

        backgroundOption = false;

    }

    // Remove Active Class From All Span

    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active")
    });

    if (backgroundLocalItem === "true") {
        document.querySelector(".random-backgrounds .yes").classList.add("active")
    }else{
        document.querySelector(".random-backgrounds .no").classList.add("active")

    }
}

// Toggle Spin Class On Icon 
document.querySelector(".toggle-settings .fa-cog").onclick = function () {
    
    // Toggle Class Fa-spin For Rotaion On Self
    this.classList.toggle("fa-spin")

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open") 
}


// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {
    
    // Click On Every List Items
    li.addEventListener("click", (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e)
    })
})
// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach(span => {
    
    // Click On Every Spans
    span.addEventListener("click", (e) => {


        handleActive(e);

        if (e.target.dataset.background === "yes") {

            backgroundOption = true;

            randomizeImgs();

            localStorage.setItem("background_option", true);

        }else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);

        }
    })
})

// Select Landing Page Element
let landingPage = document.querySelector(".landing");

//Get Array Of Imgs
let imgsArray = ["m1.webp","m2.webp", "m3.webp","m4.webp","m5.webp","m6.webp","m7.webp","m8.webp","m9.webp","m10.webp","m11.webp","m12.webp"];


// Function To Randomize Imgs
function randomizeImgs() {
    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {
            // Get Random Number 
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            // Change Background Image Url 
            landingPage.style.backgroundImage = 'url("img/' + imgsArray[randomNumber] + '")';
        }, 3000)
    }
}

randomizeImgs();



// Create popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    
    img.addEventListener("click", (e) => {
        

        // Create OverLay Element
        let overlay = document.createElement("div");
        
        // Add Class To Overlay
        overlay.className = "popup-overlay";

        // Append Overlay To The Body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement("div");

        // Add Class To The Popup Box
        popupBox.className = "popup-box";

        if (img.alt !== null) {

            // Create Heading
            let imgHeading = document.createElement("h3")

            // Create Text For Heading
            let ImgText = document.createTextNode(img.alt);

            // Append The Text To The Heading
            imgHeading.appendChild(ImgText);

            // Append The Heading To the Popup Box
            popupBox.appendChild(imgHeading)
        }

        // Create The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);

        // Create The Close Span 
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text To The Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To The Close Buttton
        closeButton.className = "close-button";

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);

    })
});

// Close Popup 
document.addEventListener("click", (e) => {

    if (e.target.className == "close-button") {

        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();
    }
})

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");


// Select All links
const allLinks = document.querySelectorAll(".links a");



function scrollToSomeWhere(element) {

    element.forEach(ele => {

        ele.addEventListener("click", (e) => {
    
            e.preventDefault()
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: "smooth"
            })
        })
    })
}

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);

// Handle Active State 
function handleActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    // Add Active Class On Self
    ev.target.classList.add("active");
}


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletsLocaItem = localStorage.getItem(".bullets_option");

if (bulletsLocaItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletsLocaItem === "block") {

        bulletsContainer.style.display = "block";

        document.querySelector(".bullets-option .yes").classList.add("active");
        
    }else {

        bulletsContainer.style.display = "none";

        document.querySelector(".bullets-option .no").classList.add("active");
    }

}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === "show") {

            bulletsContainer.style.display = "block";

            localStorage.setItem(".bullets_option", "block");

        }else {

            bulletsContainer.style.display = "none";

            localStorage.setItem(".bullets_option", "none");
        }

        handleActive(e)

    })
});

// Rest Button 
document.querySelector(".rest-options").onclick = function () {

    // localStorage.clear();
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    // Reload Window
    window.location.reload();
}

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop Propagation
    e.stopPropagation();

    // Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");
    
    // Toggle Class "Open" On Links
    tLinks.classList.toggle("open");
}



//Start section stats
let section = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
    if (window.scrollY >= statsSection.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num))
        }
        started = true
    }
}

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

 // ButtonTop
 let mybutton = document.getElementById("myBtn");
     
 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   mybutton.style.display = "block";
 } else {
   mybutton.style.display = "none";
 }

 mybutton.onclick = function () {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };

   // ------------------------------------------------------
const map = L.map('map'); 
// Initializes map
map.setView([37.01479,42.5391461], 12); 
// Sets initial coordinates and zoom level

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // maxZoom: 16,
    attribution: '© OpenStreetMap'
}).addTo(map); 
// Sets map data source and associates with map

var marker = L.marker([37.01479,42.5391461]).addTo(map);