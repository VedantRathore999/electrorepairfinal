class Customer{



constructor(){
    
this.username = createInput("").attribute("Placeholder","Your Name")
this.state = createInput("").attribute("Placeholder"," Your State")
this.city = createInput("").attribute("Placeholder"," Your City")
this.area = createInput("").attribute("Placeholder"," Your Area")
this.nmonument = createInput("").attribute("Placeholder"," Nearest Monument")
this.number=createInput("").attribute("Placeholder"," Your Phone No.")
this.next= createButton("Next");
this.cIndex ;
this.cCount=1;
this.fd=createElement("h1")
this.g1=createElement("h1")
this.g2=createElement("h1")
this.g3=createElement("h1")
this.g4=createElement("h1")
this.g5=createElement("h1")
this.g6=createElement("h1")
}
setElementPos(){
this.username.position(width/2-120,200)
this.state.position(width/2-120,250)
this.city.position(width/2-120,300)
this.area.position(width/2-120,350)
this.nmonument.position(width/2-120,400)
this.number.position(width/2-120,450)
this.next.position(width/2-120,500)
this.fd.position(width/2-300,100)
this.g1.position(width/2-300,190)
this.g2.position(width/2-300,240)
this.g3.position(width/2-300,290)
this.g4.position(width/2-300,340)
this.g5.position(width/2-380,390)
this.g6.position(width/2-380,440)
//this.save.position(width/2,600)
}
setElementDesign(){
this.username.class("customInput")
this.state.class("customInput")
this.city.class("customInput")
this.area.class("customInput")
this.nmonument.class("customInput")
this.number.class("customInput")
this.next.class("customButton")
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
//his.save.class("customButton")

}

sendEmail(){
var name=this.username.value()
var state=this.state.value()
var city=this.city.value()
var area=this.area.value()
var nmonument=this.nmonument.value()
var number=this.number.value()

var body='Name:'+name+'<br>State:'+state+'<br>City:'+city+'<br>Area:'+area+'<br>Nearest Monument:'+nmonument+'<br>Number:'+number;
console.log(body)
Email.send({
    Host : "smtp.gmail.com",
    Username : "rathorevedanr@gmail.com",
    Password : "pscqujeafoehvzik",
    To : 'vedmancoder@gmail.com',
    From : "rathorevedanr@gmail.com",
    Subject : "Customer Registered",
    Body : body
}).then(
  message => {

    if(message=='OK'){
   alert('You are now registered')
  // this.save.hide()
   this.username.hide()
   this.state.hide()
   this.city.hide()
   this.area.hide()
   this.nmonument.hide()
   this.number.hide()
   this.next.hide()
   appstate="IssueType"
   this.g1.hide()
   this.g2.hide()
   this.g3.hide()
   this.g4.hide()
   this.g5.hide()
   this.g6.hide()
   this.fd.hide()
    }
    else{
   alert('Unable to register try checking your internet connection')
    }
     }
);
}

handleCheats(){

   n2=this.username.value();
   
  if(n2 ===""){
    this.next.position(10000,500)
  }
  else{
    this.next.position(width/2-120,500)
  }

   n3=this.state.value()
  if(n3 ===""){
    this.next.position(10000,500)
  }
  else{
    this.next.position(width/2-120,500)
  }

   n4=this.city.value()
  if(n4 ===""){
    this.next.position(10000,500)
  }
  else{
    this.next.position(width/2-120,500)
  }

   n5=this.area.value()
  if(n5 ===""){
    this.next.position(10000,500)
  }
  else{
    this.next.position(width/2-120,500)
  }

   n6=this.nmonument.value()
  if(n6 ===""){
    this.next.position(10000,500)
  }
  else{
    this.next.position(width/2-120,500)
  }

   n7=this.number.value()
  if(n7 ===""){
    this.next.position(10000,500)
  }
  else{
    this.next.position(width/2-120,500)
  }


}
addCustomer(){
  var custIndex="customers/customer"+this.cIndex;
  database.ref(custIndex).set({
  username:n2,
  state:n3,
  city:n4,
  area:n5,
  nmonument:n6,
  number:n7
}
)
}
getCustomerCount(){
  var customerCountRef = database.ref("customerCount");
  customerCountRef.on("value", data => {
    this.cCount= data.val(); });

}
updateCount(count){
database.ref("/").update({
customerCount:count
})
}
display(){

  this.setElementPos();
  this.setElementDesign();
this.handleCheats();

this.getCustomerCount()

  this.next.mousePressed(()=>{

  this.cCount=this.cCount+1

  this.username.hide()
  this.state.hide()
  this.city.hide()
  this.area.hide()
  this.nmonument.hide()
  this.number.hide()
  this.next.hide()
  appstate="IssueType"
  this.g1.hide()
  this.g2.hide()
  this.g3.hide()
  this.g4.hide()
  this.g5.hide()
  this.g6.hide()
  this.fd.hide()

console.log(this.username.value());

this.cIndex=this.cCount;

console.log("Before calling fillinfo method");

this.addCustomer();

this.updateCount(this.cCount);

console.log("number of Customers"+this.getCustomerCount());

console.log("After calling fillinfo method");

console.log("The value of Customer Index is: "+this.cIndex);

});



}

}







