fetch("../json/project.json")
.then(Response=>Response.json())
.then(sdata=>{
    sec(sdata)

})
function sec(data){
    let h3=document.createElement("h3")
    h3.innerText=`${data.AboutUs.heading}`
    h3.setAttribute("id","h3")
    let section1=document.querySelector(".section1")
    section1.appendChild(h3)
    let p=document.createElement("p")
    p.innerText=`${data.AboutUs.title1}`
    p.setAttribute("class","text")
    section1.appendChild(p)
    let p1=document.createElement('p')
    p1.innerText=`${data.AboutUs.title2}`
    p1.setAttribute("class","text")
    section1.appendChild(p1)
    let p2=document.createElement("p")
    p2.innerText=`${data.AboutUs.Description}`
    p2.setAttribute("id","p2")
    section1.appendChild(p2)
    let img=document.createElement("img")
    img.setAttribute("src",data.AboutUs.image)
    img.setAttribute("id","image")
    let section2=document.querySelector(".section2")
    section2.appendChild(img)
    style()

}
function style(){
    let image=document.getElementById("image")
    image.style.width="680px"
    image.style.height="810px"
    let h3=document.getElementById("h3")
    h3.style.textAlign="center"
    let text=document.querySelectorAll(".text")
    text.forEach(ele=>{
        ele.style.textAlign="center"
        ele.style.fontSize="72px"
        ele.style.color="white"
        ele.style.fontFamily='Alex Brush'
        ele.style.textDecoration="underline"
    })
    h3.style.color="white"
    h3.style.fontSize="30px"
    h3.style.fontFamily='Comfortaa'
    p2.style.color="white"
    p2.style.fontFamily='Comfortaa'
    
    p2.style.fontSize="22px"



}


