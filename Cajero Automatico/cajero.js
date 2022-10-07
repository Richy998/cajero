class user {
    constructor (email, password, name, lname, saldo){
        this.email = email;
        this.password = password;
        this.name = name;
        this.saldo =saldo;
        this.lname = lname;
    }
}
let Maria = new user ("maria@richbank.com", "password1", "Maria", "Lopez", 60000);
let Mario = new user ("mario@richbank.com", "password2", "Mario", "Perez", 50000);
let Anita = new user ("anita@richbank.com", "password3", "Anita", "Barcena", 999);
let Richy = new user ("admin", "", "Ricardo", "Barcena", 999999);
let  users=[];
var LOGGED,SALDO_ACTUAL,NOMBRE, APELLIDO, RETIRO;
var MOVIMIENTOS=[];
var CAPITAL=[];
var ABONO;
var SALDONUEVO;
var BTND = document.createElement("button");
BTND.innerText="aprobar";
var BTNR = document.createElement("button");
BTNR.innerText="Retirar";
users.push(Maria);users.push(Mario);users.push(Anita);users.push(Richy);
function reckon(email,password){
  
  for(index= users.length; index--; ){
    if(email === users[index].email && password === users[index].password){
      let user = users[index]; 
      console.log(user);
      SALDO_ACTUAL = users[index].saldo;
      NOMBRE = users[index].name;
      APELLIDO = users[index].lname;
      
       return user;
    }}

  }



function login(email,password){
  

  console.log("password =" + password+ " email "+email);
  let index;
  for(index= users.length; index--; ){
    if(email === users[index].email && password === users[index].password){
      
var userloggin = true;

}

  }
  if(userloggin == true){
    console.log("correct");
let intro = document.getElementById("intro");

document.body.removeChild(intro);
  

let saludo = document.getElementById("saludo");
saludo.append(" " + LOGGED.name);

let inside = document.getElementById("inside");
inside.style.opacity="1";
inside.style.heigth="1000px";
  }
  else{
    alert ("usuario no valido")
  }
  
  
}


