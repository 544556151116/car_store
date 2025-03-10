const sectionContacts = document.querySelector('.cards-contant');
const homeSection = document.querySelector('.main');
const homeBtn = document.querySelector('#homeBtn');
const contactBtn = document.querySelector('#contactBtn');
const productsbtn= document.querySelector('#productsBtn')
const productsection= document.querySelector('#sayed')

contactBtn.addEventListener('click',()=>{
    sectionContacts.scrollIntoView(); 
})

homeBtn.addEventListener('click', () => {
    homeSection.scrollIntoView();
 })
productsbtn.addEventListener('click', () => {
    productsection.scrollIntoView();
 })