noseX=0;
noseY=0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/8PBhGpvQ/Clown-Nose-Download-PNG-Image.png');
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
if(results.length> 0)
{
console.log(results);
noseX = results[0].pose.nose.x-10;
noseY = results[0].pose.nose.y-10;
console.log("nose x = " + results[0].pose.nose.x)
console.log("nose y = " + results[0].pose.nose.y)
}
}

function modelLoaded(){
console.log('Posenet Is Intialized')
}

function draw(){
image(video,0,0,300,300);
//fill(225,0,0);
//stroke(225,0,0);
//circle(noseX,noseY,20);
image(clown_nose, noseX,noseY, 30,30);
}
function take_snapshot(){
save('myFilterIMage.png')
}












//https://teachablemachine.withgoogle.com/models/ulGcPd99y/
