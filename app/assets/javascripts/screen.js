

var keg = {};
keg.drawStatus = function(canvas, level, name, width) {

    scale_f = (width/120);
    height = width - 30*scale_f;

    middle = width/2;

    hsize = 60*(width/120) - 30*scale_f;

    //ribbon
    canvas.beginPath();
    canvas.moveTo(40*scale_f, height + 9*scale_f);
    canvas.lineTo(middle+hsize, height + 9*scale_f);
    canvas.lineTo(middle+hsize - 4*scale_f, height + 18*scale_f);
    canvas.lineTo(middle+hsize, height + 27*scale_f);
    canvas.lineTo(40*scale_f, height + 27*scale_f);
    canvas.closePath();
    canvas.fillStyle = "#7B1C16";
    canvas.strokeStyle = "#5F140F";
    canvas.lineWidth = 3;

    canvas.fill();
    canvas.stroke();


    canvas.beginPath();
    canvas.arc(40*scale_f,height + 18*scale_f,10*scale_f,0,2*Math.PI);
    canvas.fillStyle = "#B54028";
    canvas.fill();

    canvas.beginPath();
    canvas.arc(40*scale_f,height + 18*scale_f,8*scale_f,0,2*Math.PI);
    canvas.strokeStyle= "#FFFFFF";
    canvas.lineWidth= 3;
    canvas.stroke();

    //%%
    canvas.font = 5*scale_f+"px Blenda";
    canvas.fillStyle = "#FFF47D";
    canvas.fillText(level*100 + "%",34*scale_f,height + 20*scale_f);

    //title
    canvas.font = 7*scale_f+"px Blenda";
    canvas.fillStyle = "#FFF47D";
    canvas.fillText(name,52*scale_f,height + 20*scale_f);

};

