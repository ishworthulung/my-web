function isTouching(el1, el2) {
    let rect1 = el1.getBoundingClientRect();
    let rect2 = el2.getBoundingClientRect();
    
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}

function checkCollision() {
    let box1 = document.getElementById("top");
    let box2 = document.getElementById("second");
    let logo = document.getElementById("logo");
    if (isTouching(box1, box2)) {
        box1.style.backgroundColor = "black"; // Change color on collision
    } else {
        box1.style.backgroundColor = "rgba(255, 255, 255,0.27)"; // Reset color

    }
    if (isTouching(box1, box2)) {
        box1.style.borderRadius = "30px";
        box1.style.boxShadow = "0px 0px 30px white";
    } else {
        box1.style.borderRadius = "0";
        box1.style.boxShadow = "none";

    }
}
window.addEventListener("scroll", checkCollision);

