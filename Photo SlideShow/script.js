
let images = ["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg",
             "./images/6.jpg","./images/7.jpg","./images/8.jpg","./images/9.jpg","./images/10.jpg",];
let image = document.querySelector("#img");
let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");

   let count = 0;
const nextImage=()=>{
   count++;
   if(count>=images.length){
    count = 0;
    image.src=images[count];
   }
   else{
    image.src=images[count];
   }
};

const prevImage=()=>{
    count--;
    if(count<=0){
        count = images.length -1;
        image.src=images[count] ; 
    }
    else{
        image.src=images[count] ;  
    }
   
};
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);