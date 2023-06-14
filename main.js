function setup()
{
video = createCapture(VIDEO);
video.size(550, 500);
   
canvas = createCanvas(580, 450);
canvas.position(650, 130);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw()
{
  background('#74DBF0');
}
