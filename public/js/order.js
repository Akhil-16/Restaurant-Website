
         fetch('../json/project.json')
        .then(Response => Response.json())
       
        .then(sdata =>{
            heading(sdata)
            images(sdata)
          
      

        })
        var x=0
        function submit(){
            if(x==0){
                alert("please add items to cart")
            }
            else{
                alert(" Order Placed")
                window.location.reload();
            //     document.querySelector("#title").remove()
            //  let div=document.createElement("div")
            //  div.setAttribute("id","title")
            //  let title=document.querySelector(".title")
            //  let btn=document.querySelector("#btn")
            
            //  title.insertBefore(div,btn)

               

            }


            

        }
        function heading(data){
           let h1= document.createElement("h1")

           let images=document.querySelector(".images")
           
           let sec=document.querySelector(".section1")
           sec.insertBefore(h1,images)
           h1.setAttribute("id","h1")
           let text=`${data.order.heading}`
           let t=document.createTextNode(text)
           h1.appendChild(t)
           h1.style.textAlign="center"
           h1.style.textDecoration="underline"
           h1.style.margin="80px"
           h1.style.color="white"

         }
        function images(data){
            let img1=document.querySelectorAll(".img1")
            let i=0
            let j=0
            let p=" "
            let button=""
            
            let img=`<img id="i1" src=" ">`
           
          
   
         

            img1.forEach(ele=>{
                 button=`<button onclick="addtocart(${data.order.call[j]})" id="button" >Add To Cart</button>`
                p=`<p id="menunames">${data.order.items[j].name}</p > <p id="menunames"> ${data.order.items[j].price}</p>`
             
                ele.innerHTML=img+p+button
                j++

            })
            
           
        
          
            img1.forEach(ele=>{
              ele.children[0].src=data.order.items[i].image
              i++
            })
            style()
            
     
        
        }
        function style(){
            let i1=document.querySelectorAll("#i1");
            i1.forEach(ele=>{
                ele.style.height="300px"
                ele.style.width="250px"
                ele.style.borderRadius="3px"
            })
            let menunames=document.querySelectorAll("#menunames");
            menunames.forEach(ele=>{
                ele.style.textAlign="center"
                ele.style.color="white"
            })
            let button=document.querySelectorAll("#button")
            button.forEach(ele=>{
                ele.style.display="block"
                ele.style.margin="auto"
                ele.style.color="white"
                ele.style.backgroundColor="transparent"
                ele.style.border="1px solid white"
  
            })
            
        }
       var addItemId=0;
    function addtocart(item){
        // console.log(item)
        x++;
    addItemId+=1;
    var selectedItem=document.createElement('div');
    selectedItem.classList.add('cartImg')
    selectedItem.setAttribute('id',addItemId)
    var img=document.createElement('img');
var title=document.createElement("div")
title.setAttribute("class","white")
title.innerHTML=item.children[1].innerHTML
var price=document.createElement("p")
price.setAttribute("class","white")
price.innerText=item.children[2].innerText
var delbtn=document.createElement("button")
delbtn.setAttribute("class","color")
delbtn.innerText="Delete";
delbtn.setAttribute("onclick",'del('+addItemId+')');
img.setAttribute("id","size")
    img.setAttribute('src',item.children[0].currentSrc);
    var cartItems=document.getElementById("title")
    selectedItem.append(img)
    selectedItem.append(delbtn)
    selectedItem.append(price)
    selectedItem.append(title)
    cartItems.append(selectedItem);
 }
    function del(ite){
  document.getElementById(ite).remove()
    
      
    }
    