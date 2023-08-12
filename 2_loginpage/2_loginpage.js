const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

// login button dabane par hi login form khule 

const btnpopup=document.querySelector('.btnLogin-popup')

//login page par jo " X" bna hai usko click krte hi login page hat jaye

const iconclose=document.querySelector('.icon-close');


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
})