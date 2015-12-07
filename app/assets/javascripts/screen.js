

var keg = {};
keg.draw = function(canvas, level, width) {
    //canvas.scale(2,2);

    middle = width/2;
    height = width - 30;
    hsize = 60*(width/120) - 30;

    //set style
    canvas.lineWidth=1;
    canvas.strokeStyle = "#e1e1e1";

    canvas.beginPath();
    canvas.moveTo(middle - hsize,10);
    canvas.lineTo(middle - hsize,height/3);
    canvas.lineTo(middle - hsize*1.1,height/3 + 5);
    canvas.lineTo(middle - hsize,height/3 + 10);
    canvas.lineTo(middle - hsize,2*height/3);
    canvas.lineTo(middle - hsize*1.1,2*height/3 + 5);
    canvas.lineTo(middle - hsize,2*height/3 + 10);
    canvas.lineTo(middle - hsize,height);

    //bottom
    canvas.quadraticCurveTo(middle,height+20,middle + hsize,height);

    canvas.lineTo(middle + hsize,130);
    canvas.lineTo(middle + hsize*1.1,125);
    canvas.lineTo(middle + hsize,120);
    canvas.lineTo(middle + hsize,70);
    canvas.lineTo(middle + hsize*1.1,65);
    canvas.lineTo(middle + hsize,60);
    canvas.lineTo(middle + hsize,10);

    //top
    canvas.quadraticCurveTo(middle,0,middle - hsize,10);
    canvas.closePath();
    canvas.fillStyle = "#f2f2f2";
    canvas.fill();
    canvas.stroke();

    //cap
    canvas.beginPath();
    canvas.strokeStyle = "#b4b4b4";
    canvas.fillStyle = "#b4b4b4";
    canvas.moveTo(middle - 30,17);
    canvas.quadraticCurveTo(middle,12,middle + 30,17);
    canvas.closePath();
    canvas.stroke();
    canvas.fill();

    //draw beer

    var bheight = 150;
    canvas.beginPath();
    canvas.fillStyle = "#FBB123";

    canvas.moveTo(middle - 50,170-bheight*level);
    canvas.lineTo(middle - 50,170);
    canvas.quadraticCurveTo(middle,185,middle + 50,170);
    canvas.lineTo(middle + 50,170-bheight*level);
    canvas.closePath();
    canvas.fill();

    //draw shades
    canvas.beginPath();
    canvas.moveTo(middle - 30,10);
    canvas.lineTo(middle - 30,187);

    //bottom
    canvas.quadraticCurveTo(middle + 10,195,middle + 60,180);

    canvas.lineTo(middle + 60,130);
    canvas.lineTo(middle + 65,125);
    canvas.lineTo(middle + 60,120);
    canvas.lineTo(middle + 60,70);
    canvas.lineTo(middle + 65,65);
    canvas.lineTo(middle + 60,60);
    canvas.lineTo(middle + 60,10);

    //top
    canvas.quadraticCurveTo(middle,0,middle - 30,6);
    canvas.closePath();
    canvas.fillStyle = "rgba(230, 230, 230, 0.2)";
    canvas.fill();

    canvas.beginPath();
    canvas.moveTo(middle + 30,10);
    canvas.lineTo(middle + 30,187);

    //bottom
    canvas.quadraticCurveTo(middle + 10,195,middle + 60,180);

    canvas.lineTo(middle + 60,130);
    canvas.lineTo(middle + 65,125);
    canvas.lineTo(middle + 60,120);
    canvas.lineTo(middle + 60,70);
    canvas.lineTo(middle + 65,65);
    canvas.lineTo(middle + 60,60);
    canvas.lineTo(middle + 60,10);

    //top
    canvas.quadraticCurveTo(middle + 10,0,middle + 40,6);
    canvas.closePath();
    canvas.fillStyle = "rgba(210, 210, 210, 0.2)";
    canvas.fill();
};


$(document).ready(function() {

    var b1canvas = document.getElementById("beer1").getContext("2d");
    var b2canvas = document.getElementById("beer2").getContext("2d");

    //resize canvas
    width = $(".beer").width();
    height = $(".beer").height();

    b1canvas.canvas.width = width;
    b1canvas.canvas.height = width;
    b2canvas.canvas.width = width;
    b2canvas.canvas.height = width;


    //drawKeg(b1canvas,.5);
    keg.draw(b1canvas,.5, width);
    keg.draw(b2canvas,1, width);


    //resize the canvas
    //draw keg1

});
