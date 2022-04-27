class Coolerissue {
    constructor(){
        this.username = createInput("").attribute("Placeholder","Enter Your Name")
    this.state = createInput("").attribute("Placeholder","Enter Your State")
    this.city = createInput("").attribute("Placeholder","Enter Your City")
    this.area = createInput("").attribute("Placeholder","Enter Your Area")
    this.nmonument = createInput("").attribute("Placeholder","Enter Nearest Monument")
    this.number=createInput("").attribute("Placeholder","Enter Your Phone No.")
    this.save=createButton("Submit Issue")
    this.t1=createElement("h1")
    this.box=createInput("").attribute("Placeholder"," Cooler Issue")
    }
    setElementPos(){
        
        this.save.position(width/2-120,height/2)
        }
        setElementDesign(){
            this.username.class("customInput")
            this.state.class("customInput")
            this.city.class("customInput")
            this.area.class("customInput")
            this.nmonument.class("customInput")
            this.number.class("customInput")
            
            this.save.class("customButton")
            
            }
            
            sendEmail(){
            var name=this.username.value()
            var state=this.state.value()
            var city=this.city.value()
            var area=this.area.value()
            var nmonument=this.nmonument.value()
            var number=this.number.value()
            var fanissuee=this.box.value()
            var body='Issue:'+fanissuee;
            console.log(body)
            Email.send({
                Host : "smtp.gmail.com",
                Username : "rathorevedanr@gmail.com",
                Password : "pscqujeafoehvzik",
                To : 'vedmancoder@gmail.com',
                From : "rathorevedanr@gmail.com",
                Subject : "Cooler Issue",
                Body : body 
            }).then(
              message =>{
    
             if(message=='OK'){
            alert('We Have Got Your Response We Will Be Addressing Your Problem Soon Thanks for Using our App')
             }
             else{
            alert('Unable to submit your response try checking your internet connection')
             }
              }
            );
    
            }
    elementPos(){
    this.box.position(width/2-120,height/2-40)
    this.t1.position(width/2-250,height/2-120)
    //this.text.position(width/2,height/2-150)
    }
    elementDes(){
    this.box.class("customInputM")
    this.t1.class("greetingsmall")
    this.t1.html("Type Your Cooler problem Here")
    //this.text.class("greeting")
    //this.text.html("Type Your Fan problem Here")
    }
    display(){
    this.elementPos();
    this.elementDes()
    this.save.mousePressed(()=>{
        this.sendEmail()
    this.save.hide()
    })
    this.setElementPos();
    this.setElementDesign();
    }
    
    
    
    }
    