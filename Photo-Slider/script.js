let card = document.querySelector(".card");
let bigImage= document.querySelector(".big-image");
let floatBtn = document.querySelector(".float-btn");

const call=()=>{  
   bigImage.classList.add("big-image2");
   floatBtn.classList.add("float-btn2");
};
bigImage.addEventListener("click", call);
const remove =()=>{
    bigImage.classList.remove("big-image2");
   floatBtn.classList.remove("float-btn2");
};
floatBtn.addEventListener("click", remove);

let h2 = document.createElement("h2");
let text = document.createTextNode("Name ");
h2.appendChild(text);
card.appendChild(h2);
h2.classList.add("heading");

// ------------------------------------------------------------------------------///
let imgPrev = document.querySelector(".img-btn-prev");
let imgNext = document.querySelector(".img-btn-next");
let img1 = document.querySelector("#img-1");
let img2 = document.querySelector("#img-2");
let img3 = document.querySelector("#img-3");
let img4 = document.querySelector("#img-4");
let img5= document.querySelector("#img-5");

function products(path, name, price, rate){
    this.name = name;
    this.price = price;
    this.rate = rate;
    this.path = path;
    this.display = function(){
     bigImage.src = path;
     h2.innerHTML = name;
    };
    this.display1 = function(){
        img1.src = path;
        
       };
       this.display2 = function(){
        img2.src = path;
        
       };
       this.display3 = function(){
        img3.src = path;
        
       }
       this.display4 = function(){
        img4.src = path;
        
       }
       this.display5 = function(){
        img5.src = path;
        
       }
 };
 let item1 = new products("./images/product-1.jpg", "Power Bank", "900 Tk", "4.3/5");
 let item2 = new products("./images/product-2.jpg", "I-phone 13 Pro", "1,26,399 Tk", "4.5/5");
 let item3 = new products("./images/product-3.jpg", "Mens T-shirt", "450 Tk", "3.7/5");
 let item4 = new products("./images/product-5.jpg", "Lenevo Neck-Band", "650 Tk", "4.4/5");
 let item5 = new products("./images/product-6.jpg", "Rolex-GT-65 Watch", "3,45,000 Tk", "4.9/5");
 let item6 = new products("./images/product-7.jpg", "BlueTooth Headset", "1,230 Tk", "4.1/5");
 let item7 = new products("./images/product-8.jpg", "Mens-Jins Pant", "865 Tk", "3.7/5");
 let item8 = new products("./images/product-9.jpg", "Google Glass", "89,799 Tk", "4.8/5");
 let item9 = new products("./images/product-10.jpg", "Niky Sports Shoe", "2,800 Tk", "3.7/5");
 let item10 = new products("./images/product-11.jpg", "Windows Surface Pro", "1,28,970 Tk", "4.6/5");
 let item11 = new products("./images/product-12.jpg", "Sony T401 HomeTheater", "54,900 Tk", "3.7/5");
 let item12 = new products("./images/product-14.jpg", "Asus ROG GT-909 Router", "22,450 Tk", "4.8/5");
 let item13 = new products("./images/product-15.jpg", "Omega Mens Watch C44", "1800 Tk", "4.1/5");
 
 let items = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13];
  items[0].display();
  items[1].display1();
  items[2].display2();
  items[3].display3();
  items[4].display4();
  items[5].display5();

  let count =0;
  const imgNextBtn =()=>{
    count++;
    if(count>=items.length-5){
        count = 0;
        items[count+1].display1();
        items[count+2].display2();
        items[count+3].display3();
        items[count+4].display4();
        items[count+5].display5(); 
    }
    else{
        items[count+1].display1();
        items[count+2].display2();
        items[count+3].display3();
        items[count+4].display4();
        items[count+5].display5(); 
    }  
  };
  imgNext.addEventListener("click",imgNextBtn);

  const imgPrevBtn=()=>{
    count--;
    if(count<=4){
        count = items.length-1;
        items[count-1].display1();
        items[count-2].display2();
        items[count-3].display3();
        items[count-4].display4();
        items[count-5].display5(); 
    }
    else{
        items[count-1].display1();
        items[count-2].display2();
        items[count-3].display3();
        items[count-4].display4();
        items[count-5].display5();  
    }
  };
  imgPrev.addEventListener("click", imgPrevBtn);




  

  const img1Call =()=>{
    bigImage.src = img1.src
    
   };
   img1.addEventListener("click",img1Call);

   const img2Call =()=>{
    bigImage.src = img2.src
   };
   img2.addEventListener("click",img2Call);

   const img3Call =()=>{
    bigImage.src = img3.src
   };
   img3.addEventListener("click",img3Call);

   const img4Call =()=>{
    bigImage.src = img4.src
   };
   img4.addEventListener("click",img4Call);

   const img5Call =()=>{
    bigImage.src = img5.src
   };
   img5.addEventListener("click",img5Call);


//-----    ------------------------------------------------------------//

let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");

const nextCall=()=>{
   count ++;
   if(count>=items.length){
    count=0;
    items[count].display();
   }
   else{
    items[count].display();
   }
};
nextBtn.addEventListener("click", nextCall);

const prevCall=()=>{
 count--;
 if (count<=0){
    count = items.length-1;
    items[count].display();
 }
 else{
    items[count].display();
 }
};
prevBtn.addEventListener("click", nextCall);
  







