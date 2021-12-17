var width=screen.width;
new_width = screen.width-70;
new_heigth = screen.heigth-300;

var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    if(width < 992)
    {
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_heigth;
        document.body.style.overflow="hidden";
    }



    canvas.addEventListener("touchStart", my_touchStart);
    
    function my_touchStart(e)
    {
        console.log("my_touchStart");

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
        
    }

    

    canvas.addEventListener("touchMove", my_touchmove);
    function my_touchmove(e)
    {

        
        console.log("my_touchMove");
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        // old same old as the paint web app
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log ("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log ("Current position of x and y coordinates = ");
        console.log("x = "+ current_position_of_touch_x + "y ="+current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        
        last_position_of_x = current_position_of_touch_x;
        last_position_of_y = current_position_of_touch_y;
        // end of old same old as the paint web app
    }

