
function drawKeg(canvas, level) {


    canvas.scale(2,2);

    //set style
    canvas.lineWidth=4;
    canvas.strokeStyle = "#DDDDDD";
    canvas.beginPath();
    canvas.moveTo(10,10);
    canvas.lineTo(10,60);
    canvas.lineTo(5,65);
    canvas.lineTo(10,70);
    canvas.lineTo(10,120);
    canvas.lineTo(5,125);
    canvas.lineTo(10,130);
    canvas.lineTo(10,180);

    //bottom
    canvas.quadraticCurveTo(70,200,130,180);

    canvas.lineTo(130,130);
    canvas.lineTo(135,125);
    canvas.lineTo(130,120);
    canvas.lineTo(130,70);
    canvas.lineTo(135,65);
    canvas.lineTo(130,60);
    canvas.lineTo(130,10);

    //top
    canvas.quadraticCurveTo(70,0,10,10);
    canvas.closePath();
    canvas.fillStyle = "#DDDDDD";
    canvas.fill();
    canvas.stroke();

    //cap
    canvas.beginPath();
    canvas.strokeStyle = "#445046";
    canvas.moveTo(50,15);
    canvas.quadraticCurveTo(70,12,90,15);
    canvas.stroke();

    //draw beer
    canvas.beginPath();
    canvas.fillStyle = "#FBB123";
    canvas.moveTo(20,50);
    canvas.lineTo(20,170);
    canvas.quadraticCurveTo(70,190,120,170);
    canvas.lineTo(120,50);
    canvas.closePath();
    canvas.fill();
}


$(document).ready(function() {
   console.log("Page loaded");

    var b1canvas = document.getElementById("beer1").getContext("2d");
    var b2canvas = document.getElementById("beer2").getContext("2d");

    drawKeg(b1canvas,1);
    drawKeg(b2canvas,1);


    //resize the canvas
    //draw keg1

});
