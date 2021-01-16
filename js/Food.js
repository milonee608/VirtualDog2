class Food{
      constructor(){
           this.foodStock,this.lastFed;
           this.image=loadImage("images/Milk.png");
      }
      display(){

        fill(255,255,254);
        textSize(15);
        if(lastFed>12){
          text("Last Fed : " + lastFed%12 + "PM",350,30 );
        }  else if(lastFed==0){
          text("Last Fed : 12AM",350,30);
        }  else 
        {
          text("Last Fed : " + lastFed + "AM",350,30);
        }

        var x=80,y=100;
         
        imageMode(CENTER);
        image(this.image,720,220,70,70);
    
        if(this.foodStock != 0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        } 
      }
      getFoodStock(){
           var getFood = database.ref('Food');
           getFood.on("value",function(data){
                    foodStock=data.val();
           })
      }
      updateFoodStock(food){
            database.ref('/').update({
                foodStock: food
            })
      }
      deductFood(){
           
      }
    }
