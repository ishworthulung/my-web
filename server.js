
        function loadtext(){
            fetch('files/cv/p1.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p1').innerText = data);

            fetch('files/cv/p2.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p2').innerText = data);

            fetch('files/cv/p3.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p3').innerText = data);

            fetch('files/cv/p4.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p4').innerText = data);
        }
        function loadstruct(){
            fetch('top.html')
            .then(response => response.text())
            .then(data => document.getElementById('top').innerHTML = data);

           
        }
        function loadphoto(){
            fetch('photo for web/profie pic.jpg')
            .then(response => response.blob())
            .then(blob => document.getElementById('profile-pic').src = URL.createObjectURL(blob));
       
            fetch('photo for web/dc motor 2.jpg')
            .then(response => response.blob())
            .then(blob => document.getElementById('pic1').src = URL.createObjectURL(blob));

            fetch('photo for web/drilling soil.jpg')
            .then(response => response.blob())
            .then(blob => document.getElementById('pic2').src = URL.createObjectURL(blob));
        }


        // function isTouching(el1, el2) {
        //     let rect1 = el1.getBoundingClientRect();
        //     let rect2 = el2.getBoundingClientRect();
            
        //     return !(rect1.right < rect2.left || 
        //              rect1.left > rect2.right || 
        //              rect1.bottom < rect2.top || 
        //              rect1.top > rect2.bottom);
        // }

        // function checkCollision() {
        //     let box1 = document.getElementById("top");
        //     let box2 = document.getElementById("second");

        //     if (isTouching(box1, box2)) {
        //         box1.style.backgroundColor = "black"; // Change color on collision
        //     } else {
        //         box1.style.backgroundColor = "rgba(255, 255, 255,0.27)"; // Reset color
        //     }
        // }

        loadtext();
        loadstruct()
        loadphoto()

  