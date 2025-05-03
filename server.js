 body{
   margin: 0;
    background-color: black;
    color: white;
    border: 1px solid black;
    width: 70pc;
    height: 205pc;
    display: block;
    justify-self: center;
    justify-content: center;


 }
 #top {
   margin: 0;
   margin-top: 1px;
   background-color: rgba(255, 255, 255,0.27);
   height: 3pc;
   width: 70pc;
   display: flex;
    justify-self: center;
    justify-content: left;
  position: fixed;
  transition: ;
  transition: box-shadow 1.2s,  background-color 1s ease, border-radius 1s ease ;
  

 }
 #logo{
  margin: 0;
  padding: 10px;
  margin-left: 10px;
  margin-right: 15px;
  font-size: 25px;
 }
 table{
   margin: 0;
   margin-left: 5pc;
   border-collapse: separate;
   width: 38pc;
   height: 3pc;
 }
 th{
   font-size: 1.3pc;
    text-align: center;
    padding: 4px;
    margin-right: 5px;
    color: gold;
    transition-duration: 0.5s;
    transition-property: background-color, color ;
 }
th:hover{
  background-color: brown;
  color: white;
}
p{
  font-size: 1.5pc; 
  margin: 0;
}

#second {
  margin: 0;
  margin-top: 5pc;
  border: 1px solid red;
  background-color: rgba(255, 0, 0,0.2);
  height: 192pc;
  width: 99%;
  display: block;
   justify-self: center;
   justify-content: center;

   #head_line{
    margin: 0;
     font-size: 3pc;
  }
  #sub_head{
    margin: 0;
    font-size: 2pc;
  }
  .sub_head2{
    font-size: 1.8pc;
  }
}
#contennerA{
  margin: 0;
  height: 27pc;
  width: 98%pc;
  display: grid;
  text-align: center;
  justify-self: center;
  justify-content: center;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#profile-pic{
  margin: auto;
  padding: 10px;
  width: 18pc;
  height: 18pc;
  border-radius: 50%;
  object-fit: cover;
}
#contennerB{
  margin: 0;
  margin-top: 30px;
  padding: 10px;
  height: 58pc;
  width: 98%;

  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#contennerC{
  margin: 0;
  margin-top: 10px;
  padding: 7px;
  height: 32pc;
  /* border: 1px solid white; */

  width: 98%pc;
  
  display: inline-flex;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.pic-gbl{
  border-radius: 20px;
}
#sub-A{
  margin: 0;
  margin-right: 10px;
  padding: 10px;
  /* border: 1px solid gainsboro; */
  height: 32pc;
  width: 60%;
  display: inline-flex;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#sub-B{
  margin: 0;
  margin-right: 10px;
  padding: 10px;
  /* border: 1px solid gainsboro; */
  height: 27pc;
  width: 40%;
  display: inline-flex;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#contennerD{
  margin: 0;
  margin-top: 50px;
  padding: 7px;
  height: 37pc;
  /* border: 1px solid white; */

  width: 98%pc;

  display: inline-flex;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#sub-C{
  margin: 0;
  margin-right: 10px;
  padding: 10px;
  /* border: 1px solid gainsboro; */
  height: 27pc;
  width: 40%;
  display: inline-flex;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#sub-D{
  margin: 0;
  margin-right: 10px;
  padding: 10px;
  /* border: 1px solid gainsboro; */
  height: 35pc;
  width: 60%;
  display: inline-flex;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#contennerE{
  border-bottom: 1px solid silver ;
  margin: 0;
  margin-top: 30px;
  padding: 10px;
  height: 27pc;
  width: 98%pc;


  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#link_title{
  text-align: center;
}

#social_medias{
  display: flex;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 100px;
  padding: 10px;
  height: 8pc;
  width: 98%;
  align-content: center;
  justify-content: center;
}

#social_medias img{
  border-radius: 50%;
 height: 40px;
 width: 40px;
 margin-right: 20px;
 box-shadow: 1px 1px 10px  rgba(0, 0, 255,0.7);
 transition: box-shadow 0.5s ease;

}
#social_medias img:hover{
  box-shadow: 1px 1px 20px  rgba(0, 0, 255,1);

}

/* ///////////////////////////////////////////////////// */

