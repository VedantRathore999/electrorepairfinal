class TVissue {
    constructor(){
        this.username = createInput("").attribute("Placeholder","Enter Your Name")
    this.state = createInput("").attribute("Placeholder","Enter Your State")
    this.city = createInput("").attribute("Placeholder","Enter Your City")
    this.area = createInput("").attribute("Placeholder","Enter Your Area")
    this.nmonument = createInput("").attribute("Placeholder","Enter Nearest Monument")
    this.number=createInput("").attribute("Placeholder","Enter Your Phone No.")
    
    this.save=createButton("Submit Issue")
    this.text=createElement("h1")
    this.box=createInput("").attribute("Placeholder","TV Issue")
    }
    setElementPos(){
        //this.username.position(width/2,200)
      //  this.state.position(width/2,250)
      //  this.city.position(width/2,300)
     //   this.area.position(width/2,350)
     //   this.nmonument.position(width/2,400)
      //  this.number.position(width/2,450)
        
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
                Subject : "TV Issue",
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
        this.text.position(width/2-200,height/2-120)
    }
    elementDes(){
    this.box.class("customInputM")
    this.text.class("greetingsmall")
    this.text.html("Type Your TV problem Here")
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
    