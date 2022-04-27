class Homescreen{
constructor(){
this.name=createElement("h2")
this.name2=createElement("h2")
this.guide=createElement("h2")
this.enter=createButton("------->>>>")
this.creator=createElement("h1")
}
setElementsPosition(){
this.name.position(width/2-150,100)
this.name2.position(width/2-180,200)
this.guide.position(width/2-150,250)
this.enter.position(width/2-80,300)
this.creator.position(width/2-300,height/2+150)
}

elementStyle(){
this.name.class("greeting")
this.name2.class("greetingsmall")
this.guide.class("greetingsmall")
this.creator.class("greetingus")
this.enter.class("customButton")
}
hide(){
    this.name.hide()
    this.name2.hide()
    this.guide.hide()
    this.enter.hide()
    this.creator.hide()
}
elementFilling(){

this.enter.mousePressed(()=>{
this.hide()
appstate="cot"
}

)


    this.name.html('ElectroRepair')
    this.name2.html('For Every Electrical Help')
  //  this.guide.html('Press Enter Button To Continue')
    this.creator.html('Made by-')
    }
display(){
    this.setElementsPosition();
    this.elementFilling();
    this.elementStyle();
}



}