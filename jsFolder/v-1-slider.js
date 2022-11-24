const images  = [
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
];
let imageIndex = 0;
const imgElement = document.getElementById("slider-img");
setInterval(() => {
    if(imageIndex >= images.length){
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex];
    imgElement.setAttribute('src',imgUrl)
    // console.log(imgUrl)
    imageIndex++;
},1000)