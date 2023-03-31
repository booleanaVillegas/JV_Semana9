const login = document.getElementById('login')
const signIn = document.createElement('section')
signIn.id = 'signin'
signIn.className = 'section'
signIn.innerHTML = "<h1>this is sign in</h1><button>go to logged</button>"
const logged = document.createElement('section')
logged.id = 'logged'
logged.className= 'section'
logged.innerHTML = "<h1>this is logged</h1><button>go to login</button>"
setButtons()

function setButtons(){
    const buttonLogin = document.querySelector('#login button')
    const buttonSignin = document.querySelector('#signin button')
    const buttonLogged = document.querySelector('#logged button')
    
    buttonLogin?.addEventListener('click', () => goToSignIn())
    buttonSignin?.addEventListener('click', () => goTologged())
    buttonLogged?.addEventListener('click',() => goTologin())
}


function goToSignIn(){
    login.remove()
    document.body.append(signIn)
    setButtons()
}

function goTologged(){
    signIn.remove()
    document.body.append(logged)
    setButtons()
}

function goTologin(){
    logged.remove()
    document.body.append(login)
    setButtons()
}