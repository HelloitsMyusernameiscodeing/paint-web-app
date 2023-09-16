noseX=0
noseY=0
MoustacheImg=""
function setup(){
canvas=createCanvas(400,400)
canvas.center()
webcam=createCapture(VIDEO)
webcam.hide()
poseNet=ml5.poseNet(webcam,modelloaded)
poseNet.on('pose',gotPoses)
}
function draw(){
image(webcam,0,0,400,400)
image(ClownNoseImg,noseX,noseY,140,70)
}
function preload(){
ClownNoseImg=loadImage("Moustache.png")
}
function modelloaded(){
console.log("Model has been loaded")    
}
function gotPoses(results){
if(results.length>0){
    console.log(results)
    console.log("nose x="+results[0].pose.nose.x)
    noseX=results[0].pose.nose.x-200
    console.log("nose x="+results[0].pose.nose.y)
    noseY=results[0].pose.nose.y-70
}
}
function TakePic(){
    save("Moustache.png")
}