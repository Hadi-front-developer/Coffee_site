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
          console.log(thumbnailSlider)
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
     console.log('hadi')
}, timeRunning);

clearTimeout(runAuto);
runAuto = setTimeout(() => {
     nextBtn.click()
}, timeAutoRun);
}

