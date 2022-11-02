// select body ,left and right arrow button and slide

const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// set activeSlide =0

let activeSlide = 0;

// call setBgToBody function
setBgToBody();

// add ebvent listener for right arrow button

rightBtn.addEventListener('click',() =>{
    activeSlide++;
    if(activeSlide > slides.length - 1)
    {
        activeSlide = 0;
    }
    setBgToBody();
    setActiveSlide();
})

// add event listener for left arrow button
leftBtn.addEventListener('click',() =>{
    activeSlide--;
    if(activeSlide < 0)
    {
        activeSlide = slides.length - 1 ;
    }
    setBgToBody();
    setActiveSlide();
})

// create function to set image in body

function setBgToBody()
{
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// create function for active slide in slide box
function setActiveSlide()
{
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active');
}