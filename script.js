
let ingredients=document.getElementById("ingredients");
ingredients.addEventListener("click",function(){
    
    if(document.getElementById("ingredients").innerText=="Show Ingredients"){
        document.getElementById("ingredients").innerText="Hide Ingredients";
        document.getElementsByClassName("ingredients")[0].style.display="block";
    }else if(document.getElementById("ingredients").innerText=="Hide Ingredients"){
        document.getElementById("ingredients").innerText="Show Ingredients";
        document.getElementsByClassName("ingredients")[0].style.display="none";
        
    }
    
})
let cooking=document.getElementById("startCooking");


let cooking_list=document.getElementsByClassName("instructions-list")[0].querySelectorAll("li");
for(let i=0;i<cooking_list.length;i++){
    cooking_list[i].style.display="none";
   }
   
cooking.addEventListener("click",function(){
    document.getElementById("next_btn").style.display="inline";
    document.getElementsByClassName("instructions")[0].querySelector("h2").style.display="block";
     document.getElementsByClassName("instructions")[0].querySelector("h2").style.fontSize="30px";

    if(document.getElementById("startCooking").innerText=="Start Cooking"){
    let next_btn=document.getElementById("next_btn");
    let current_index=0;
    cooking_list[0].style.display="block";
   next_btn.addEventListener("click",function(){
        
    cooking_list[current_index].style.display="none";
    current_index=current_index+1;
    if(current_index>=cooking_list.length){
            current_index=0;
        
            }
            cooking_list[current_index].style.display="block";
        
    })
    document.getElementById("startCooking").style.display="none";
    }
    
})
