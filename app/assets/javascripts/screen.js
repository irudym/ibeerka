
function drawKeg(canvas, scale) {
    canvas.moveTo(10,10);
    canvas.lineTo(10,60);
    canvas.lineTo(5,65);
    canvas.lineTo(10,70);
    canvas.lineTo(10,120);
    canvas.lineTo(5,125);
    canvas.lineTo(10,130);
    canvas.lineTo(10,180);
    canvas.lineTo(15,185);
    canvas.lineTo(125,185);
    canvas.lineTo(130,180);
    canvas.lineTo(130,130);
    canvas.lineTo(135,125);
    canvas.lineTo(130,120);
    canvas.lineTo(130,70);
    canvas.lineTo(135,65);
    canvas.lineTo(130,60);
    canvas.lineTo(130,10);
    canvas.stroke();
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
