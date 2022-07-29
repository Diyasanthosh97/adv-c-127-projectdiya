song2="";
song1="";
function preload(){
    song2=loadSound("song2.mp4");
song1=loadSound("song1.mp4")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
song1.play();
song2.play();
}