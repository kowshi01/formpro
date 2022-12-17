const Myform=document.querySelector('#form');
const username=document.querySelector('#name1');
const email=document.querySelector('#email');
Myform.addEventListener('submit' , onsubmit);
function onsubmit(e){
  e.preventDefault();
  localStorage.setItem('username',(username.value))
  localStorage.setItem('email',(email.value))
  localStorage.getItem(username)
  localStorage.getItem(email)
}