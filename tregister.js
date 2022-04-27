class Tregister{
    constructor(){
this.name=createInput("").attribute("Placeholder","Name")
this.state=createInput("").attribute("Placeholder","State")
this.city=createInput("").attribute("Placeholder","City")
this.area=createInput("").attribute("Placeholder","Area")
this.nmonument=createInput("").attribute("Placeholder","Nearest Monument")
this.number=createInput("").attribute("Placeholder","Number")
this.gmail=createInput("").attribute("Placeholder","Gmail")
this.expertise=createInput("").attribute("Placeholder","Expertise")
this.loginButton=createButton("Register")
this.tIndex ;
this.tCount= 1;
this.fd=createElement("h1")
this.fd=createElement("h1")
this.g1=createElement("h1")
this.g2=createElement("h1")
this.g3=createElement("h1")
this.g4=createElement("h1")
this.g5=createElement("h1")
this.g6=createElement("h1")
this.g7=createElement("h1")
this.g8=createElement("h1")

    }
epos(){
this.name.position(width/2-120,height/2-150)
this.state.position(width/2-120,height/2-100)
this.city.position(width/2-120,height/2-50)
this.area.position(width/2-120,height/2)
this.nmonument.position(width/2-120,height/2+50)
this.number.position(width/2-120,height/2+100)
this.gmail.position(width/2-120,height/2+150)
this.expertise.position(width/2-120,height/2+200)
this.loginButton.position(width/2-120,height/2+250)

this.fd.position(width/2-300,height/2-280)

this.g1.position(width/2-300,height/2-160)
this.g2.position(width/2-300,height/2-110)
this.g3.position(width/2-300,height/2-60)
this.g4.position(width/2-300,height/2-10)
this.g5.position(width/2-380,height/2+40)
this.g6.position(width/2-380,height/2+90)
this.g7.position(width/2-300,height/2+140)
this.g8.position(width/2-300,height/2+190)
}
edesign(){
this.name.class("customInput")
this.state.class("customInput")
this.city.class("customInput")
this.area.class("customInput")
this.nmonument.class("customInputM")
this.number.class("customInput")
this.gmail.class("customInput")
this.expertise.class("customInput")
this.loginButton.class("customButton")
this.fd.class("greeting")
this.fd.html("Fill Details To Register")

this.g1.html("Fill Your Name:")
this.g1.class("greetinguus")
this.g2.html("Fill Your State:")
this.g2.class("greetinguus")
this.g3.html("Fill Your City:")
this.g3.class("greetinguus")
this.g4.html("Fill Your Area:")
this.g4.class("greetinguus")
this.g5.html("Fill The Nearest Monument:")
this.g5.class("greetinguus")
this.g6.html("Fill Your Phone Number:")
this.g6.class("greetinguus")
this.g7.html("Fill Your G-Mail:")
this.g7.class("greetinguus")
this.g8.html("Fill Your Expertise:")
this.g8.class("greetinguus")
}
sendEmail(){
    var namet=this.name.value()
    var statet=this.state.value()
    var cityt=this.city.value()
    var areat=this.area.value()
    var nmonumentt=this.nmonument.value()
    var numbert=this.number.value()
    var gmailt=this.gmail.value()
    var expertiset=this.expertise.value()
    var body='Name:'+namet+'<br>State:'+statet+'<br>City:'+cityt+'<br>Area:'+areat+'<br>Nearest Monument:'+nmonumentt+'<br>Number:'+numbert+'<br>Gmail:'+gmailt+'<br>Expertise:'+expertiset;
    console.log(body)
    Email.send({
        Host : "smtp.gmail.com",
        Username : "rathorevedanr@gmail.com",
        Password : "pscqujeafoehvzik",
        To : 'vedmancoder@gmail.com',
        From : "rathorevedanr@gmail.com",
        Subject : "Technician Registers",
        Body : body 
    }).then(
      message =>{

     if(message=='OK'){
    alert('You Are Registered')
     }
     else{
    alert('Unable to submit your response try checking your internet connection')
     }
      }
    );

    }

    handleCheats(){

         h2=this.name.value()
        if(h2 ===""){
          this.loginButton.position(10000,500)
        }
        else{
          this.loginButton.position(width/2-120,height/2+250)
        }
      
         h3=this.state.value()
        if(h3 ===""){
          this.loginButton.position(10000,500)
        }
        else{
          this.loginButton.position(width/2-120,height/2+250)
        }
      
         h4=this.city.value()
        if(h4 ===""){
          this.loginButton.position(10000,500)
        }
        else{
          this.loginButton.position(width/2-120,height/2+250)
        }
      
         h5=this.area.value()
        if(h5 ===""){
          this.loginButton.position(10000,500)
        }
        else{
          this.loginButton.position(width/2-120,height/2+250)
        }
      
         h6=this.nmonument.value()
        if(h6 ===""){
          this.loginButton.position(10000,500)
        }
        else{
          this.loginButton.position(width/2-120,height/2+250)
        }
      
         h7=this.number.value()
        if(h7 ===""){
          this.loginButton.position(10000,500)
        }
        else{
          this.loginButton.position(width/2-120,height/2+250)
        }
      
         h8=this.gmail.value()
        if(h8 ===""){
          this.loginButton.position(10000,500)
        }
        else{
          this.loginButton.position(width/2-120,height/2+250)
        }
      
        h9=this.expertise.value()
        if(h9 ===""){
          this.loginButton.position(10000,500)
        }
        else{
          this.loginButton.position(width/2-120,height/2+250)
        }

      }

      addTechnician(){
        var techIndex="technicians/technician"+this.tIndex;
        database.ref(techIndex).set({
        username:h2,
        state:h3,
        city:h4,
        area:h5,
        nmonument:h6,
        number:h7,
        gmail:h8,
        expertise:h9
      })
    }

    getTechnicianCount(){
      var technicianCountRef = database.ref("technicianCount");
      technicianCountRef.on("value", data => {
        this.tCount= data.val(); });
    
    }
    
    updateTCount(count){
      database.ref("/").update({
      technicianCount:count
      })
      }

    display(){
this.epos();

this.edesign()

this.handleCheats()

this.getTechnicianCount()

this.loginButton.mousePressed(()=>{

  this.tCount=this.tCount+1



//console.log(this.username.value());

this.tIndex=this.tCount;

console.log("Before calling fillinfo method");

this.addTechnician();

this.updateTCount(this.tCount);

console.log("number of Customers"+this.getTechnicianCount());

console.log("After calling fillinfo method");

console.log("The value of Customer Index is: "+this.tIndex);

});



    }
  
}