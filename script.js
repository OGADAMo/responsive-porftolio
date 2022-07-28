let leftSlider = document.querySelector("#left-btn");
let rightSlider = document.querySelector("#right-btn");
let pictures = document.querySelectorAll(".slider-images img");

let modalButtons = document.querySelectorAll(".modal-section button");
let closeButton = document.querySelector("#closeModal");

let sortButtons = document.querySelectorAll(".portfolio-categories button")


let imgNum = 0;
let button = document.querySelector(".header button")
const mobileMenu = () => {
    let menu = document.querySelector(".header ul");
    
    if (button.innerText === "MENU") {
        menu.style.display = "block";
        button.innerText = "Close"
    } else {
        menu.style.display = "none";
        button.innerText = "MENU"
    }
}

// Image Gallery
// Go towards (right) button 
const moveRight = () =>{
    displayImg();
    imgNum ++
    if(imgNum > pictures.length - 1){
        imgNum = 0;
    } pictures[imgNum].style.display = "block";
}

// Go backwards (left) button
const moveLeft = () => {
    displayImg();
    imgNum ++;
    if(imgNum > pictures.length - 1){
        imgNum = 0;
    } pictures[imgNum].style.display = "block";
}

// Display one image
const displayImg = () => {
    pictures.forEach(picture => {
        picture.style.display = "none";
    });
}

sortButtons.forEach(element => {
    element.addEventListener("click", sort = () => {
        let category = element.getAttribute("data-category")
        let items = document.querySelectorAll(".portfolio-items div")

        items.forEach(item => {
            if (item.getAttribute("data-category").includes(category)) {
                item.style.display = "block";
            }

            else if (category === "sve") {
                item.style.display = "block";
            } 
            
            else {
                item.style.display = "none";
            }  
        }); 
    });
})



// Modal Button and popup
let popups = document.querySelectorAll(".popup-modal");
let overlay = document.querySelector(".overlay");


const closeModal = () => {
    popups.forEach(popup => {
        console.log(popup);
        popup.style.display = "none";
        overlay.style.display = "none";
    })
    


}

// Function for element on click
button.addEventListener("click", mobileMenu)

modalButtons.forEach(modalButton => {
    modalButton.addEventListener("click", openModal = () => {
        let button = modalButton.getAttribute("class")
        
        popups.forEach(popup => {
            if(popup.getAttribute("class").includes(button)){
                popup.style.display = "block";
                overlay.style.display = "block";
                
               
                
            }
            
            
        })
        })
        
    
})


leftSlider.addEventListener("click", moveLeft)
rightSlider.addEventListener("click", moveRight)

closeButton.addEventListener("click", closeModal)



    







