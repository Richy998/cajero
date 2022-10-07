<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="cajero.css">
</head>
<body>
   
<div id="inside">
   
    <div id="sidel">
   
                <div id="left_menu"class="container mt-3">
               
                   <button class="option" onclick="saldoactual();">Saldo Actual</button>
                   <button class="option" onclick="insert();">Abono</button>
                   <button class="option" onclick="Retiro();">Retiro</button>
                   <button class="option" onclick="movimientos();">Ultimos movimientos</button>
        
                  </div>
                  <div id="saldo">
                    <h3 id="saludo" >Bienvenido</h3>

                    <p class= 'h3 text-primary'> Saldo Actual:</p><br>
                    <div class= 'h3 text-success' id="printsaldo"> Hidden balance</div>
                
                </div>
    </div>



    <div id="sider">
           
            <div id="right_menu" class="container mt-3">
                <button class="option" onclick="modify();">Modificar Informacion</button>
                <button class="option"onclick="salir();">Salir</button>
        
                
                  
              </div>
             
    </div> 
    
</div>
<div  id="intro"> <h1>Bienvenido a Bank of America</h1><br>
    <div class="container pt-5 text-white bg-orange">
              <form action="" id="login">
                  <label for="esingin" >email</label>
                  <input type="email" id="email">
                  <label for="psingin" >password</label>
                  <input type="password" id="password">
       <input type="submit" value="Iniciar sesion" onclick="logon();">        </form> 
       
   </div>
   <div id="bankoa" ></div>
   </div>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <script src="cajero.js"></script>
</body>
</html>
