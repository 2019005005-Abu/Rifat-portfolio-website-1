//About section Javascript starts from here
var tablinks=document.getElementsByClassName('tab-links');
var tabContents=document.getElementsByClassName('tab-contents')
function openTab(tabname){
 for(tablink of tablinks){
  tablink.classList.remove('active-link')
 }
 for(tabcontent of tabContents){
    tabcontent.classList.remove('active-tab')
 }
 event.currentTarget.classList.add('active-link');
 document.getElementById(tabname).classList.add('active-tab');
}
//About section Javascript ends  from here

// sidebar (responsive) Javascript code starts from  here
var sidemenu=document.getElementById('sidemenu')
function openmenu(){
  sidemenu.style.right="0";

}
function closemenu(){
   sidemenu.style.right="-200px";
   
 }
//sidebar (responsive) Javascript code ends from here 


const scriptURL = '<https://script.google.com/macros/s/AKfycby3DtaAfasdGJ7wswCwUDSuP7ri94-MLQ8EMpH47InUw3Ms96pQulvXJtaBk4_z-POyMw/exec>'
const form = document.forms['submit-to-google-sheet'];
const msg=document.getElementById('msg');


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
    msg.innerHTML="Message sent successfully";
    setTimeout(()=>{
     msg.innerHTML=''
    },5000)
     form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})