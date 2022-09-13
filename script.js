let sliderImgElem= document.querySelector('img')
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')

let picSrc =[
    'pics/pic1.jpg',
    'pics/pic2.jpg',
    'pics/pic3.jpg',
    'pics/pic4.jpg',
    'pics/pic5.jpg',
    'pics/pic6.jpg',
    'pics/pic7.jpg',
    'pics/pic8.jpg',
    'pics/pic9.jpg',

]


let picIndex = 0


function prevPicHandler(){
    picIndex --

    if(picIndex <0){
        picIndex = picSrc.length -1
    }

    sliderImgElem.setAttribute ('src', picSrc[picIndex])
    console.log(picSrc[picIndex])
}


function nextPicHandler(){
    picIndex ++

    if(picIndex > picSrc.length -1){
        picIndex = 0

    }


    sliderImgElem.setAttribute ('src', picSrc[picIndex])
    console.log(picSrc[picIndex])

}
setInterval(nextPicHandler, 3000)


