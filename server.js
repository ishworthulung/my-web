
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

            fetch('top.html')
            .then(response => response.text())
            .then(data => document.getElementById('top_second').innerHTML = data);
           
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
        function loadPergrafh(){
            fetch('p_1A.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_1A').innerText = data);

            fetch('p_1B.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_1B').innerText = data);

            ///////////////////////////////////////////

             fetch('p_2A.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_2A').innerText = data);

             fetch('p_2B.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_2B').innerText = data);

             fetch('p_3A.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_3A').innerText = data);

             fetch('p_3B.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_3B').innerText = data);

             fetch('p_3C.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_3C').innerText = data);

            fetch('p_4A.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_4A').innerText = data);
            
             fetch('p_4B.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_4B').innerText = data);
            
             fetch('p_4C.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_4C').innerText = data);

            fetch('p_5A.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_5A').innerText = data);

            fetch('p_5B.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_5B').innerText = data);

            fetch('p_5C.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_5C').innerText = data);

            fetch('p_6A.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_6A').innerText = data);

            fetch('p_6B.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_6B').innerText = data);

            fetch('p_7A.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_7A').innerText = data);

            fetch('p_7B.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_7B').innerText = data);

            fetch('p_7C.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_7C').innerText = data);

            fetch('p_8A.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_8A').innerText = data);

            fetch('p_8B.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_8B').innerText = data);

            fetch('p_8C.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_8C').innerText = data);

             fetch('p_9A.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_9A').innerText = data);

            fetch('p_9B.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_9B').innerText = data);

            fetch('p_9C.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_9C').innerText = data);

            fetch('p_10A.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_10A').innerText = data);

            fetch('p_10B.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_10B').innerText = data);

            fetch('p_10C.txt')
            .then(response => response.text())
            .then(data => document.getElementById('p_10C').innerText = data);

            ////////////////////////////////////////////

            // Load the text content for each paragraph
            fetch('j_1_p.txt')
            .then(response => response.text())
            .then(data => document.getElementById('j_1_p').innerText = data);

            fetch('j_2_p.txt')
            .then(response => response.text())
            .then(data => document.getElementById('j_2_p').innerText = data);

            fetch('j_3_p.txt')
            .then(response => response.text())
            .then(data => document.getElementById('j_3_p').innerText = data);

            fetch('j_3_pI.txt')
            .then(response => response.text())
            .then(data => document.getElementById('j_3_pI').innerText = data);

            fetch('fj_3_pII.txt')
            .then(response => response.text())
            .then(data => document.getElementById('j_3_pII').innerText = data);

            fetch('j_4_p.txt')
            .then(response => response.text())
            .then(data => document.getElementById('j_4_p').innerText = data);
            
            fetch('j_5_p.txt')
            .then(response => response.text())
            .then(data => document.getElementById('j_5_p').innerText = data);

            fetch('j_5_pI.txt')
            .then(response => response.text())
            .then(data => document.getElementById('j_5_pI').innerText = data);
            
        }

        loadtext()
        loadstruct()
        loadphoto()
        loadPergrafh()
  


