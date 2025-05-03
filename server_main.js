
        function loadtext(){
            fetch('p1.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p1').innerText = data);

            fetch('p2.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p2').innerText = data);

            fetch('p3.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p3').innerText = data);

            fetch('p4.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p4').innerText = data);
        }
        function loadstruct(){
            fetch('top.html')
            .then(response => response.text())
            .then(data => document.getElementById('top').innerHTML = data);

           
        }
        function loadphoto(){
            
                fetch('profie pic.jpg')
            .then(response => response.blob())
            .then(blob => document.getElementById('profile-pic').src = URL.createObjectURL(blob));
           
       
            fetch('dc motor 2.jpg')
            .then(response => response.blob())
            .then(blob => document.getElementById('pic1').src = URL.createObjectURL(blob));

            fetch('drilling soil.jpg')
            .then(response => response.blob())
            .then(blob => document.getElementById('pic2').src = URL.createObjectURL(blob));
        }

        loadtext()
        loadstruct()
        loadphoto()

  
