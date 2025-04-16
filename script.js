let prevBtn = document.querySelector('#prev'),
    nextBtn = document.querySelector('#next'),
    carsoul = document.querySelector('.carousel'),
    list = document.querySelector('.carousel .list'),
    thumbnail = document.querySelector('.carousel .thumbnail')

nextBtn.onclick = function(){
     showSlider('next')
}

prevBtn.onclick = function(){
     showSlider('prev')
}

let timeRunning = 3000;
let timeAutoRun = 70000;
let runTimeOut;
let runAuto = setTimeout(() => {
     nextBtn.click()
}, timeAutoRun);

function showSlider(type){
     let itemSlider = document.querySelectorAll('.carousel .list .item')
     let thumbnailSlider = document.querySelectorAll('.carousel .thumbnail .item')
     if(type === 'next'){
          list.appendChild(itemSlider[0])
          thumbnail.appendChild(thumbnailSlider[0])
          carsoul.classList.add('next')
          
     }
     else{
          let positionalItem = itemSlider.length -1;
          list.prepend(itemSlider[positionalItem])
          thumbnail.prepend(thumbnailSlider[positionalItem])
          carsoul.classList.add('prev') 

     }
     clearTimeout(runTimeOut);
runTimeOut = setTimeout(() => {
     carsoul.classList.remove('next')
     carsoul.classList.remove('prev');
}, timeRunning);

clearTimeout(runAuto);
runAuto = setTimeout(() => {
     nextBtn.click()
}, timeAutoRun);
}

// search-bar

const input_box = document.querySelector('.input_box')
const search = document.querySelector('.search')
const close_icon = document.querySelector('.close_icon')

console.log(input_box, search, close_icon)

search.addEventListener('click', () =>  input_box.classList.add('open'))
close_icon.addEventListener('click', () =>  input_box.classList.remove('open'))



// SWIPER

new Swiper('.card-wrapper', {

     loop: true,
     slidesPerView: 3,
     spaceBetween: 30,


     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       dynamicBullets: true,
     },
   
     breakpoints: {
          0: {
            slidesPerView: 1

          },
          768: {
            slidesPerView: 2

          },
          1024: {
            slidesPerView: 3
          },
        },

   });