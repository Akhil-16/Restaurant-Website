fetch('../json/project.json')
        .then(Response => Response.json())
       
        .then(sdata =>{
          navbar(sdata)
          logo(sdata);
          circleimage(sdata);
          login(sdata.logo[3].login)
          offerzone(sdata.offerzone)
          locatio(sdata);
          Reviews(sdata);
          slider(sdata);
          rot(sdata);
          content(sdata)
          end()

          
        // imgpl(sdata);

        })
        function content(sdata){
          let h1=document.createElement("h1")
          h1.innerText=sdata.home.heading
          h1.setAttribute("id","enjoy")
          let content=document.querySelector(".content")
         
          
          let p=document.createElement("p")
          p.innerText=sdata.home.text
          
          let orbtn=document.createElement("button")
          orbtn.setAttribute("class","button")
          orbtn.innerHTML=`<a id="a" href="order.html">${sdata.home.order}</a>`
          let tbbtn=document.createElement("button")
          tbbtn.setAttribute("class","button")
          tbbtn.innerHTML=`<a id="a" href="booktable.html">${sdata.home.table}</a>`
          content.appendChild(h1)
          content.appendChild(p)
          content.appendChild(orbtn)
          content.appendChild(tbbtn)
          homestyle()

          

        }
        function homestyle(){
          let enjoy=document.getElementById("enjoy")
          let a=document.querySelectorAll("#a")
          a.forEach(ele=>{
            ele.style.textDecoration="none"
            ele.style.color="white"
            

          })
          
          
          enjoy.style.textAlign="center"
          enjoy.style.fontFamily="Lora"
          enjoy.style.fontSize="40px"
          enjoy.style.color="#2F7E09"
          
          let content=document.querySelector(".content")
          content.children[1].style.fontSize="30px"
          content.children[1].style.fontWeight="30px"
          content.children[1].style.fontFamily="Alex brush"
          content.style.width="520px"
          content.style.height="auto"
          content.style.padding="20px"
        }
        
        var rotation=0
        function rot(sdata){
          setInterval(()=>{
            rotation+=0.1
          document.getElementById("circle").style.transform="rotate("+rotation+"deg)"

          },50)
         

        }
       function slider(sdata){
        let img=document.getElementById("photo")
        let len=sdata.circleimage.length
      
        
        
        setInterval(function(){
          let random=Math.floor(Math.random()*len)
          img.style.transitionDuration = "1s";
          img.src=sdata.circleimage[random]
          
        },1000)

        
       }
        

        function  Reviews(data){
          br=`<br>`
          let x=`<p id="cus"> ${data.customer.heading}</p>`
          let main=`<div class="main">
        
      
        <div class="revbox">
            <img src="${data.customer.customerlist[0].image}">
            <p>${data.customer.customerlist[0].review}</p>
        </div>
     <div class="revbox"><img src="${data.customer.customerlist[0].image}">
            <p>${data.customer.customerlist[0].review}</p>
     </div>
     <div class="revbox"><img src="${data.customer.customerlist[0].image}">
            <p>${data.customer.customerlist[0].review}</p>
      </div>
     <div class="revbox"><img src="${data.customer.customerlist[0].image}">
            <p>${data.customer.customerlist[0].review}</p>
      </div>
     <div class="revbox"><img src="${data.customer.customerlist[0].image}">
            <p>${data.customer.customerlist[0].review}</p>
      </div>
  </div>`
       
          let rev=document.querySelector(".rev")
         rev.innerHTML=br+br+x+main
          let revbox=document.querySelectorAll(".revbox")
          revbox.forEach(ele=>{
            ele.style.textAlign="center"
            ele.style.marginRight="20px"
            ele.style.backgroundColor="white"
            ele.style.borderRadius="3px"
            ele.style.height="300px"
           ele.children[0].style.height="80px"
            ele.children[0].style.width="80px"
            ele.style.width="1000px"
            ele.style.flexShrink=0
          })
        cus=document.getElementById("cus")
          cus.style.textAlign="center"
         cus.style.fontSize="40px"
         cus.style.color="white"





        }
        function locatio(data){
          let loc=`<p id="t1">${data.Location}</p>
            <div class="loc">
          <div class="box"><img id="hyd"  src="${data.items[0].image}" alt=""><p>${data.items[0].name}</p>
            </div>
        <div class="box2"> <img id="hyd" src="${data.items[1].image}" alt=""><p>${data.items[1].name}</p></div>
       <div class="box3"><img id="hyd" src="${data.items[2].image}" alt=""><p>${data.items[2].name}</p></div>
       <div class="box"><img id="hyd" src="${data.items[3].image}" alt=""><p>${data.items[3].name}</p></div>
       </div>`
   
      lo=document.querySelector(".lo")
      lo.innerHTML=loc;
      lo.style.backgroundColor="#FFDB58";
     let lobox= document.querySelectorAll(".box")
 
     lobox[1].children[0].style.height="220px"
     t1=document.querySelector("#t1")
     t1.style.textAlign="center"
     t1.style.fontSize="40px"
     b3=document.querySelector(".box3")
     b3.style.margin="40px"
     b3.children[0].style.height="220px"
     b3.children[1].style.textAlign="center"


      lobox.forEach(e=>{
         e.style.height="200px"
         e.style.width="200px"
         e.style.margin="40px"
         e.children[0].style.textAlign="center"
         e.children[1].style.textAlign="center"
        })
        box2=document.querySelector(".box2")
          box2.children[0].style.height="276px"
          box2.children[1].style.textAlign="center"

          let hyd=document.querySelectorAll("#hyd")
          hyd.forEach(ele=>{
           

          })
          hyd.forEach(ele=>{
            ele.addEventListener("mouseover",()=>{
              ele.style.transition="transform 1s"
             
              
              ele.style.transform="scale(1.1)"
            })
            ele.addEventListener("mouseout",()=>{
             ele.style.transform="scale(1)"
              ele.style.bottom="0px"
            })
          })
         
         
          
            
      

        }
       
        // function over(){
        //   hyd=document.getElementById("hyd")
        //   hyd.style.transitionDuration="1s"
        //   hyd.style.bottom="10px"

        // }
        // function out(){
        //   hyd=document.getElementById("hyd")
        //   hyd.style.transitionDuration="1s"
        //   hyd.style.bottom="0px"

        // }
        function circleimage(sdata){
          let images=document.querySelectorAll("#images")
         let img=`<img src=" "> `
         images.forEach(ele=>{
          ele.innerHTML=img

         })
         var i=0

         images.forEach(ele=>{
          
          ele.children[0].src=sdata.circleimage[i]
          i++
         })


         
       
          size()
       

        }
        function size(){

          let images=document.querySelectorAll("#images")
          images.forEach(ele=>{
            ele.children[0].style.height="150px"
            ele.children[0].style.width="150px"
            ele.children[0].style.position="absolute"
          })
       

        }

        function navbar(sdata){
          let header=document.querySelector(".header")
          header.style.backgroundColor = "#Ffdb58";
          header.style.height="66px";
         
          let s_list = " ";
            for(i=0; i < sdata.navbar.length; i++){
                s_list +=`<li id="text"><a id="h1" href="${sdata.href[i]}">${sdata.navbar[i]}</a></li>`
            };
            document.getElementById('nav_list').innerHTML=s_list;
            padding();
          }
        function padding(){
          let text=document.querySelectorAll("#text");
          let h1=document.querySelectorAll("#h1");
          h1.forEach(ele=>{
            ele.style.textDecoration="none";
          })
          text.forEach(ele=>{
            ele.style.paddingLeft="100px"
          })


        }

        function logo(sdata){
          img=`<img id="image" src="${sdata.logo[0].logoimg}">`
          let name=`<h4>${sdata.logo[1].firstname}</h4>`
          let secondname=`<spam>${sdata.logo[2].secondname}</spam>`
          let imgplace=document.querySelector(".img-place")
      
          imgplace.innerHTML=img+name+secondname;
        

          let abc=document.getElementById("image");
          abc.style.height='66px'
         
       }
       function login(image){
        let img=`<a href="login.html">  <img id="account" src="${image}"></a>`
      
        document.querySelector(".login").innerHTML=img
        let account=document.getElementById("account")
        account.style.height="66px"
        account.style.position="absolute"
        account.style.right="0px"
        account.style.top="0px"
        }
        function offerzone(data){
          let br=`<br>`
          let h1=`<h1 id="zone" id="opacit">${data.name} </h1>`
          
          
          let h1piz=`<h1 class="pi"> ${data.items[0].name}</h1> <spam class="pi" id="of" >${data.items[0].Offerprice}</spam> <spam id="rr" class="pi">${data.items[0].Orginalprice}</spam>`
         let h1sha=`<h1 class="pi"> ${data.items[1].name}</h1> <spam class="pi" id="of">${data.items[1].Offerprice}</spam> <spam id="rr" class="pi">${data.items[1].Orginalprice}</spam>`
          let h1bur=`<h1 class="pi"> ${data.items[2].name}</h1> <spam class="pi" id="of" >${data.items[2].Offerprice}</spam> <spam id="rr" class="pi">${data.items[2].Orginalprice}</spam>`
          let img=`<img id="shake" class="opacit" onmouseover="set()" onmouseout="back()"src="${data.items[0].image}">`
          let img1=`<img id="cook" class="opacit" onmouseover="set()" onmouseout="back()" src="${data.items[1].image}">`
          let img2=`<img id="pizza" class="opacit" onmouseover="set()" onmouseout="back()"src="${data.items[2].image}">`
         let dishes= document.querySelector(".dishes");

         let sec=` <div class="boxes"><div class="box1" id="b1"></div><div class="box1" id="b2"></div><div class="box1" id="b3"></div></div>`
         dishes.innerHTML=br+br+br+h1+sec
         dishes.style.opacity="red"
         document.getElementById("zone").style.textAlign="center"
        
         let b1=document.querySelector("#b1")
  
         
         b1.innerHTML=img+h1sha
        
         
         let shake=document.getElementById("shake")
         shake.style.width="360px"
         shake.style.height="400px"
         let b2=document.querySelector("#b2")
         b2.innerHTML=img1+h1piz
       
         document.getElementById("cook").style.width="360px"
         document.getElementById("cook").style.height="400px"
         let b3=document.querySelector("#b3")
         b3.innerHTML=img2+h1bur
        
         document.getElementById("pizza").style.width="360px"
         document.getElementById("pizza").style.height="400px"
       
         
         let box1=document.getElementsByClassName("box1");
         console.log(box1)
         for(i=0;i<box1.length;i++){
          box1[i].style.textAlign="center"
          box1[i].children[0].style.borderRadius="15px"
          
         }

         
         let opa=document.querySelectorAll(".opacit")
         
        //  for(i=0;i<opa.length;i++){
        //   opa[i].style.opacity="0.75"
          
        //  }
     
       
       
         for(i=0;i<box1.length;i++){
          box1[i].addEventListener("mouseover",e=>{
          e.target.style.opacity="1"
          
          
           })
           box1[i].addEventListener("mouseout",e=>{
           e.target.style.opacity="0.75"
           })
         }
         let pi=document.querySelectorAll(".pi")
      for(i=0;i<pi.length;i++){
        pi[i].style.opacity="0"

      }
     
        
         
        

         

    
        }
        function set(){
          let pi=document.querySelectorAll(".pi")
          
          for(i=0;i<pi.length;i++){
            
            pi[i].style.bottom=75+"px"
          
          pi[i].style.transitionDuration="1s"
          
          pi[i].style.opacity="1"

          }
         

        }

        function back(){
          let pi=document.querySelectorAll(".pi")
          for(i=0;i<pi.length;i++){
            pi[i].style.bottom=0+"px"
           pi[i].style.opacity="0"

          }
         

        }


        // function imgpl(data){
        //     const foo = document.createElement("img");
        //     foo.src = data['img-plc'];
        //     document.body.appendChild(foo);
        // }
        
        function end(){
          
        }