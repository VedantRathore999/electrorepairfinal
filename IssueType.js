class IssueType {
constructor(){
this.issueguide= createElement("h4")
this.fan=createElement("h2")
this.AC=createElement("h2")
this.tv=createElement("h2")
this.fridge =createElement("h2")
this.washingmachine=createElement("h2")
this.mixer  =createElement("h2")
this.gyser=createElement("h2")
this.toaster=createElement("h2")
this.lightfitting=createElement("h2")
this.cooler=createElement("h2")
this.tubewell=createElement("h2")
this.musicsystem=createElement("h2")
this.vacumcleaner=createElement("h2")
this.microwave=createElement("h2")
//this.setupbox=createElement("h2")

this.b1=createButton("")
this.b2=createButton("")
this.b3=createButton("")
this.b4=createButton("")
this.b5=createButton("")
this.b6=createButton("")
this.b7=createButton("")
this.b8=createButton("")
this.b9=createButton("")
this.b10=createButton("")
this.b11=createButton("")
this.b12=createButton("")
this.b13=createButton("")
this.b14=createButton("")
//this.b15=createButton("")

}
fillelement(){
this.issueguide.html('Select The Device <BR>Which Has Problem</BR> ')
this.fan.html('Fan')
this.AC.html('AC')
this.tv.html('TV')
this.fridge.html('Fridge')
this.washingmachine.html('Washing Machine')
this.mixer.html('Mixer')
this.gyser.html('Geyser')
this.toaster.html('Toaster')
this.lightfitting.html('House Electricity Issues')
this.cooler.html('Cooler')
this.tubewell.html('Tube Well')
this.musicsystem.html('Speaker')
this.vacumcleaner.html('Vacum Cleaner')
this.microwave.html('Microwave')
//this.setupbox.html('Setup Box')

this.b1.class("smallcustomButton")
this.b2.class("smallcustomButton")
this.b3.class("smallcustomButton")
this.b4.class("smallcustomButton")
this.b5.class("smallcustomButton")
this.b6.class("smallcustomButton")
this.b7.class("smallcustomButton")
this.b8.class("smallcustomButton")
this.b9.class("smallcustomButton")
this.b10.class("smallcustomButton")
this.b11.class("smallcustomButton")
this.b12.class("smallcustomButton")
this.b13.class("smallcustomButton")
this.b14.class("smallcustomButton")


this.fan.class("greetingums")
this.AC.class("greetingums")
this.tv.class("greetingums")
this.fridge.class("greetingums")
this.washingmachine.class("greetingums")
this.mixer.class("greetingums")
this.gyser.class("greetingums")
this.toaster.class("greetingums")
this.lightfitting.class("greetingums")
this.cooler.class("greetingums")
this.tubewell.class("greetingums")
this.musicsystem.class("greetingums")
this.vacumcleaner.class("greetingums")
this.microwave.class("greetingums")
//this.b15.class("smallcustomButton")
}
elementPos(){
this.issueguide.position(width/2-200,height/2-250)
this.fan.position(width/2-150,height/2-30)
this.AC.position(width/2-150,height/2-5)
this.tv.position(width/2-150,height/2+20)
this.fridge.position(width/2-150,height/2+45)
this.washingmachine.position(width/2-150,height/2+70)
this.mixer.position(width/2-150,height/2+90)
this.gyser.position(width/2-150,height/2+115)
this.toaster.position(width/2-150,height/2+140)
this.lightfitting.position(width/2-150,height/2+165)
this.cooler.position(width/2-150,height/2+190)
this.tubewell.position(width/2-150,height/2+215)
this.musicsystem.position(width/2-150,height/2+240)
this.vacumcleaner.position(width/2-150,height/2-55)
this.microwave.position(width/2-150,height/2-80)
//this.setupbox.position(width/2+200,350)

this.b1.position(width/2+100,height/2-10)
this.b2.position(width/2+100,height/2+15)
this.b3.position(width/2+100,height/2+40)
this.b4.position(width/2+100,height/2+65)
this.b5.position(width/2+100,height/2+90)
this.b6.position(width/2+100,height/2+115)
this.b7.position(width/2+100,height/2+140)
this.b8.position(width/2+100,height/2+165)
this.b9.position(width/2+100,height/2+190)
this.b10.position(width/2+100,height/2+215)
this.b11.position(width/2+100,height/2+240)
this.b12.position(width/2+100,height/2+265)
this.b13.position(width/2+100,height/2-35)
this.b14.position(width/2+100,height/2-60)
//this.b15.position(width/2+330,375)


}
elementHide(){
this.issueguide.hide()
this.fan.hide()
this.AC.hide()
this.tv.hide()
this.fridge.hide()
this.washingmachine.hide()
this.mixer .hide()
this.gyser.hide()
this.toaster.hide()
this.lightfitting.hide()
this.cooler.hide()
this.tubewell.hide()
this.musicsystem.hide()
this.vacumcleaner.hide()
this.microwave.hide()
//this.setupbox.hide()
this.b1.hide()
this.b2.hide()
this.b3.hide()
this.b4.hide()
this.b5.hide()
this.b6.hide()
this.b7.hide()
this.b8.hide()
this.b9.hide()
this.b10.hide()
this.b11.hide()
this.b12.hide()
this.b13.hide()
this.b14.hide()
//this.b15.hide()

}
elementDesign(){
this.issueguide.class("greeting")
this.b1.mousePressed(()=>{
    this.elementHide();
    appstate="FanIssue"
})
this.b2.mousePressed(()=>{
    this.elementHide();
    appstate="ACIssue"
})
this.b3.mousePressed(()=>{
    this.elementHide();
    appstate="TVIssue"
})

this.b4.mousePressed(()=>{
    this.elementHide();
    appstate="FridgeIssue"
})

this.b5.mousePressed(()=>{
    this.elementHide();
    appstate="WashingMachineIssue"
})

this.b6.mousePressed(()=>{
    this.elementHide();
    appstate="MixerIssue"
})

this.b7.mousePressed(()=>{
    this.elementHide();
    appstate="GeyserIssue"
})

this.b8.mousePressed(()=>{
    this.elementHide();
    appstate="ToasterIssue"
})

this.b9.mousePressed(()=>{
    this.elementHide();
    appstate="ElectricityIssue"
})

this.b10.mousePressed(()=>{
    this.elementHide();
    appstate="CoolerIssue"
})

this.b11.mousePressed(()=>{
    this.elementHide();
    appstate="TubeWellIssue"
})

this.b12.mousePressed(()=>{
    this.elementHide();
    appstate="MusicSystemIssue"
})

this.b13.mousePressed(()=>{
    this.elementHide();
    appstate="VacumCleanerIssue"
})

this.b14.mousePressed(()=>{
    this.elementHide();
    appstate="MicrowaveIssue"
})



}
display(){
this.fillelement()
this.elementPos()
this.elementDesign()
}



}