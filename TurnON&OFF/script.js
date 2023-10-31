var bulb= document.querySelector("#bulb");
     var btn =document.querySelector("button")

     var flag= 0;


  btn.addEventListener("click",function(){

    if(flag==0){
        bulb.style.backgroundColor="yellow" 
        console.log("suraj")
        flag=1
    }
    else{
        bulb.style.backgroundColor="white"
        console.log("RAM")
        flag=0
    }
})