var database

var homescreen

var appstate

var namescreen

var issueScreen

var fanproblem

var acproblem

var tvproblem

var fridgeproblem

var washingmachineproblem

var mixerissue

var geyser

var toaster

var electricity

var cooler

var tubewell

var musicsystem

var vacumcleaner

var microwave

var cots

var tregister

var bg,bg_image

var n2,n3,n4,n5,n6,n7

var h2,h3,h4,h5,h6,h7,h8,h9

var c2,c3;

var cImgae,c_image

var database;



function preload(){
bg_image=loadImage("bg10.jpg")
c_image=loadImage("vrff.png")
}

function setup(){

createCanvas(windowWidth,windowHeight)

database=firebase.database()

homescreen= new Homescreen();

appstate="Homescreen"

namescreen= new Customer();

issueScreen=new IssueType()

fanproblem=new Fanissue()

acproblem= new ACissue()

tvproblem= new TVissue()

fridgeproblem= new Fridgeissue()

washingmachineproblem= new WashingMachineissue()

mixerissue=new Mixerissue()

geyser=new Geyserissue()

toaster=new Toasterissue()

electricity =new Electricissue()

cooler= new Coolerissue()

tubewell= new Tubewellissue()

musicsystem =new MusicSystemissue()

vacumcleaner=new Vacumissue()

microwave=new MicroWaveIssue()

cots=new cot()

tregister=new Tregister()

bg=createSprite(windowWidth/2,windowHeight/2,10,100) 
bg.addImage("bg",bg_image)

cImage=createSprite(width/2-250,height/2+280)
cImage.addImage("cImage",c_image)
cImage.scale=0.3
}

function draw(){

background("grey")
homescreen.display();
console.log(appstate)

if(appstate==="NameClass"){
namescreen.display();
}

if(appstate==="cot"){
cots.display()
}

if(appstate==="technicianSI"){
tregister.display()
}

if(appstate==="IssueType"){
issueScreen.display()
}

if(appstate==="FanIssue"){
fanproblem.display();
}

if(appstate==="ACIssue"){
acproblem.display();
}

if(appstate==="TVIssue"){
tvproblem.display();
}

if(appstate==="FridgeIssue"){
fridgeproblem.display();
}

if(appstate==="WashingMachineIssue"){
washingmachineproblem.display();
}

if(appstate==="MixerIssue"){
mixerissue.display();
}

if(appstate==="GeyserIssue"){
geyser.display();
}

if(appstate==="ToasterIssue"){
toaster.display();
}

if(appstate==="ElectricityIssue"){
electricity.display();
}

if(appstate==="CoolerIssue"){
cooler.display();
}

if(appstate==="TubeWellIssue"){
tubewell.display();
}

if(appstate==="MusicSystemIssue"){
 musicsystem.display();
}

if(appstate==="VacumCleanerIssue"){
vacumcleaner.display();
}

if(appstate==="MicrowaveIssue"){
microwave.display();
}

drawSprites();

}

function windowResized(){

resizeCanvas(windowWidth,windowHeight)

}










