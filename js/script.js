const btn = document.querySelector(".btn");
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
btn.addEventListener('click',()=>{
    popup.classList.add('open-popup');
})
closeBtn.addEventListener('click',()=>{
    popup.classList.remove('open-popup');
})