class cot{
    constructor(){
this.c=createButton("Customer")
this.t=createButton("Technician")
this.WAY=createElement("h1")
    }
    display(){
this.WAY.position(width/2-140,height/2-150)
this.WAY.class("greeting")
this.WAY.html("Who Are You")
this.c.position(width/2-120,height/2-40)
this.t.position(width/2-120,height/2+40)
this.c.class("customButton")
this.t.class("customButton")
this.c.mousePressed(()=>{
appstate="NameClass"
this.c.hide()
this.t.hide()
this.WAY.hide()
})
this.t.mousePressed(()=>{
    appstate="technicianSI"
    this.c.hide()
    this.t.hide()
    this.WAY.hide()
})
    }
}




