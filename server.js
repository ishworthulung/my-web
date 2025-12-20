
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

            fetch('top.html')
            .then(response => response.text())
            .then(data => document.getElementById('top_second').innerHTML = data);
           
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

        function loadTitles(){
            fetch('files/res/Electronic/Titles/title1.txt')
            .then(response => response.text())
            .then(data => document.getElementById('topic_1').innerText = data);

         
            fetch('files/res/Electronic/Titles/title2.txt')
            .then(response => response.text())
            .then(data => document.getElementById('topic_2').innerText = data);

            fetch('files/res/Electronic/Titles/title3.txt')
            .then(response => response.text())
            .then(data => document.getElementById('topic_3').innerText = data);

            fetch('files/res/Electronic/Titles/title4.txt')
            .then(response => response.text())
            .then(data => document.getElementById('topic_4').innerText = data);

            fetch('files/res/Electronic/Titles/title5.txt')
            .then(response => response.text())
            .then(data => document.getElementById('topic_5').innerText = data);

            
            fetch('files/res/Electronic/Titles/title6.txt')
            .then(response => response.text())
            .then(data => document.getElementById('topic_6').innerText = data);

            fetch('files/res/Electronic/Titles/title7.txt')
            .then(response => response.text())
            .then(data => document.getElementById('topic_7').innerText = data);

            fetch('files/res/Electronic/Titles/title8.txt')
            .then(response => response.text())
            .then(data => document.getElementById('topic_8').innerText = data);

            fetch('files/res/Electronic/Titles/title9.txt')
            .then(response => response.text())
            .then(data => document.getElementById('topic_9').innerText = data);

            fetch('files/res/Electronic/Titles/title10.txt')
            .then(response => response.text())
            .then(data => document.getElementById('topic_10').innerText = data);
            

        }
        function hide_meuns(){
          const bt1 = document.getElementById("menu_shows");
          const bt2 = document.getElementById("menu_hide");
          const menuAll = document.getElementById("top_second");
            const text_menu = document.getElementById("menu_table");

            text_menu.classList.remove("show_menu_list");
            text_menu.classList.add("hide_menu_list");
            
            menuAll.classList.remove("open");
            menuAll.classList.add("close");

            
            bt1.style.display="none";
            bt2.style.display="flex";
           
        }
        function show_meuns(){
            const bt1 = document.getElementById("menu_shows");
            const bt2 = document.getElementById("menu_hide");
            const menuAll = document.getElementById("top_second");
            const text_menu = document.getElementById("menu_table");
            
            text_menu.classList.remove("hide_menu_list");
                 text_menu.classList.add("show_menu_list");

                bt1.style.display="flex";
                bt2.style.display="none";
                menuAll.classList.remove("close");
                menuAll.classList.add("open");               

        }

        loadtext()
        loadstruct()
        loadTitles()
        loadphoto()

  