
fetch('../json/project.json')
.then(Response => Response.json())

.then(sdata =>{
   review(sdata)


 


})
function review(data){
   
   let heading=document.querySelector(".heading")
let text=`<p id="t1">${data.FineDine.name}</p>`
let des=`<p id="t2">${data.FineDine.description}</p ><p id="t2">${data.FineDine.des1}</p>`
let br=`<br>`
heading.innerHTML=text+br+des
style()

}
function style(){
  let t1= document.getElementById("t1");
  let h1=document.getElementById("h1")
  h1.style.color="white"
  h1.style.margin="30px"
  t1.style.fontSize="40px"
  t1.style.fontWeight="900"
  t1.style.color="white"
  let t2= document.querySelectorAll("#t2")
  let color=document.querySelectorAll(".color")
  color.forEach(ele=>{
   ele.style.color="white"
  })
  t2.forEach(ele=>{
   ele.style.color="white"
   ele.style.fontSize="20px"
   


  })
  

}



  
class Table{
   constructor(people,time,firstname,lastname,phone,type){
       this.people=people;
       this.time=time;
       this.firstname=firstname;
       this.lastname=lastname;
       this.type=type;
       this.phone=phone
       this.name=this.firstname+this.lastname;
       console.log(this.name)



   
   }
}
var x=0;
class UI{
   

   addBookToList(book){
       const list=document.getElementById("book-list")
       const row=document.createElement("tr")
       row.setAttribute("id",x)
       row.innerHTML=`<td class="dis">${book.people}</td>
       
       <td class="dis">${book.type}</td>
       <td class="dis">${book.time}</td>
       <td class="dis">${book.name}</td>
       
       <td class="dis">${book.phone}</td>
       <td class="dis"><button onclick="del(${x})">CancelBooking</button></td>`

       list.appendChild(row);
       x++ ;
      
   

   }

   clearfields(){
   document.getElementById('people').value=''
   document.getElementById('time').value=''
   document.getElementById('firstname').value=''
   document.getElementById('lastname').value=''
   document.getElementById('phone').value=''
   document.getElementById('type').value=''
      
   }
   showalert(message,className){
       let div=document.createElement("div");
       div.className=`alert ${className}`
    
       div.appendChild(document.createTextNode(message))
       let container=document.querySelector(".container")
       let form=document.querySelector("#book-form")
       container.insertBefore(div,form);
       setTimeout(() => {
           document.querySelector(".alert").remove()
           
       }, 3000);
      
   }
}
let ui=new UI()
function del(y){
   document.getElementById(y).remove()
   ui.showalert("Booking is cancelled","cancel")


}

// document.getElementById("submit").addEventListener('click',function(e){
//    const people=document.getElementById('people').value
//    const time=document.getElementById('time').value
//    const firstname=document.getElementById('firstname').value
//    const lastname=document.getElementById('lastname').value
//    const phone=document.getElementById('phone').value
//    const type=document.getElementById('type').value

 
   
//    let table=new Table(people,time,firstname,lastname,phone,type)
 
 
//    if(people==""||time==""||firstname==""||lastname==""||phone==""||type==""){
//        ui.showalert("Please fill in all fields","error")
//    }
//    else{
//       ui.addBookToList(table)
//       ui.clearfields()
      
     
//    }
//    e.preventDefault()
 

// })



