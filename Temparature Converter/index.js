
let form = document.querySelector("#form");
let form2 = document.querySelector("#form-2");
let input = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let p = document.querySelector("#demo");
let p2 = document.querySelector("#demo2");

form.addEventListener("submit", celcius);

function celcius(x){
    x.preventDefault();
    let value1 = parseFloat(input.value);
    if (typeof(value1) === "number"){
        let result1 = (value1-32) * 5/9;
        p.innerHTML= "Result:"+ " "+ result1.toFixed(2) + " " + " " + " " + "&#8451;";
    }
    else{
        p.innerHTML= "You entered Inncorect Value" 
    }
  

};

form2.addEventListener("submit", farenhite);

function farenhite(x){
    x.preventDefault();
    let value2 = parseFloat(input2.value)
  let result2 = (value2 * 9/5) + 32 ;
  p2.innerHTML= "Result:"+ " "+ result2.toFixed(2) + " " + " " + " " + "&#8457;";

}





  

