
    login = {
        avatar: "../Images/avatar.png",
        login: "Login Here",
        Username: "Username",
        password:"Password",
        here: "login",
        forgot: "Forgot Password?",
        Signup: "Sign-up",
    }

    let hello = document.getElementById("box")
    let p= `<input  type="text" placeholder="Enter your name" >`
    let x= `    
    <img class="avatar" src= ${login.avatar}>
    <h1 class="loginhere">${login.login} </h1>
    <p> ${login.Username} </p>
    `
    let y = `
    <p>${login.password}</p>
    `
    let z =`<input  type="text" placeholder="Enter your password" >`

    let a = ` <button id="Login">Login</button>  `

    let q = `<a href="#" class="yo">${login.forgot}</a> <br> 
    <a href="password.html" class="yo">${login.Signup}</a>
    `

   
    hello.innerHTML= x + p + y + z + a + q