function logon(){ 

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(email + " " + password);
 LOGGED = reckon(email,password);
login(email,password);
 return LOGGED;
}



  function saldoactual(){
    saldo = document.getElementById("saldo");
    $(saldo).empty();
    let div =document.createElement("div");
        let title =document.createElement("p");
     

       let div2 =document.createElement("div");
       let actualbalance =document.createElement("p");
       actualbalance.innerHTML= SALDO_ACTUAL;
       title.innerText = "SALDO ACTUAL : "
       actualbalance.style.fontSize = "2rem";
    div.append(title);
    saldo.append(div);
    div2.append(actualbalance);

    saldo.append(div2);
  }

  function insert(){
    let div = document.createElement("div");
    let label = document.createElement("label");
    let br = document.createElement("br");
    let input = document.createElement("input");
    let closebtn = document.createElement("button");
    let actualbalance = document.getElementById("printsaldo");

    closebtn.innerText = "Cerrar";
    closebtn.style.position = "absolute";
    closebtn.style.top = "0";
    closebtn.style.right = "0";
    closebtn.style.width = "50px";

    input.type = "number";
    label.innerText = "inserte cantidad a abonar: "
    div.style.height = "150px";
    div.style.width = "200px";
    div.style.backgroundColor = "green";
    div.style.position = "absolute";
    div.style.top = "200px";
    div.style.left = "300px";
    div.appendChild(label);
    div.appendChild(br);
    div.appendChild(input);
    div.appendChild(closebtn);
    div.appendChild(BTND);
    document.body.appendChild(div);
    
    closebtn.addEventListener("click", function close(){
      document.body.removeChild(div);
      console.log("removed");
    })

    BTND.addEventListener("click", function obtain(){

      if(input.value <= 999999){
      let capital;
      ABONO = input.value;
      console.log(SALDO_ACTUAL + " +");
      console.log(ABONO + " =");
      
      SALDO_ACTUAL = (+SALDO_ACTUAL) + (+ABONO);
      console.log(SALDO_ACTUAL);
      MOVIMIENTOS.push("Abono " +ABONO);
      actualbalance.innerHTML = SALDO_ACTUAL;
      capital = SALDO_ACTUAL;
      CAPITAL.push(capital);
        console.log(CAPITAL);


      return ABONO;
  }
else{
  alert("Deposito maximo es de 999,999")
}})
   
  }

  
  function Retiro(){
    let div = document.createElement("div");
    let label = document.createElement("label");
    let br = document.createElement("br");
    let input = document.createElement("input");
    let closebtn = document.createElement("button");
    closebtn.innerText = "Cerrar";
    closebtn.style.position = "absolute";
    closebtn.style.top = "0";
    closebtn.style.right = "0";
    closebtn.style.width = "50px";

    input.type = "number";
    label.innerText = "inserte cantidad a abonar: "
    div.style.height = "150px";
    div.style.width = "200px";
    div.style.backgroundColor = "red";
    div.style.position = "absolute";
    div.style.top = "200px";
    div.style.left = "300px";
    div.appendChild(label);
    div.appendChild(closebtn);
    div.appendChild(br);
    div.appendChild(input);
    div.appendChild(BTNR);
    document.body.appendChild(div);
    closebtn.addEventListener("click", function(){
      document.body.removeChild(div);
    })
    BTNR.addEventListener("click", function obtain(){
      if(input.value < SALDO_ACTUAL){
        if(input.value <= SALDO_ACTUAL-10){
      let capital;
      RETIRO = input.value;
      console.log(SALDO_ACTUAL + " -");
      console.log(RETIRO + " =");

      SALDO_ACTUAL = (+SALDO_ACTUAL) - (+RETIRO);
      console.log(SALDO_ACTUAL);
      MOVIMIENTOS.push("Retiro  -"+RETIRO);
      capital = SALDO_ACTUAL;
      CAPITAL.push(capital);
      let actualbalance = document.getElementById("printsaldo");
      actualbalance.innerHTML = SALDO_ACTUAL;
          
  

      return RETIRO;
        }else{
          alert("Retiro Máximo de 999,000")
        }
      
      }
  else{ alert("Saldo minimo $10, Saldo actual  " + SALDO_ACTUAL+ " Retiro Maximo 999,000")

}
})
    
  }
  function movimientos(){
    saldo = document.getElementById("saldo");
$(saldo).empty();
let div =document.createElement("div");
    let movementslist =document.createElement("p");
   let div2 =document.createElement("div");
   let div3 =document.createElement("div");
   let div4 =document.createElement("div");


    div.style.display="flex";
    div.style.textAlign="center";

    div.style.flexDirection="column";

//style
   div.style.height = "50px";
   div.style.width = "200px";
   div.style.position = "relative";
   div.style.top = "0px";
   div2.style.height = "200px";
   div2.style.width = "400px";
   div2.style.position = "relative";
   div2.style.top = "0px";
   div2.style.display="flex";
   div2.style.flexDirection= "row";
   div3.style.height = "200px";
   div3.style.width = "200px";
   div3.style.position = "relative";
   div3.style.top = "0px";
   div4.style.height = "200px";
   div4.style.width = "200px";
   div4.style.position = "relative";
   div4.style.top = "0px";
    movementslist.innerText="ULTIMOS MOVIMIENTOS"

    let index = MOVIMIENTOS.length;

    for(index <= MOVIMIENTOS.length; index--;){
    
      let newmovement = document.createElement("p");
      let br =document.createElement("br");
      let capmovement = document.createElement("p");
      let bre =document.createElement("br");

      newmovement.style.display = "block";
      newmovement = MOVIMIENTOS[index];
      capmovement.style.display = "block";
      capmovement = CAPITAL[index];
      div4.append(capmovement);
      div4.append(bre);
      div3.append(newmovement);
      div3.append(br);
  
    }  

   
    div.appendChild(movementslist);
    saldo.appendChild(div);
    saldo.appendChild(div2);
    div2.appendChild(div3);
    div2.appendChild(div4);
  
    console.log(MOVIMIENTOS);
    
  }
  function modify(){
    
   
    saldo = document.getElementById("saldo");
$(saldo).empty();
let div =document.createElement("div");
    let movementslist =document.createElement("p");
   let div2 =document.createElement("div");
   let div3 =document.createElement("div");
   let div4 =document.createElement("div");
   let name =document.createElement("p");
   let lastname =document.createElement("p");
   let email =document.createElement("p");
   let password =document.createElement("p");
   let aname =document.createElement("p");
   let alastname =document.createElement("p");
   let aemail =document.createElement("p");
   let apassword =document.createElement("p");
   let bname =document.createElement("button");
   let blastname =document.createElement("button");
   let bemail =document.createElement("button");
   let bpassword =document.createElement("button");

 



    div.style.display="flex";
    div.style.textAlign="center";

    div.style.flexDirection="column";

//style
   div.style.height = "50px";
   div.style.width = "400px";
   div.style.position = "relative";
   div.style.top = "0px";
   div2.style.height = "200px";
   div2.style.width = "400px";
   div2.style.position = "relative";
   div2.style.top = "0px";
   div2.style.display="flex";
   div2.style.flexDirection= "row";
   div3.style.height = "200px";
   div3.style.width = "200px";
   div3.style.position = "relative";
   div3.style.top = "0px";
   div4.style.height = "200px";
   div4.style.width = "200px";
   div4.style.position = "relative";
   div4.style.top = "0px"; 
//labels
  movementslist.innerText =" INFORMACION DE LA CUENTA";
   name.innerText= "NOMBRE : ";
   lastname.innerText= "APELLIDO : "; 
   email.innerText= "EMAIL : ";
   password.innerText= " PASSWORD : ";
   //informacion 
   aname.innerText= LOGGED.name;
   alastname.innerText= LOGGED.lname;
   aemail.innerText=LOGGED.email;
   apassword.innerText= LOGGED.password;
   // edit buttons
   bname.innerText= "edit";
   blastname.innerText=  "edit";
   bemail.innerText= "edit";
   bpassword.innerText=  "edit";

   div.appendChild(movementslist);
   saldo.appendChild(div);
   saldo.appendChild(div2);
   div2.appendChild(div3);
   div2.appendChild(div4);
   div3.appendChild(name);
   div3.appendChild(lastname);
   div3.appendChild(email);
   div3.appendChild(password);
   div4.appendChild(aname);
   div4.appendChild(alastname);
   div4.appendChild(aemail);
   div4.appendChild(apassword);
   aname.append(bname);
   
   let confirm = document.createElement("button");
    





   //edit button in name
   bname.addEventListener("click", function(){
      let div  =document.createElement("div");
let div1 =document.createElement("div");
    let paragrph =document.createElement("p");
   let div2 =document.createElement("div");
   let br = document.createElement("br");
   let assure = document.createElement("button");
   let disclosure = document.createElement("p");
     let closebtn = document.createElement("button");
     let newowner = document.createElement("input");
     let newownersemail = document.createElement("input");
     let newownerspassword = document.createElement("input");
     newownerspassword.type = "password";
     newownersemail.type = "email";
     let newownerspassword2 = document.createElement("input");
     newownerspassword2.type = "password";

     closebtn.innerText = "Cerrar";
     closebtn.style.position = "absolute";
     closebtn.style.top = "0";
     closebtn.style.right = "0";
    closebtn.style.textAlign = "center";
    closebtn.style.width = "50px";

   div.style.height = "200px";
   div.style.width = "200px";
   div.style.position = "absolute";
   div.style.top = "250px";
   div.style.left= "300px";
   div.style.display = "flex";
   div.style.flexDirection = "column";
   div.style.height = "50px";
   div.style.width = "400px";
   
    div2.style.display = "flex"
    div2.style.flexDirection = "column";


   assure.innerText = "Si";
   confirm.innerText = "Seguro";
   paragrph.innerText= "Cambio de propietario : ";
      disclosure.innerText = "Estas seguro de el cambio de nombre?"
    
    let saldo = document.getElementById("saldo");
    div1.append(paragrph);
    div1.append(br);  
    div.append(closebtn);
    div2.append("Nombre y Apellido :");
    div2.append(newowner)
    div2.append("Nuevo correo:");
    div2.append(newownersemail);
    div2.append("Nueva contraseña:");
div2.append(newownerspassword);
    div2.append(assure);
   

    div.append(div1);
    div.append(div2);
    
    closebtn.addEventListener("click", function(){
     saldo.removeChild(div);
    })
    saldo.append(div);
    assure.addEventListener("click", function( ){
 let namearray = (newowner.value).split(" ");
 let newemail = newownersemail.value;
 let newpassword = newownerspassword.value;
 console.log("Nombre Nuevo");
   console.log(namearray[0]);
   console.log(namearray[1]);
console.log("Nombre actual")
      console.log(NOMBRE);
      console.log(APELLIDO);
      console.log("Nuevo correo")
      console.log(newemail);
      console.log("nueva contraseña")
      console.log(newpassword);


      $(div2).empty();
      div2.append("El nombre cambiara de :");
      div2.append(NOMBRE);
      div2.append(APELLIDO);
      div2.append(br);
       NOMBRE = namearray[0];
      APELLIDO = namearray[1];
      div2.append("a :");
      div2.append(NOMBRE);
      div2.append(APELLIDO);
      div.append("Nuevo correo : ")
      div2.append(newownersemail.value);
      div.append("Confirmar contraseña : ")
      div2.append(newownerspassword2);
      div2.append(disclosure);
      div2.append(confirm);
      
        confirm.addEventListener("click", function () { 
          if(newownerspassword.value === newownerspassword2.value){
          console.log(NOMBRE);
          console.log(APELLIDO);   
          LOGGED.email = newownersemail.value; 
          aemail.innerText = LOGGED.email;
          LOGGED.password = newownerspassword2.value; 
          apassword.innerText = ("Información protegida");
          aname.innerText = NOMBRE;
          aname.append(bname); 
      
      console.log(newownerspassword2.value);
         
          alastname.innerText = APELLIDO;
         
    }
  else{
    alert("verifica la contraseña");
  }})
    

   
      
      return NOMBRE;
    })
    }
    
    )

   

    
 

  }
  




  function salir(){
    let log_out = document.createElement("div");
    let reopen = document.createElement("button");
    let opennewaccount = document.createElement("button");

    log_out.style.height = "755px";
    log_out.style.width = " 100%";
    log_out.style.backgroundColor = "green";
    log_out.style.position = "fixed";
    log_out.style.top = "0";
    log_out.style.left = "0";
    log_out.style.display = "flex";
    log_out.style.flexDirection = "row";
    log_out.style.justifyContent = "center";
    log_out.style.alignItems = "center";
    
    
    reopen.style.height = "50px";
    reopen.style.width = "100px";
    reopen.innerText = "Go Back"; 
    reopen.style.backgroundColor = "red";
    reopen.style.margin = "0px 30px";
    
    opennewaccount.style.width = "100px";
    opennewaccount.style.height = "50px";
    opennewaccount.innerText = "Open New account";
    opennewaccount.style.backgroundColor = "red";
    opennewaccount.style.margin = " 0px 30px";


    document.body.append(log_out);
    log_out.append(reopen);
    log_out.append(opennewaccount);
    reopen.addEventListener("click", function(){
      document.body.removeChild(log_out);
    })
    opennewaccount.addEventListener("click", function(){
   window.location.reload();


    })
  }