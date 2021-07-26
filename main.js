function preload(){

}

function setup(){
    canvas = createCanvas(400,325);
    canvas.position(525,300);
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posenet is in.")
}

function draw(){
    image(video,0,0,400,325);
}

function gotPoses(){
    
}