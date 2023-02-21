function my_spaceship (path) {
    x_axis = 0;
    y_axis = 0;
    position = "up"
    
    for (x=0; x < path.length; x++){
      
      if (position == "up") {
        switch (path[x]) {
        case 'A':
          y_axis--;
          break;
          
        case 'L':
          position = "left";
          break;
          
        case 'R':
          position = "right";
          break;
        }
        
      }else if(position == "down"){
        switch (path[x]){
          case 'A':
            y_axis++;
            break;
          
          case 'R':
            position = "left";
            break;
            
          case 'L':
            position = "right";
            break;
            
        }
      }else if (position == "left"){
        switch (path[x]){
          case 'A':
            x_axis--;
            break;
            
          case 'R':
            position = "up";
            break;
            
          case 'L':
            position = "down";
            break;
        }
      }else if (position == "right"){
        switch (path[x]){
          case 'A':
            x_axis++;
            break;
          
          case 'R':
            position = "down";
            break;
          
          case 'L':
            position = "up"
            break;        
        }
      }
    }
    return ("{x: "+ String (x_axis)+", y: "+ String(y_axis)+ ", direction: " + "'"+position+"'}")
    }
    