keg.draw = function(canvas, level, name, width) {
    //canvas.scale(2,2);

    scale_f = (width/120);

    middle = width/2;
    height = width - 30*scale_f;


    hsize = 60*(width/120) - 30*scale_f;

    //set style
    canvas.lineWidth=1;
    canvas.strokeStyle = "#e1e1e1";

    canvas.beginPath();
    canvas.moveTo(middle - hsize,10);
    canvas.lineTo(middle - hsize,height/3);
    canvas.lineTo(middle - hsize*1.1,height/3 + 2*scale_f);
    canvas.lineTo(middle - hsize,height/3 + 4*scale_f);

    canvas.lineTo(middle - hsize,2*height/3);
    canvas.lineTo(middle - hsize*1.1,2*height/3 + 2*scale_f);
    canvas.lineTo(middle - hsize,2*height/3 + 4*scale_f);

    canvas.lineTo(middle - hsize,height);

    //bottom
    canvas.quadraticCurveTo(middle,height+5*scale_f,middle + hsize,height);

    canvas.lineTo(middle + hsize,2*height/3 + 4*scale_f);
    canvas.lineTo(middle + hsize*1.1,2*height/3 + 2*scale_f);
    canvas.lineTo(middle + hsize,2*height/3);


    canvas.lineTo(middle + hsize,height/3 + 4*scale_f);
    canvas.lineTo(middle + hsize*1.1,height/3 + 2*scale_f);
    canvas.lineTo(middle + hsize,height/3);
    canvas.lineTo(middle + hsize,10);

    //top
    canvas.quadraticCurveTo(middle,0,middle - hsize,10);
    canvas.closePath();
    canvas.fillStyle = "#a2a2a2";
    canvas.fill();
    canvas.stroke();

    //cap
    canvas.beginPath();
    canvas.strokeStyle = "#b4b4b4";
    canvas.fillStyle = "#b4b4b4";
    canvas.moveTo(middle - hsize/2,17);
    canvas.quadraticCurveTo(middle,12,middle + hsize/2,17);
    canvas.closePath();
    canvas.stroke();
    canvas.fill();

    //draw beer

    var bheight = height/1.2;
    canvas.beginPath();
    canvas.fillStyle = "#FBB123";

    canvas.moveTo(middle - hsize/1.1,height-bheight*level);

    canvas.lineTo(middle - hsize/1.1,height - 4*scale_f);
    canvas.quadraticCurveTo(middle,height,middle + hsize/1.1,height - 4*scale_f);
    canvas.lineTo(middle + hsize/1.1,height-bheight*level);
    canvas.closePath();
    canvas.fill();


    //draw shades
    canvas.beginPath();
    canvas.moveTo(middle - hsize/2,20);
    canvas.lineTo(middle - hsize/2,height+2*scale_f);

    //bottom
    canvas.quadraticCurveTo(middle + 10*scale_f,height + 5*scale_f,middle + hsize,height);

    canvas.lineTo(middle + hsize,2*height/3 + 4*scale_f);
    canvas.lineTo(middle + hsize*1.1,2*height/3 + 2*scale_f);
    canvas.lineTo(middle + hsize,2*height/3);


    canvas.lineTo(middle + hsize,height/3 + 4*scale_f);
    canvas.lineTo(middle + hsize*1.1,height/3 + 2*scale_f);
    canvas.lineTo(middle + hsize,height/3);
    canvas.lineTo(middle + hsize,10);

    //top
    canvas.quadraticCurveTo(middle,0,middle - hsize/2,10-0.5*scale_f);
    canvas.closePath();
    canvas.fillStyle = "rgba(230, 230, 230, 0.2)"; //0.2
    canvas.fill();



    canvas.beginPath();
    canvas.moveTo(middle + hsize/2,20);
    canvas.lineTo(middle + hsize/2,height+2*scale_f);

    //bottom
    canvas.quadraticCurveTo(middle+hsize/2+5*scale_f,height + 1.5*scale_f,middle + hsize,height);

    canvas.lineTo(middle + hsize,2*height/3 + 4*scale_f);
    canvas.lineTo(middle + hsize*1.1,2*height/3 + 2*scale_f);
    canvas.lineTo(middle + hsize,2*height/3);


    canvas.lineTo(middle + hsize,height/3 + 4*scale_f);
    canvas.lineTo(middle + hsize*1.1,height/3 + 2*scale_f);
    canvas.lineTo(middle + hsize,height/3);
    canvas.lineTo(middle + hsize,10);

    //top
    canvas.quadraticCurveTo(middle+hsize/2+5*scale_f, 10-0.5*scale_f, middle + hsize/2, 10-1*scale_f);
    canvas.closePath();
    canvas.fillStyle = "rgba(210, 210, 210, 0.2)";
    canvas.fill();

    this.drawStatus(canvas,level, name, width);
};



function updateGraph() {
    var data = {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(44,104,116,1)",
                strokeColor: "rgba(206,206,190,0.5)",
                highlightFill: "rgba(138,234,245,1)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    ctx = document.getElementById("graph").getContext("2d");
    var myBarChart = new Chart(ctx).Bar(data, {
        barShowStroke: true,
        scaleGridLineColor : "rgba(255,255,255,1)",
        scaleGridLineWidth : 2,
        scaleLineColor: "rgba(255,234,128,1)",
        scaleLineWidth: 6,
        scaleFontColor: "#c95739"
    });
}

$(document).ready(function() {

    var b1canvas = document.getElementById("beer1").getContext("2d");
    var b2canvas = document.getElementById("beer2").getContext("2d");
    var b3canvas = document.getElementById("beer3").getContext("2d");
    var graph_canvas = document.getElementById("graph").getContext("2d");

    //resize canvas
    width = $(".beer").width();
    height = $(".beer").height();

    b1canvas.canvas.width = width;
    b1canvas.canvas.height = width;

    b2canvas.canvas.width = width;
    b2canvas.canvas.height = width;

    b3canvas.canvas.width = width;
    b3canvas.canvas.height = width;


    g_width = $(".graph").width();
    graph_canvas.canvas.width = g_width;


    //drawKeg(b1canvas,.5);
    keg.draw(b1canvas,.5, "Bud", width);

    keg.draw(b2canvas,1, "Baltika 9", width);

    keg.draw(b3canvas,.3, "Heller", width);

    updateGraph();

    //resize the canvas
    //draw keg1

});