@media (max-width: 700px) {
  body{
    width: 375px;
    height: auto;
    justify-content: center;
    justify-items: center;
  }
  

  #top {  
    margin: 0;
    margin-top: 5px;
    background-color: rgba(255, 255, 255,0.27);
    height: 1.9pc;
    width: 375px;
    display: flex;
     justify-self: center;
     justify-content: left;
   position: fixed;
   align-items: center;
   transition: box-shadow 1.2s,  background-color 1s ease, border-radius 1s ease ;
   
 
  }
  #logo{
   margin: 0;
   margin-left: 10px;
   font-size: 13px;
  }
  table{
    margin: 0;
    border-collapse: separate;
    width: 20pc;
    height: 3pc;
    margin-left: 0.5pc;

  
  }
  th{
    font-size: 0.7pc;
     text-align: center;
     color: gold;
     transition-duration: 0.5s;
     transition-property: background-color, color ;
  }

  p{
    font-size: 0.7pc; 
    margin: 0;
  }
  #second{
    width: 100%;
    height: 100%;

  }

  #head_line{
    margin: 0;
     font-size: 1.5pc;
  }
  #sub_head{
    margin: 0;
    font-size: 1pc;
  }
  .sub_head2{
    font-size: 1.1pc;
  }
  #profile-pic{
    height: 12pc;
    width: 12pc;
  }
  img{
    height: 330px;
    width: 300px;
  }
  #contennerA{
    height: auto;
    width: 95%;
    text-align: center;
  }
  #contennerB{
    height: auto;
    width: 95%;
    text-align: left;

  }
  #contennerC{
    height: auto;
    width: 95%;
    display: flex;
    flex-direction: column;

  }
  #sub-A{
    margin: 0;
    padding: 10px;
    height:auto;
    width: 94%;
    display: inline-flex;
    flex-wrap: wrap;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  #sub-B{
    margin: 0;
    margin-right: 10px;
    padding: 10px;
    height: auto;
    width: 94%;
    justify-content: center;
  }
  #contennerD{
    padding: 0;
    height: auto;
    width: 95%;
    display: flex;
    flex-direction: column;
  }
  #sub-D{
    margin: 0;
    padding: 10px;
    height:auto;
    width: 94%;
    display: inline-flex;
    flex-wrap: wrap;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  #sub-C{
    margin: 0;
    padding: 5px;
    margin-right: 10px;
    padding: 10px;
    height: auto;
    width: 94%;
    justify-content: center;
  }
  #contennerE{
    border-bottom: 1px solid silver ;
    margin: 0;
    margin-top: 30px;
    padding: 10px;
    height: auto;
    width: 95%;
  
  
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  #social_medias{
    display: flex;
    margin: 0;
    margin-top: 30px;
    padding: 10px;
    height: 60px;
    width: 95%;
    align-content: center;
    justify-content: center;
  }
  #social_medias img{
  border-radius: 50%;
 height: 20px;
 width: 20px;
 margin-right: 20px;
 box-shadow: 1px 1px 10px  rgba(0, 0, 255,0.7);
 transition: box-shadow 0.5s ease;
}
#social_medias img:hover{
  box-shadow: 1px 1px 20px  rgba(0, 0, 255,1);

}
/* //////////////////////////////////////// */

@media (max-width: 1100px) and (min-width: 701px) {
  body{
    width: 700px;
    height: auto;
    justify-content: center;
    justify-items: center;
  }

  #top {  
    margin: 0;
    margin-top: 5px;
    background-color: rgba(255, 255, 255,0.27);
    height: 2.9pc;
    width: 700px;
    display: flex;
     justify-self: center;
     justify-content: left;
   position: fixed;
   align-items: center;
   transition: box-shadow 1.2s,  background-color 1s ease, border-radius 1s ease ;
   
 
  }
  #logo{
   margin: 0;
   font-size: 20px;
  }
  table{
    margin: 0;
    border-collapse: separate;
    width: 60%;
    height: 3pc;
    margin-left: 5pc;

  
  }
  th{
    margin-left: 30pc;
    font-size: 1pc;
     color: gold;
     transition-duration: 0.5s;
     transition-property: background-color, color ;
  }

  #head_line{
    margin: 0;
     font-size: 2pc;
  }
  #sub_head{
    margin: 0;
    font-size: 1.5pc;
  }
  .sub_head2{
    font-size: 1.8pc;
  }
  p{
    font-size: 1.3pc; 
    margin: 0;
  }
  #second{
    width: 100%;
    height: 100%;

  }

  #profile-pic{
    height: 12pc;
    width: 12pc;
  }
  img{
    height: 330px;
    width: 300px;
  }
  #contennerA{
    height: auto;
    width: 95%;
    text-align: center;
  }
  #contennerB{
    height: auto;
    width: 95%;
    text-align: left;

  }
  #contennerC{
    height: auto;
    width: 95%;
    display: flex;
    flex-direction: column;

  }
  #sub-A{
    margin: 0;
    padding: 10px;
    height:auto;
    width: 94%;
    display: inline-flex;
    flex-wrap: wrap;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  #sub-B{
    margin: 0;
    margin-right: 10px;
    padding: 10px;
    height: auto;
    width: 94%;
    justify-content: center;
  }
  #contennerD{
    padding: 0;
    height: auto;
    width: 95%;
    display: flex;
    flex-direction: column;
  }
  #sub-D{
    margin: 0;
    padding: 10px;
    height:auto;
    width: 94%;
    display: inline-flex;
    flex-wrap: wrap;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  #sub-C{
    margin: 0;
    padding: 5px;
    margin-right: 10px;
    padding: 10px;
    height: auto;
    width: 94%;
    justify-content: center;
  }
  #contennerE{
    border-bottom: 1px solid silver ;
    margin: 0;
    margin-top: 30px;
    padding: 10px;
    height: auto;
    width: 95%;
  
  
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  #social_medias{
    display: flex;
    margin: 0;
    margin-top: 30px;
    padding: 10px;
    height: auto;
    width: 95%;
    align-content: center;
    justify-content: center;
    margin-bottom: 50px;
  }
 
  #social_medias img{
  border-radius: 50%;
 height: 40px;
 width: 40px;
 margin-right: 20px;
 box-shadow: 1px 1px 10px  rgba(0, 0, 255,0.7);
 transition: box-shadow 0.5s ease;
}
#social_medias img:hover{
  box-shadow: 1px 1px 20px  rgba(0, 0, 255,1);

}
