//Buddhabrot
//(c) 2011 by Tomasz Lubinski
//www.algorytm.org

/* Render area coordinates */
var minX = -1.5;
var maxX =  1.5;
var minY = -2.0;
var maxY =  1.0;

/* Render area size */
var width = 0;
var height = 0;
var ratioX;
var ratioY;

/* Number of fractal levels */
var levelNum = 100;
var colors = new Array(levelNum+1);

/* Number of iterations (bailout) */
var bailout = 100;
var sequence_x;
var sequence_y;

/* Number of points */
var pointsNum = 10000000;
var currentPointsNum = 0;

/* Fractal image */
var data;
var imageData;
var canvas;
var ctx;

/* initialize color table */
function initializeColors()
{
    for (var level=0; level<=levelNum; level++)
    {
        colors[level] = new Object();
        colors[level].r = 255.0*level/levelNum;
        colors[level].g = 255.0*level/levelNum;
        colors[level].b = 255.0*Math.log(level)/Math.log(levelNum);
    }
}

/* value is inside set in the returned level */
function levelSet(p_re, p_im)
{
    var z_re = 0;
    var z_im = 0;
    var iteration = 0;
    var tmp_re, tmp_im;

    do
    {
        tmp_re = z_re*z_re - z_im*z_im + p_re;
        tmp_im = 2*z_re*z_im + p_im;
        z_re = tmp_re;
        z_im = tmp_im;
        sequence_x[iteration] = tmp_im;
        sequence_y[iteration] = tmp_re;
        iteration++;
    } while ((z_re*z_re+z_im*z_im) < 4 && iteration < bailout);

    if (iteration >= bailout)
    {
        iteration = 0;
    }

    return iteration;
}

/* render Fractal */
function renderFractal()
{
    sequence_x = new Array(bailout);
    sequence_y = new Array(bailout);

    /* Clear data */
    for (var i=0; i<width*height; i++)
    {
        data[i] = 0;
    }

    currentPointsNum = 0;
    calculateFractal();
}

function calculateFractal()
{

    /* Calculate data */
    proccesPointsNum = 10000000 / bailout;
    for (var i=0; i<proccesPointsNum; i++)
    {
        p_im = 4.0*Math.random()-2.0;
        p_re = 4.0*Math.random()-2.0;
        level = levelSet(p_re, p_im);
        for (var j=0; j<level; j++)
        {
            if (sequence_x[j] > minX &&
                sequence_x[j] < maxX &&
                sequence_y[j] > minY &&
                sequence_y[j] < maxY)
            {
                x = Math.floor((sequence_x[j] - minX)/ratioX);
                y = Math.floor((sequence_y[j] - minY)/ratioY);
                x_dist = ((sequence_x[j] - minX)/ratioX) - x;
                y_dist = ((sequence_y[j] - minY)/ratioY) - y;
                data[x+y*width] += (1.0 - x_dist)*(1.0 - y_dist);
                data[(x+1)+y*width] += (1.0 - x_dist)*(y_dist);
                data[x+(y+1)*width] += (x_dist)*(1.0 - y_dist);
                data[(x+1)+(y+1)*width] += (x_dist)*(y_dist);
            }
        }
    }

    /* Check range */
    biggest = data[0];
    smalest = data[0];
    for (var i=1; i<width*height; i++)
    {
        if (data[i] > biggest)
        {
            biggest = data[i];
        }
        else if (data[i] < smalest)
        {
            smalest = data[i];
        }
    }

    /* Generate image */
    for (var i=0; i<height; i++)
    {
        for (var j=0; j<width; j++)
        {
            index = (i*width+j)*4;
            imageData.data[index+3] = 0xff;
            level = 2*Math.floor(((data[j+i*width]-smalest)/(biggest-smalest))*levelNum);
            if (level > levelNum) level = levelNum;
            imageData.data[index+0] = colors[level].r;
            imageData.data[index+1] = colors[level].g;
            imageData.data[index+2] = colors[level].b;
        }
    }

// copy the image data back onto the canvas
    ctx.putImageData(imageData, 0, 0);

    /* If not all points are calculated then show percent of done and call this function for 200 ms. */
    currentPointsNum += proccesPointsNum;
    if (currentPointsNum < pointsNum)
    {
        ctx.font          = "15pt Arial";
        ctx.fillStyle     = "red";
        ctx.textBaseline  = "top";
        ctx.textAlign     = "center";
        ctx.fillText(Math.floor((currentPointsNum / pointsNum)*100) + "%", width/2, height - 50);
        setTimeout("calculateFractal()",200);
    }
}

/* initialize environment and render Fractal */
function initializeFractal()
{
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

// read the width and height of the canvas
    width = canvas.width;
    height = canvas.height;

// create a new pixel array
    data = new Array(width * height);
    imageData = ctx.createImageData(width, height);

    ratioX = (maxX - minX) / width;
    ratioY = (maxY - minY) / height;

    initializeColors();
    renderFractal();
}
