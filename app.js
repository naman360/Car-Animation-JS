const car=document.getElementsByTagName('img')[0];
const road=document.getElementById('path');
const carsArr=["./assets/Img_06.png" , "./assets/Img_05.png"];
let flag=false;
let temp=true;
document.body.addEventListener('keypress', (e) =>{
    // For toggling the headlights of car
    if(e.keyCode ==13 ){
      if(flag){
        flag=false;
        car.src=carsArr[0];
      }else{
          flag=true;
          car.src=carsArr[1];
      }
    }

    // For stopping the car  
    

    if(e.keyCode ==32){
       
        if (road.classList.contains('road')) {
            road.classList.remove('road');
            road.classList.add('stopPath');
            
          } else {
            road.classList.add('road');
            road.classList.remove('stopPath');
           
          }
            
            
          
        
      }

    
});