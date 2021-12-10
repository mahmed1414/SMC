var win;
var game1 = Number(prompt("Enter your number"));
game(game1);
function game (slotmachine){
    var array = ["cherries", "oranges", "plums", "bells", "melons", "bars"];
    var color1 = array[Math.floor(Math.random() * array.length)];
    
    var color2 = array[Math.floor(Math.random() * array.length)];
    
    var color3 = array[Math.floor(Math.random() * array.length)];
    
    alert (color1 + " " + color2 + " " + color3);
    if (color1 === color2 && color2 === color3){
        win = slotmachine * 3;
        alert("The player wins triple their bet" + win);
    } 
    else if (color1 === color2 || color2 === color3 || color3 === color1){
        win = slotmachine * 2;
        alert("The player wins double their bet" + win);
    } else {
        alert("The player wins nothing"); 
    }
       
    var game2 = Number(prompt("please insert money or input something else to exit"));
    if (game2 > 0){
           game(game2);
       } else {
           
           alert("Have a good day");
       }
       }
       
