const previous = document.getElementById('previous');
const next = document.getElementById('next');
const gradient = document.querySelector(".gradient");
const p1 = document.getElementById('pOne');
const p2 = document.getElementById('pTwo');
const DEFAULT1 = "#780206";
const DEFAULT2 = "#061161";
let counter = 0;
gradient.style.backgroundImage =  "linear-gradient(to right,"+DEFAULT1+","+DEFAULT2+")";
p1.innerText = DEFAULT1;
p2.innerText = DEFAULT2;
const gradients = [
    DEFAULT1,
     "#BB377D",
      "#3a7bd5",
     "#ff9472",
     "#7a2828",
     "#182848",
    "#480048",
     "#49a09d",
    "#414345",
    "#4389A2",
    "#8E54E9"
]
const gradients2 = [
    DEFAULT2,
    "#FBD3E9",
    "#00d2ff",
    "#f2709c", 
    "#a73737", 
    "#4b6cb7", 
    "#C04848", 
    "#5f2c82", 
    "#232526", 
    "#5C258D", 
    "#4776E6", 
]
next.onclick =()=> {
    if (counter >= gradients.length-1){
        counter = 0;
        setGradients(gradients[counter],gradients2[counter]);
    }
    else{
        counter++;
        setGradients(gradients[counter],gradients2[counter]);
    }
    p1.innerText = gradients[counter];
    p2.innerText = gradients[counter];
}
previous.onclick =()=> {
    if(counter <= 0){
        counter = gradients.length - 1;
        setGradients(gradients[counter],gradients2[counter]);
    }
    else{
    counter --;
    setGradients(gradients[counter],gradients2[counter]);
    }
    p1.innerText = gradients[counter];
    p2.innerText = gradients[counter];
 
}
const setGradients = (col1, col2)=>{
    gradient.style.backgroundImage = "linear-gradient(to right,"+col1+","+col2+")";
 
}





// 
// 
// const gradients = [
    // "#FBD3E9", "#BB377D",
    // "#00d2ff", "#3a7bd5",
    // "#f2709c", "#ff9472",
    // "#a73737", "#7a2828",
    // "#4b6cb7", "#182848",
    // "#C04848", "#480048",
    // "#5f2c82", "#49a09d",
    // "#232526", "#414345",
    // "#5C258D", "#4389A2",
    // "#4776E6", "#8E54E9"
    // 
// ]