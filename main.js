var noseX=0;
var noseY=0;
var difference=0;
var rightWristX=0;
var leftWristX=0;

function setup()
{
     video=createCapture(VIDEO);
     video.size(550,500);

     canvas=createCanvas(550,550);
     canvas.position(560,150);
     
     poseNet=ml5.poseNet(video, modelLoaded);
     poseNet.on('pose',gotPoses)
}

function modelLoaded()
{
    console.log('poseNet is Initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("noseX="+noseX+"noseY="+noseY+"difference="+difference);
    }
}
function draw()
{
    background('#800000');
    fill("blue");
    stroke("yellow")
    square(noseX,noseY,difference);
}
